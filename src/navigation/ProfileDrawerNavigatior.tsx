import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import UserProfileScreen from '../screens/profile/UserProfileScreen';

const Drawer = createDrawerNavigator();

const ProfileDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
        drawerStyle: {
          width: 450,
        },
      }}>
      <Drawer.Screen
        name="Settings and Activity"
        component={UserProfileScreen}
      />
    </Drawer.Navigator>
  );
};

export default ProfileDrawerNavigator;
