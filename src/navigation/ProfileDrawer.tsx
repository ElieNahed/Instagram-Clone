import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';
import ProfileScreen from '../screens/profile/UserProfileScreen';
import LogoutScreen from '../screens/logout/LogOutScreen';
// import UserAbout from '../screens/UserAbout';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: styles.drawerStyle,
        headerShown: true,
        headerStyle: styles.headerStyle,
        headerTintColor: '#fff',
        headerTitleStyle: styles.headerTitleStyle,
        drawerActiveTintColor: '#F3F8FF',
        drawerActiveBackgroundColor: 'gray',
        drawerInactiveTintColor: 'gray',
        drawerPosition: 'right',
        drawerType: 'slide',
      }}>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      {/* <Drawer.Screen name="About Account" component={UserAbout} /> */}
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: '#222',
  },
  headerStyle: {
    backgroundColor: '#222',
  },
  headerTitleStyle: {
    color: '#F3F8FF',
  },
});

export default MyDrawer;
