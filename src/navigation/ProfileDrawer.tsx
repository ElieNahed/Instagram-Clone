import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';
import ProfileScreen from '../screens/profile/UserProfileScreen';
import LogoutScreen from '../screens/logout/LogOutScreen';
import UserAbout from '../screens/userabout/UserAbout';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: styles.drawerStyle,
        headerShown: true,
        headerStyle: styles.headerStyle,
        headerTintColor: '#000',
        headerTitleStyle: styles.headerTitleStyle,
        drawerActiveTintColor: '#ffff',
        drawerActiveBackgroundColor: 'gray',
        drawerInactiveTintColor: 'gray',
        drawerPosition: 'right',
        drawerType: 'slide',
      }}>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="About" component={UserAbout} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: '#fff',
  },
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerTitleStyle: {
    color: '#000',
  },
});

export default MyDrawer;
