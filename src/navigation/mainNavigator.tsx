import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from './RootStackParamList';
import HomeScreen from '../screens/home/HomeScreen';
import SearchScreen from '../screens/searchscreen/SearchScreen';
import AddPostScreen from '../screens/addpostscreen/AddPostScreen';
import MyTabBar from '../components/organisms/tabbar/CustomTabBar';
import UserProfileScreen from '../screens/profile/UserProfileScreen';
import ReelsScreen from '../screens/reelsscreen/ReelsScreen';
import HomeIcon from '../assets/homepage/home.svg';
import SearchIcon from '../assets/homepage/search.svg';
import AddPostIcon from '../assets/homepage/addpost.svg';
import ReelsIcon from '../assets/homepage/reels.svg';
import ProfileIcon from '../assets/homepage/msgpage-icon.svg';
import HomeNavigation from './HomeNavigation';
const MainStackNavigator = createBottomTabNavigator<RootStackParamList>();

const MainNavigator = () => {
  const icons = [HomeIcon, SearchIcon, AddPostIcon, ReelsIcon, ProfileIcon];

  return (
    <MainStackNavigator.Navigator
      tabBar={props => <MyTabBar icons={icons} {...props} />}>
      <MainStackNavigator.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({size}) => (
            <HomeIcon width={size} height={size} /> // Fixed color
          ),
        }}
      />
      <MainStackNavigator.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({size}) => (
            <SearchIcon width={size} height={size} /> // Fixed color
          ),
        }}
      />
      <MainStackNavigator.Screen
        name="AddPost"
        component={AddPostScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({size}) => (
            <AddPostIcon width={size} height={size} /> // Fixed color
          ),
        }}
      />
      <MainStackNavigator.Screen
        name="Reels"
        component={ReelsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({size}) => (
            <ReelsIcon width={size} height={size} /> // Fixed color
          ),
        }}
      />
      <MainStackNavigator.Screen
        name="Profile"
        component={UserProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({size}) => (
            <ProfileIcon width={size} height={size} /> // Fixed color
          ),
        }}
      />
    </MainStackNavigator.Navigator>
  );
};

export default MainNavigator;
