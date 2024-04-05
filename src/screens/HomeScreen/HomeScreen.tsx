import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainerRef} from '@react-navigation/native';
import MsgPageIcone from '../../assets/homepage/msgpage-icon.svg';
import StoryFlatList from '../../components/organisms/storylist/StoryFlatList';

interface Actor {
  id: string;
  name: string;
  image: string;
}

type RootStackParamList = {
  HomeScreen: undefined;
  MessageScreen: undefined;
};

type HomeScreenNavigationProp = NavigationContainerRef<RootStackParamList>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
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
    navigation.navigate('MessageScreen'); // Navigate to MessageScreen route
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
