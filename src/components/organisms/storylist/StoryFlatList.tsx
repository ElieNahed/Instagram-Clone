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
  );
};

const styles = StyleSheet.create({
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
    marginTop: 5, // Adjust the spacing between the icon and text
    color: 'black', // Adjust text color as needed
    fontWeight: 'bold',
  },
});

export default StoryFlatList;
