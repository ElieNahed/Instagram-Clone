import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

interface Actor {
  id: string;
  name: string;
  image: string;
}

interface StoryFlatListProps {
  data: Actor[];
}

const StoryFlatList = ({data}: StoryFlatListProps) => {
  const renderActorItem = ({item}: {item: Actor}) => (
    <View style={styles.actorItem}>
      <Image source={{uri: item.image}} style={styles.actorImage} />
      <Text style={styles.actorName}>{item.name}</Text>
    </View>
  );

  // Placeholder user icon
  const renderUserIcon = () => (
    <View style={styles.userIconContainer}>
      <View style={styles.userIcon}></View>
      <Text style={styles.storyText}>Your Story</Text>
    </View>
  );

  // Include the user icon as the first item in the data array
  const dataWithUserIcon: Actor[] = [
    {id: 'userIcon', name: 'Your Name', image: 'https://your.image.url'},
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
  },
  userIconContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  userIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'gray', // Placeholder color
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
