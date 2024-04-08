import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableHighlight,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

const initialPage =
  'https://66134ae153b0d5d80f67157c.mockapi.io/InstagramData/Actor';

interface Character {
  id: string;
  name: string;
  image: string;
}

const MessageScreen = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Character[]>([]);
  const [nextPage, setNextPage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

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
      <TouchableHighlight underlayColor="transparent" style={styles.touchable}>
        <View key={item.id} style={styles.itemContainer}>
          <Image source={{uri: item.image}} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  const handleSearch = () => {
    // Perform search based on the searchQuery
    // For simplicity, let's assume we're filtering items by name
    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setItems(filteredItems);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  touchable: {
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
  },
});

export default MessageScreen;
