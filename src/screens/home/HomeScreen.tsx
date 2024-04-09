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

  const incrementLikeCount = (actorId: string) => {
    setLikeCounts(prevCounts => ({
      ...prevCounts,
      [actorId]: prevCounts[actorId] + 1,
    }));
  };

  const decrementLikeCount = (actorId: string) => {
    setLikeCounts(prevCounts => ({
      ...prevCounts,
      [actorId]: Math.max(0, prevCounts[actorId] - 1),
    }));
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
            fill={likeCounts[item.id] > 0 ? '#FF0000' : 'none'} // Fill red if liked, none otherwise
            stroke={likeCounts[item.id] > 0 ? '#000000' : '#FFFFFF'} // Black border if liked, white border otherwise
            strokeWidth={likeCounts[item.id] > 0 ? 3 : 0} // Set stroke width to 3 if liked, 0 otherwise
          />
        </Pressable>
        <Pressable style={styles.commentIconContainer}>
          <CommentIcon width={25} height={25} />
        </Pressable>
        <Pressable
          style={styles.commentIconContainer}
          onPress={() => {
            handleShare(item.id);
          }}>
          <ShareIcon width={30} height={30} />
        </Pressable>
        <Pressable
          style={styles.saveIconContainer}
          onPress={() => {
            handleSave(item.id);
          }}>
          <SaveIcon width={30} height={30} />
        </Pressable>
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
    justifyContent: 'space-between', // Align items with space between them
    marginTop: 5,
    alignSelf: 'flex-start',
  },
  likeIconContainer: {
    marginRight: 10,
  },
  commentIconContainer: {
    marginRight: 10,
  },
  saveIconContainer: {
    marginRight: 10,
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
