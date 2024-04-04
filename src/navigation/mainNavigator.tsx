import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from './RootStackParamList';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ApiScreen from '../screens/ApiScreen';
import CameraScreen from '../screens/Camera/CameraScreen';
import MyTabBar from '../components/organisms/CustomTabBar';
import AlbumGallery from '../screens/AlbumGallery';

const MainStackNavigator = createBottomTabNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator tabBar={props => <MyTabBar {...props} />}>
      <MainStackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <MainStackNavigator.Screen
        name="Camera"
        component={CameraScreen}
        options={{headerShown: false}}
      />
      <MainStackNavigator.Screen
        name="Api"
        component={ApiScreen}
        options={{headerShown: false}}
      />
      <MainStackNavigator.Screen
        name="Gallery"
        component={AlbumGallery}
        options={{headerShown: false}}
      />
    </MainStackNavigator.Navigator>
  );
};

export default MainNavigator;
