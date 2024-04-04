import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

// Define interface for actor objects
interface Actor {
  id: string;
  name: string;
  image: string;
}

const HomeScreen = () => {
  const [actors, setActors] = useState<Actor[]>([]);

  useEffect(() => {
    fetchActors();
  }, []);

  const fetchActors = async () => {
    try {
      const response = await fetch(
        'https://6602a7879d7276a75553dd30.mockapi.io/actors',
      );
      const data: Actor[] = await response.json();
      setActors(data);
    } catch (error) {
      console.error('Error fetching actors:', error);
    }
  };

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
    ...actors,
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    marginTop: 5, // Adjust the spacing between the icon and text
    color: 'black', // Adjust text color as needed
    fontWeight: 'bold',
  },
});

export default HomeScreen;
