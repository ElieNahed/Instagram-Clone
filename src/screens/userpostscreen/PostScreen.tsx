import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  Dimensions,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
  Text,
} from 'react-native';
import styles from './styles';
import axios from 'axios';
import {iUserData} from '../../utils/type';

const PostsScreen = () => {
  const [userData, setUserData] = useState<iUserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const {width, height} = Dimensions.get('window');
  const imageWidth = width / 3;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<iUserData[]>(
          'https://66152deb2fc47b4cf27e3622.mockapi.io/user/user',
        );
        if (response.data && response.data.length > 0) {
          setUserData(response.data[0]);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderPostItem = ({item}: {item: {id: string; image: string}}) => (
    <TouchableOpacity
      key={item.id}
      onPress={() => setSelectedImage(item.image)}>
      <Image
        source={{uri: `${item.image}`}}
        style={{width: imageWidth, height: imageWidth}}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.viewContainer}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <FlatList
            data={userData?.posts || []}
            renderItem={renderPostItem}
            keyExtractor={item => item.id.toString()}
            numColumns={3}
          />
          <Modal
            visible={!!selectedImage}
            transparent={true}
            onRequestClose={() => setSelectedImage(null)}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              }}>
              <TouchableOpacity
                style={{position: 'absolute', top: 20, right: 20, zIndex: 1}}
                onPress={() => setSelectedImage(null)}>
                <Text style={{color: 'white', fontSize: 18}}>Close</Text>
              </TouchableOpacity>
              {selectedImage && (
                <Image
                  source={{uri: selectedImage}}
                  style={{width, height}}
                  resizeMode="contain"
                />
              )}
            </View>
          </Modal>
        </>
      )}
    </View>
  );
};

export default PostsScreen;
