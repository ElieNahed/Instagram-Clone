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
  const [filteredItems, setFilteredItems] = useState<Character[]>([]);
  const [nextPage, setNextPage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const fetchPage = async (url: string) => {
    try {
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
        setNextPage('');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
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

  useEffect(() => {
    // Filter items whenever searchQuery changes
    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredItems(filtered);
  }, [searchQuery, items]);

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
    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredItems(filtered);
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
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id + index} // Generate unique keys
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
