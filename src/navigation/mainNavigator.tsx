import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from './RootStackParamList';
import {Image} from 'react-native';
import SearchScreen from '../screens/searchscreen/SearchScreen';
import AddPostScreen from '../screens/addpostscreen/AddPostScreen';
import MyTabBar from '../components/organisms/tabbar/CustomTabBar';
import ReelsScreen from '../screens/reelsscreen/ReelsScreen';
import HomeIcon from '../assets/homepage/home.svg';
import SearchIcon from '../assets/homepage/search.svg';
import AddPostIcon from '../assets/homepage/addpost.svg';
import ReelsIcon from '../assets/homepage/reels.svg';
import ProfileIcon from '../assets/profilepage/profileIcon.svg';
import HomeNavigation from './HomeNavigation';
import UserScreen from '../screens/userscreen/UserScreen';

const MainStackNavigator = createBottomTabNavigator<RootStackParamList>();

const MainNavigator = () => {
  const avatarImage = useSelector(
    (state: RootState) => state.avatar.avatarImage,
  ); // Fetching avatar image from Redux

  const icons = [HomeIcon, SearchIcon, AddPostIcon, ReelsIcon, ProfileIcon];

  return (
    <MainStackNavigator.Navigator
      tabBar={props => <MyTabBar icons={icons} {...props} />}>
      <MainStackNavigator.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({size}) => <HomeIcon width={size} height={size} />, // Fixed color
        }}
      />
      <MainStackNavigator.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({size}) => <SearchIcon width={size} height={size} />, // Fixed color
        }}
      />
      <MainStackNavigator.Screen
        name="AddPost"
        component={AddPostScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({size}) => <AddPostIcon width={size} height={size} />, // Fixed color
        }}
      />
      <MainStackNavigator.Screen
        name="Reels"
        component={ReelsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({size}) => <ReelsIcon width={size} height={size} />, // Fixed color
        }}
      />
      <MainStackNavigator.Screen
        name="Profile"
        component={UserScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({size}) =>
            avatarImage ? (
              <Image
                source={{uri: avatarImage}}
                style={{width: size, height: size}}
              />
            ) : (
              <ProfileIcon width={size} height={size} />
            ),
        }}
      />
    </MainStackNavigator.Navigator>
  );
};

export default MainNavigator;
