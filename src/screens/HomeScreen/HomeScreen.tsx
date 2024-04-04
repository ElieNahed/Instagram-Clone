import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import StoryFlatList from '../../components/organisms/storylist/StoryFlatList';

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instagram-Clone</Text>
      <StoryFlatList data={actors} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start', // Align items to the start (left)
    justifyContent: 'flex-start', // Align content to the start (top)
    paddingTop: 20, // Add some padding to give space between the title and the top edge
    paddingHorizontal: 20, // Add some horizontal padding for better alignment
  },
  title: {
    fontFamily: 'Arial', // Change the font family
    fontSize: 15, // Adjust the font size if needed
    fontWeight: 'bold', // Adjust font weight if needed
    marginBottom: 20, // Add margin bottom to separate the title from the content below
    color: 'black', // Set the font color to black
  },
});

export default HomeScreen;
