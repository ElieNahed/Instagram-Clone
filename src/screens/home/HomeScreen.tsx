import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  Text,
  Pressable,
  RefreshControl,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  displayNotificationMessage,
  updateLikeCount,
} from '../../store/notificationSlice'; // Update import statement
import StoryFlatList from '../../components/organisms/homelist/StoryFlatList';
import HomeHeader from '../../components/organisms/header/HomeHeader';
import LikeIcon from '../../assets/homepage/Like.svg';
import CommentIcon from '../../assets/homepage/Comment.svg';
import ShareIcon from '../../assets/homepage/Share.svg';
import SaveIcon from '../../assets/homepage/Save.svg';
import notifee from '@notifee/react-native';
import styles from './styles';
import {RootState} from '../../store/store';

interface Actor {
  id: string;
  name: string;
  image: string;
}

const HomeScreen = () => {
  const navigation = useNavigation();
  const [actors, setActors] = useState<Actor[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const dispatch = useDispatch();
  const likeCounts = useSelector(
    (state: RootState) => state.notification.likeCounts,
  );

  useEffect(() => {
    const fetchActorsAndInitializeLikes = async () => {
      try {
        const response = await fetch(
          'https://66134ae153b0d5d80f67157c.mockapi.io/InstagramData/Actor',
        );

        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }

        const data: Actor[] = await response.json();
        setActors(data);
        setRefreshing(false); // Finish refreshing
      } catch (error) {
        console.error('Error fetching actors:', error);
        setRefreshing(false); // Finish refreshing even if there's an error
      }
    };

    fetchActorsAndInitializeLikes();
  }, []);

  const onRefresh = () => {
    setRefreshing(true); // Start refreshing
    fetchActorsAndInitializeLikes();
  };

  const incrementLikeCount = async (actorId: string) => {
    const updatedCount = likeCounts[actorId] + 1;
    dispatch(updateLikeCount({actorId, count: updatedCount}));

    try {
      await notifee.requestPermission();
      const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
        vibration: true,
        vibrationPattern: [500, 1000],
        sound: 'hollow',
      });

      const actor = actors.find(actor => actor.id === actorId);
      if (actor) {
        const message = `You just like ${actor.name}'s post `;
        dispatch(displayNotificationMessage(message)); // Dispatch action to update notification message in Redux store
        await notifee.displayNotification({
          title: 'New Notification',
          body: message,
          sound: 'hollow.mp3',
          android: {
            channelId,
            vibrationPattern: [500, 1000],
            pressAction: {
              id: 'default',
            },
          },
        } as any);
      }
    } catch (error) {
      console.error('Error displaying notification:', error);
    }
  };

  const decrementLikeCount = (actorId: string) => {
    const updatedCount = Math.max(0, (likeCounts[actorId] || 0) - 1);
    dispatch(updateLikeCount({actorId, count: updatedCount}));
  };

  const handleShare = (actorId: string) => {
    console.log('Shared actor:', actorId);
  };

  const handleSave = (actorId: string) => {
    console.log('Saved actor:', actorId);
  };

  const renderActorItem = ({item}: {item: Actor}) => (
    <View style={styles.actorContainer}>
      <View style={styles.actorHeader}>
        <Image source={{uri: item.image}} style={styles.profileIcon} />
        <Text style={styles.userName}>{item.name}</Text>
      </View>
      <Image
        key={item.id}
        source={{uri: item.image}}
        style={[
          styles.actorImage,
          {width: screenWidth * 0.8, height: screenWidth * 0.8},
        ]}
      />
      <View style={styles.iconContainer}>
        <Pressable
          style={styles.likeIconContainer}
          onPress={() => {
            likeCounts[item.id] === 0
              ? incrementLikeCount(item.id)
              : decrementLikeCount(item.id);
          }}>
          <LikeIcon
            width={30}
            height={30}
            fill={likeCounts[item.id] > 0 ? '#FF0000' : 'none'}
            stroke={likeCounts[item.id] > 0 ? '#000000' : '#FFFFFF'}
            strokeWidth={likeCounts[item.id] > 0 ? 3 : 0}
          />
        </Pressable>
        <Pressable style={styles.commentIconContainer}>
          <CommentIcon width={25} height={25} />
        </Pressable>
        <Pressable
          style={styles.shareIconContainer}
          onPress={() => handleShare(item.id)}>
          <ShareIcon width={30} height={30} />
        </Pressable>
        <View style={styles.saveIconContainer}>
          <Pressable onPress={() => handleSave(item.id)}>
            <SaveIcon width={40} height={40} />
          </Pressable>
        </View>
      </View>
      <Text style={styles.likeCount}>like:{likeCounts[item.id]}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HomeHeader title={'Instagram-clone'} navigation={navigation} />
      </View>
      <StoryFlatList data={actors} />
      <FlatList
        data={actors}
        renderItem={renderActorItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.actorListContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default HomeScreen;
function fetchActorsAndInitializeLikes() {
  throw new Error('Function not implemented.');
}
