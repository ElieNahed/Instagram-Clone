import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MenuButton from '../../assets/profilepage/menubutton.svg';
import LogOutScreen from '../logout/LogOutScreen';
import EditProfile from '../editprofile/EditProfileScreen';

const Drawer = createDrawerNavigator();

const ProfileScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* User name */}
        <Text style={styles.userName}>User Name</Text>
        {/* Menu Toggle Button */}
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.openDrawer()}>
          {/* Adjust the size of MenuButton component */}
          <MenuButton width={20} height={20} />
        </TouchableOpacity>
      </View>
      {/* Gray placeholder image */}
      <View style={styles.profileSection}>
        <View style={styles.profilePictureContainer}>
          <View style={styles.grayPlaceholder} />
        </View>
        <View style={styles.counterItems}>
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, styles.smallerText]}>100</Text>
            <Text style={[styles.statLabel, styles.smallerText]}>Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, styles.smallerText]}>100k</Text>
            <Text style={[styles.statLabel, styles.smallerText]}>
              Followers
            </Text>
          </View>
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, styles.smallerText]}>100</Text>
            <Text style={[styles.statLabel, styles.smallerText]}>
              Following
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.photosContainer}>{/* Photos */}</View>
    </View>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
        drawerStyle: {
          width: 250,
        },
      }}>
      <Drawer.Screen name="Settings and Activity" component={ProfileScreen} />
      <Drawer.Screen name="EditProfile" component={EditProfile} />
      <Drawer.Screen name="LogOut" component={LogOutScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuButton: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePictureContainer: {
    marginRight: 20,
  },
  grayPlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: '#ccc',
    borderRadius: 40,
  },
  counterItems: {
    flexDirection: 'row',
    marginLeft: 15,
  },
  statItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 16,
    color: '#666',
  },
  photosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  smallerText: {
    fontSize: 16,
  },
});

export default DrawerNavigation;
