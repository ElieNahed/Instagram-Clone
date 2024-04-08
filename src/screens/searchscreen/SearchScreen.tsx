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
  Alert, // Import Alert
} from 'react-native';

const initialPage = 'https://6602a7879d7276a75553dd30.mockapi.io/actors';

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

  const handleSearch = () => {
    // Perform search based on the searchQuery
    // For simplicity, let's assume we're filtering items by name
    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredItems(filteredItems);
  };

  const showUserName = (userName: string) => {
    // Show the username using the Alert component
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
        numColumns={3} // To display images in multiple columns
        columnWrapperStyle={styles.columnWrapper} // To provide spacing between columns
      />
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
    marginBottom: 0, // Remove margin bottom
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0, // Remove margin
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
