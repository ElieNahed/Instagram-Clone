import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from './RootStackParamList';
import HomeScreen from '../screens/homescreen/HomeScreen';
import SearchScreen from '../screens/searchscreen/SearchScreen';
import AddPostScreen from '../screens/addpostscreen/AddPostScreen';
import MyTabBar from '../components/organisms/CustomTabBar';
import ProfileScreen from '../screens/profilescreen/ProfileScreen';
import ReelsScreen from '../screens/reelsscreen/ReelsScreen';
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
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <MainStackNavigator.Screen
        name="AddPost"
        component={AddPostScreen}
        options={{headerShown: false}}
      />

      <MainStackNavigator.Screen
        name="Reels"
        component={ReelsScreen}
        options={{headerShown: false}}
      />
      <MainStackNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </MainStackNavigator.Navigator>
  );
};

export default MainNavigator;
