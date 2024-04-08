import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MenuButton from '../../assets/profilepage/menubutton.svg';

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
      {/* Profile Picture and Counter Section */}
      <View style={styles.profileSection}>
        <View style={styles.profilePictureContainer}>
          <Image
            source={{uri: 'https://via.placeholder.com/150'}}
            style={styles.profilePicture}
          />
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
      {/* Photos */}
      <View style={styles.photosContainer}>
        <Image
          source={{uri: 'https://via.placeholder.com/150'}}
          style={styles.photo}
        />
        <Image
          source={{uri: 'https://via.placeholder.com/150'}}
          style={styles.photo}
        />
        <Image
          source={{uri: 'https://via.placeholder.com/150'}}
          style={styles.photo}
        />
      </View>
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
          width: 450,
        },
      }}>
      <Drawer.Screen name="Settings and Activity" component={ProfileScreen} />
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
    width: 80, // Adjust the width here
    height: 80, // Adjust the height here
    borderRadius: 40, // Adjust the border radius to half of width/height
  },
  profilePicture: {
    width: 80, // Adjust the width here
    height: 80, // Adjust the height here
    borderRadius: 40, // Adjust the border radius to half of width/height
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
    fontSize: 18, // Adjust the font size here
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 16, // Adjust the font size here
    color: '#666',
  },
  photosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  photo: {
    width: '32%',
    aspectRatio: 1,
    marginBottom: 10,
  },
  smallerText: {
    fontSize: 16, // Adjust as per your requirement
  },
});

export default DrawerNavigation;
