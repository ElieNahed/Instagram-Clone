import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import StoryFlatList from '../../components/organisms/storylist/StoryFlatList';
import MsgPageIcone from '../../assets/homepage/msgpage-icon.svg';

interface Actor {
  id: string;
  name: string;
  image: string;
}

const HomeScreen: React.FC<{navigation: any}> = ({navigation}) => {
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

  const goToMessageScreen = () => {
    navigation.navigate('MessageScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Instagram-Clone</Text>
        <TouchableOpacity onPress={goToMessageScreen}>
          <MsgPageIcone />
        </TouchableOpacity>
      </View>
      <StoryFlatList data={actors} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'flex-start',
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
  title: {
    fontFamily: 'Arial',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default HomeScreen;
