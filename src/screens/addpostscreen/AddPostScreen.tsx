import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  Image,
  PermissionsAndroid,
  Linking,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Camera, useCameraDevice, PhotoFile} from 'react-native-vision-camera';
import camStyles from './styles';
import CamFlip from '../../assets/addpost/CameraFlipSvg.svg';
import Close from '../../assets/addpost/CloseSvg.svg';
import CameraSvg from '../../assets/addpost/CameraSvg.svg';
import SaveSvg from '../../assets/addpost/SaveSvg.svg';
import Discard from '../../assets/addpost/DiscardSvg.svg';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddPostScreen = ({navigation}: any) => {
  const [cameraDevice, setCameraDevice] = useState<'back' | 'front'>('back');
  const device = useCameraDevice(cameraDevice);
  const camera = useRef<Camera>(null);

  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [photo, setPhoto] = useState<PhotoFile>();
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const toggleCameraDevice = () => {
    const newDevice = cameraDevice === 'back' ? 'front' : 'back';
    setCameraDevice(newDevice);
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs access to your camera.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission granted');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const openCamera = () => {
    setIsCameraVisible(true);
  };

  const closeCamera = () => setIsCameraVisible(false);

  const takePhoto = async () => {
    const photo = await camera.current?.takePhoto();

    if (photo && photo.path) {
      setCapturedImage(`file://${photo.path}`);
      setPhoto(photo);
      setIsCameraVisible(false);
    } else {
      console.error('Failed to capture photo');
    }
  };

  const savePhotoToStorage = async (photo: PhotoFile) => {
    try {
      await AsyncStorage.setItem('capturedPhoto', JSON.stringify(photo));
      console.log('Photo saved to AsyncStorage:', photo);
    } catch (error) {
      console.error('Error saving photo to AsyncStorage:', error);
    }
  };

  const saveImage = async () => {
    try {
      setIsLoading(true);

      if (!photo) {
        throw new Error('No photo to send');
      }

      await savePhotoToStorage(photo);

      const data = {
        url: photo.path,
      };

      const response = await axios.post(
        'https://660309462393662c31ce69e3.mockapi.io/img',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      console.log('Data posted successfully:', response.data);

      await CameraRoll.saveAsset(photo.path);

      navigation.navigate('PostScreen', {refresh: true});
    } catch (error) {
      console.error('Error posting data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (device === null) {
    return (
      <View style={camStyles.mainView}>
        <Text style={camStyles.errorText}>Camera feature not supported</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={camStyles.mainView}>
      {isLoading ? ( // Render loading spinner if isLoading is true
        <ActivityIndicator size="large" color="#0000ff" />
      ) : capturedImage ? (
        <>
          <View style={camStyles.capturedImageContainer}>
            <Image
              source={{uri: capturedImage}}
              style={camStyles.capturedImage}
            />
          </View>
          <View style={camStyles.capturedButtonsContainer}>
            <Pressable
              onPress={() => {
                setCapturedImage(null);
                setIsCameraVisible(true); // Show the camera view again
              }}>
              <Discard width={30} height={30} />
            </Pressable>
            <Pressable onPress={saveImage}>
              <SaveSvg width={30} height={30} />
            </Pressable>
          </View>
        </>
      ) : (
        <Pressable onPress={openCamera} style={camStyles.openCameraButton}>
          <CameraSvg width={40} height={40} />
        </Pressable>
      )}

      {isCameraVisible && (
        <>
          <View style={camStyles.cameraButtons}>
            <Pressable onPress={closeCamera}>
              <Close width={30} height={30} />
            </Pressable>
            <Pressable onPress={toggleCameraDevice}>
              <CamFlip width={30} height={30} />
            </Pressable>
          </View>

          <Camera
            photo
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device!}
            isActive
            resizeMode="contain"
          />
          <View style={camStyles.captureButtonContainer}>
            <Pressable onPress={takePhoto}>
              <View style={camStyles.captureButton} />
            </Pressable>
          </View>
        </>
      )}

      {capturedImage && (
        <Pressable
          style={camStyles.backButtonContainer}
          onPress={() => setCapturedImage(null)}>
          <Text style={camStyles.backButtonText}>Back</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
};

export default AddPostScreen;
