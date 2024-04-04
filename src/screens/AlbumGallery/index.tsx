import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
  Alert,
  Button,
  Animated,
} from 'react-native';
import axios from 'axios';
import MapView, {Marker} from 'react-native-maps';
import apiStyles from './styles';

interface Photo {
  id: number;
  url: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

const PhotoList = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const translateY = new Animated.Value(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://660309462393662c31ce69e3.mockapi.io/img',
      );
      setPhotos(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  const handleImagePress = (latitude: number, longitude: number) => {
    setSelectedLocation({latitude, longitude});
    Alert.alert(
      'Details',
      `Latitude: ${latitude}\nLongitude: ${longitude}`,
      [
        {
          text: 'Show on Map',
          onPress: () => {},
        },
        {
          text: 'Cancel',
          onPress: () => setSelectedLocation(null),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };

  const handleCloseMap = () => {
    Animated.timing(translateY, {
      toValue: -700,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setSelectedLocation(null);
      translateY.setValue(0);
    });
  };

  const deletePhoto = async (id: number) => {
    try {
      await axios.delete(
        `https://660309462393662c31ce69e3.mockapi.io/img/${id}`,
      );
      setPhotos(prevPhotos => prevPhotos.filter(photo => photo.id !== id));
      setFavorites(prevFavorites =>
        prevFavorites.filter(favId => favId !== id),
      );
      setSelectedLocation(null);
    } catch (error) {
      console.error('Error deleting photo:', error);
    }
  };

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      if (showFavorites) {
        // If in favorites section, remove from favorites
        setFavorites(prevFavorites =>
          prevFavorites.filter(favId => favId !== id),
        );
      } else {
        // If in regular section, move to favorites
        setFavorites(prevFavorites => [...prevFavorites, id]);
      }
    } else {
      // If not in favorites, add to favorites
      setFavorites(prevFavorites => [...prevFavorites, id]);
    }
  };

  const filteredPhotos = showFavorites
    ? photos.filter(photo => favorites.includes(photo.id))
    : photos.filter(photo => !favorites.includes(photo.id));

  return (
    <View style={apiStyles.container}>
      <View style={apiStyles.rowContainer}>
        <Button title="Photos" onPress={() => setShowFavorites(false)} />
        <Button
          title="Favorite Photos"
          onPress={() => setShowFavorites(true)}
        />
      </View>
      <View style={apiStyles.album}>
        <FlatList
          data={filteredPhotos}
          renderItem={({item}) => (
            <View style={apiStyles.item}>
              <TouchableOpacity
                onPress={() =>
                  handleImagePress(
                    item.location.latitude,
                    item.location.longitude,
                  )
                }>
                <Image
                  source={{uri: `file://${item.url}`}}
                  style={apiStyles.image}
                />
              </TouchableOpacity>
              {!showFavorites ? (
                <Button
                  title={
                    favorites.includes(item.id)
                      ? 'Remove from Favorites'
                      : 'Favorite'
                  }
                  onPress={() => toggleFavorite(item.id)}
                  color={favorites.includes(item.id) ? '#FFD700' : '#808080'}
                />
              ) : (
                <Button
                  title="Remove from Favorites"
                  onPress={() => toggleFavorite(item.id)}
                  color="#FFD700"
                />
              )}
              <Button
                title="Delete"
                onPress={() => deletePhoto(item.id)}
                color="#FF6347"
              />
            </View>
          )}
          keyExtractor={item => item.id.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
      {selectedLocation && (
        <>
          <Animated.View
            style={[StyleSheet.absoluteFill, {transform: [{translateY}]}]}>
            <MapView
              style={StyleSheet.absoluteFill}
              initialRegion={{
                latitude: selectedLocation.latitude,
                longitude: selectedLocation.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
              <Marker
                coordinate={{
                  latitude: selectedLocation.latitude,
                  longitude: selectedLocation.longitude,
                }}
              />
            </MapView>
            <Button title="Close Map" onPress={handleCloseMap} />
          </Animated.View>
        </>
      )}
    </View>
  );
};

export default PhotoList;
