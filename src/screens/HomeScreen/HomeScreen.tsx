import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Pressable,
  ScrollView,
  Animated,
  StyleSheet,
} from 'react-native';
import {
  CameraRoll,
  PhotoIdentifier,
} from '@react-native-camera-roll/camera-roll';
import {RouteProp, useNavigation} from '@react-navigation/native';
import styles from '../../GlobalStyles';
import {RootStackParamList} from '../../navigation/RootStackParamList';
import imageGalleryStyles from '../HomeScreen/styles';

interface Props {
  route: RouteProp<RootStackParamList, 'Home'>;
}

const HomeScreen: React.FC<Props> = ({route}) => {
  const [albumPhotos, setAlbumPhotos] = useState<PhotoIdentifier[]>([]);
  const capturedImage = route.params?.capturedImage;
  const navigation = useNavigation();
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const colors = ['#FF5733', '#33FF57', '#5733FF'];
  const colorIndex = useRef(0);
  const titleColor = useRef(colors[0]);

  const openCamera = () => {
    navigation.navigate('Camera');
  };

  const viewMoreImages = () => {
    navigation.navigate('Gallery');
  };

  const renderPhotoItem = ({item}: {item: PhotoIdentifier}) => (
    <Image
      source={{uri: item.node.image.uri}}
      style={imageGalleryStyles.photoAlbum}
    />
  );

  const keyExtractor = (item: any, index: number) => index.toString();

  useEffect(() => {
    const fetchAlbumPhotos = async () => {
      try {
        const cameraRollPhotos = await CameraRoll.getPhotos({
          groupTypes: 'All',
          first: 10,
        });
        setAlbumPhotos(cameraRollPhotos.edges);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchAlbumPhotos();

    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    );
    pulseAnimation.start();

    const colorChangeInterval = setInterval(() => {
      colorIndex.current = (colorIndex.current + 1) % colors.length;
      titleColor.current = colors[colorIndex.current];
    }, 2000);

    return () => {
      clearInterval(colorChangeInterval);
    };
  }, []);

  return (
    <View style={styles.viewContainer}>
      <ScrollView>
        <Animated.View
          style={[
            imageGalleryStyles.titleContainer,
            {transform: [{scale: pulseAnim}]},
          ]}>
          <Text style={[imageGalleryStyles.title, {color: titleColor.current}]}>
            Welcome to the Gallery App
          </Text>
        </Animated.View>
        <View style={imageGalleryStyles.sectionContainer}>
          <FlatList
            data={albumPhotos}
            renderItem={renderPhotoItem}
            keyExtractor={keyExtractor}
            horizontal={true}
            ListFooterComponent={() => (
              <Pressable
                onPress={viewMoreImages}
                style={imageGalleryStyles.viewMoreTextContainer}>
                <Text style={imageGalleryStyles.viewMoreText}>
                  View More Images {'>'}
                </Text>
              </Pressable>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
