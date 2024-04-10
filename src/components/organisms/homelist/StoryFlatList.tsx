// StoryFlatList.js

import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';

interface Actor {
  id: string;
  name: string;
  image: string;
}

interface StoryFlatListProps {
  data: Actor[];
}

const StoryFlatList = ({data}: StoryFlatListProps) => {
  const avatarImage = useSelector(
    (state: RootState) => state.avatar.avatarImage,
  );

  const renderActorItem = ({item}: {item: Actor}) => (
    <View style={styles.actorItem}>
      <Image source={{uri: item.image}} style={styles.actorImage} />
      <Text style={styles.actorName}>{item.name}</Text>
    </View>
  );

  const renderUserIcon = () => (
    <View style={styles.userIconContainer}>
      <View style={styles.userIcon}>
        {avatarImage ? (
          <Image source={{uri: avatarImage}} style={styles.actorImage} />
        ) : null}
      </View>
      <Text style={styles.storyText}>Your Story</Text>
    </View>
  );

  const dataWithUserIcon: Actor[] = [
    {
      id: 'userIcon',
      name: 'Your Name',
      image: avatarImage || '../../../assets/profilepage/noprofilepic.jpg',
    },
    ...data,
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={dataWithUserIcon}
        keyExtractor={item => item.id}
        renderItem={({item}) =>
          item.id === 'userIcon' ? renderUserIcon() : renderActorItem({item})
        }
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.actorList}
      />
      <View style={styles.underline} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  actorList: {
    paddingHorizontal: 10,
  },
  actorItem: {
    marginRight: 10,
    alignItems: 'center',
  },
  actorImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  actorName: {
    marginTop: 5,
    color: 'black',
    fontFamily: 'Serif',
  },
  userIconContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  userIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  storyText: {
    marginTop: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '100%',
  },
});

export default StoryFlatList;
