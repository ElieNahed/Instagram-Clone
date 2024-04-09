import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PostsScreen from '../screens/userpostscreen/PostScreen';
import SavedScreen from '../screens/saveedscreen/SaveScreen';
import {FavoriteIcon, GalleryIcon} from '../components/atoms/ProfileNavIcons';

const Tab = createMaterialTopTabNavigator();

const ProfileNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          if (route.name === 'Posts') {
            return <GalleryIcon />;
          } else if (route.name === 'Favorite') {
            return <FavoriteIcon />;
          }
        },
        tabBarActiveTintColor: '#blue',
        tabBarInactiveTintColor: '#F3F8FF',
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        tabBarItemStyle: {
          backgroundColor: '#fff',
          paddingVertical: 20,
          paddingHorizontal: 16,
          marginBottom: 2,
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'blue',
        },
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
      })}>
      <Tab.Screen name="Posts" component={PostsScreen} />
      <Tab.Screen name="Favorite" component={SavedScreen} />
    </Tab.Navigator>
  );
};

export default ProfileNavigation;
