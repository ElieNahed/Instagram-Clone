import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableHighlight,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import SkeletonSearchScreen from './SkeletonSearchScreen'; // Import the skeleton screen component

const initialPage =
  'https://66134ae153b0d5d80f67157c.mockapi.io/InstagramData/Actor';

interface Character {
  id: string;
  name: string;
  image: string;
}

const SearchScreen = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Character[]>([]);
  const [nextPage, setNextPage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState<Character[]>([]);

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
        setNextPage('');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const shuffleItems = () => {
    const shuffled = items.slice().sort(() => Math.random() - 0.5);
    setItems(shuffled);
  };

  const onRefresh = () => {
    setItems([]);
    setNextPage(initialPage);
    fetchPage(initialPage);
    shuffleItems();
  };

  useEffect(() => {
    fetchPage(initialPage);
  }, []);

  const handleSearch = () => {
    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredItems(filteredItems);
  };

  const showUserName = (userName: string) => {
    Alert.alert('Posted by:', userName);
  };

  const renderItem = ({item}: {item: Character}) => {
    return (
      <TouchableHighlight
        underlayColor="transparent"
        style={styles.touchable}
        onPress={() => showUserName(item.name)}>
        <View key={item.id} style={styles.itemContainer}>
          <Image source={{uri: item.image}} style={styles.image} />
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <SkeletonSearchScreen />
      ) : (
        <View>
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
            data={filteredItems.length > 0 ? filteredItems : items}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id + index}
            onEndReached={() => {
              if (nextPage) {
                fetchPage(nextPage);
              }
            }}
            onEndReachedThreshold={0.1}
            ListFooterComponent={() => loading && <ActivityIndicator />}
            refreshing={loading}
            onRefresh={onRefresh}
            numColumns={3}
            columnWrapperStyle={styles.columnWrapper}
          />
        </View>
      )}
    </View>
  );
};

export default SearchScreen;

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
    marginBottom: 0,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
  },
  image: {
    width: 100,
    height: 129,
    borderRadius: 10,
  },
  columnWrapper: {
    justifyContent: 'space-evenly',
  },
});
