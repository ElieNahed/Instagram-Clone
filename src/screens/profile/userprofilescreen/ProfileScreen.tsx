import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  DrawerLayoutAndroid,
} from 'react-native';

const ProfileScreen = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const drawerRef = useRef<DrawerLayoutAndroid>(null);

  const openDrawer = () => {
    drawerRef.current?.openDrawer();
    setIsDrawerOpen(true);
    setShowMenu(false);
  };

  const closeDrawer = () => {
    drawerRef.current?.closeDrawer();
    setIsDrawerOpen(false);
    setShowMenu(true);
  };

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={300}
      drawerPosition="right"
      renderNavigationView={() => <View style={styles.emptyDrawer}></View>}>
      <View style={styles.container}>
        <View style={styles.header}>
          {/* User name */}
          <Text style={styles.userName}>User Name</Text>
          {/* Menu button */}
          <TouchableOpacity
            style={styles.menuButtonContainer}
            onPress={openDrawer}>
            <Text style={styles.menuButton}>Menu</Text>
          </TouchableOpacity>
        </View>
        {/* Profile Picture and Counter Section */}
        <View style={styles.counterSection}>
          <View style={styles.profilePictureContainer}>
            <Image
              source={{uri: 'https://via.placeholder.com/150'}}
              style={styles.profilePicture}
            />
          </View>
          <View style={styles.counterItems}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>100</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>100k</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>100</Text>
              <Text style={styles.statLabel}>Following</Text>
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
          {/* Add more photos as needed */}
        </View>
      </View>
    </DrawerLayoutAndroid>
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
  menuButtonContainer: {
    alignSelf: 'flex-start',
    marginTop: -10,
  },
  menuButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF', // Example color
  },
  profilePictureContainer: {
    marginRight: 20, // Add margin between profile picture and counters
    // Increase the size of the container to make the picture bigger
    width: 100,
    height: 100,
    borderRadius: 50, // Adjust border radius to maintain circular shape
  },
  profilePicture: {
    width: 100, // Increase the width of the picture
    height: 100, // Increase the height of the picture
    borderRadius: 50, // Adjust border radius to maintain circular shape
  },
  counterSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20, // Add margin at the bottom of the counter section
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 18,
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
  emptyDrawer: {
    flex: 1,
    backgroundColor: 'transparent', // Make drawer transparent
  },
});

export default ProfileScreen;
