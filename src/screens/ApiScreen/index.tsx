import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableHighlight,
  Text,
} from 'react-native';
import apiStyles from './styles';

const initialPage = 'https://6602a7879d7276a75553dd30.mockapi.io/actors';

interface Character {
  id: string;
  name: string;
  image: string;
}

const ApiScreen = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Character[]>([]);
  const [nextPage, setNextPage] = useState('');

  const fetchPage = async (url: string) => {
    try {
      if (loading) {
        return;
      }
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const responseJson = await response.json();
      setItems(existingItems => {
        return [...existingItems, ...responseJson];
      });
      if (responseJson.info && responseJson.info.next) {
        setNextPage(responseJson.info.next);
      } else {
        setNextPage(''); // Reset nextPage if it's undefined
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      // You can add error handling logic here, such as showing an error message to the user
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = () => {
    setItems([]);
    setNextPage(initialPage);
    fetchPage(initialPage);
  };

  useEffect(() => {
    fetchPage(initialPage);
  }, []);

  const renderItem = ({item}: {item: Character}) => {
    return (
      <TouchableHighlight
        underlayColor="transparent"
        style={apiStyles.touchable}>
        <View key={item.id} style={apiStyles.itemContainer}>
          <Image source={{uri: item.image}} style={apiStyles.image} />
          <Text style={apiStyles.name}>{item.name}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View style={apiStyles.viewContainer}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={() => {
          if (nextPage) {
            fetchPage(nextPage);
          }
        }}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() => loading && <ActivityIndicator />}
        refreshing={loading}
        onRefresh={onRefresh}
      />
    </View>
  );
};

export default ApiScreen;
