import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  Text,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import StoryFlatList from '../../components/organisms/homelist/StoryFlatList';
import HomeHeader from '../../components/organisms/header/HomeHeader';
import LikeIcon from '../../assets/homepage/Like.svg';
import CommentIcon from '../../assets/homepage/Comment.svg';
import ShareIcon from '../../assets/homepage/Share.svg';
import SaveIcon from '../../assets/homepage/Save.svg';
import notifee from '@notifee/react-native';

interface Actor {
  id: string;
  name: string;
  image: string;
}

const HomeScreen = () => {
  const navigation = useNavigation();
  const [actors, setActors] = useState<Actor[]>([]);
  const [likeCounts, setLikeCounts] = useState<{[key: string]: number}>({});
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    fetchActors();
  }, []);

  const fetchActors = async () => {
    try {
      const response = await fetch(
        'https://66134ae153b0d5d80f67157c.mockapi.io/InstagramData/Actor',
      );
      const data: Actor[] = await response.json();
      setActors(data);

      const initialLikeCounts: {[key: string]: number} = {};
      data.forEach(actor => {
        initialLikeCounts[actor.id] = 0;
      });
      setLikeCounts(initialLikeCounts);
    } catch (error) {
      console.error('Error fetching actors:', error);
    }
  };

  const incrementLikeCount = async (actorId: string) => {
    setLikeCounts(prevCounts => ({
      ...prevCounts,
      [actorId]: prevCounts[actorId] + 1,
    }));

    // Display notification when like button is clicked
    try {
      await notifee.requestPermission();
      const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
        vibration: true,
        vibrationPattern: [500, 1000],
      });

      const actor = actors.find(actor => actor.id === actorId);
      if (actor) {
        const message = `You just like ${actor.name}'s post `;
        await notifee.displayNotification({
          title: 'New Notification',
          body: message,
          android: {
            channelId,
            vibrationPattern: [500, 1000],
            pressAction: {
              id: 'default',
            },
          },
        });
      }
    } catch (error) {
      console.error('Error displaying notification:', error);
    }
  };

  const decrementLikeCount = (actorId: string) => {
    setLikeCounts(prevCounts => ({
      ...prevCounts,
      [actorId]: Math.max(0, prevCounts[actorId] - 1),
    }));
  };

  const handleShare = (actorId: string) => {
    console.log('Shared actor:', actorId);
    // Implement share functionality here
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
            fill={likeCounts[item.id] > 0 ? '#FF0000' : 'none'} // Fill red if liked, none otherwise
            stroke={likeCounts[item.id] > 0 ? '#000000' : '#FFFFFF'} // Black border if liked, white border otherwise
            strokeWidth={likeCounts[item.id] > 0 ? 3 : 0} // Set stroke width to 3 if liked, 0 otherwise
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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  actorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  actorImage: {
    borderRadius: 10,
    aspectRatio: 1,
  },
  actorHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    alignSelf: 'flex-start', // Align the header content to the start of the container
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    alignSelf: 'flex-start',
  },
  likeIconContainer: {
    marginRight: 10,
  },
  commentIconContainer: {
    marginRight: 10,
  },
  shareIconContainer: {
    marginRight: 10,
  },
  saveIconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  likeCount: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    alignSelf: 'flex-start',
  },
  actorListContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 20,
  },
});

export default HomeScreen;
