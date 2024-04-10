import React, {useEffect, useState} from 'react';
import {View, Text, Image, ActivityIndicator, Pressable} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store/store';
import {iUserData} from '../../utils/type';
import {setAvatarImage} from '../../store/avatarSlice';
import axios from 'axios';
import styles from './styles';
import ProfileNavigation from '../../navigation/ProfileNavigation';

const ProfileScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const avatarImage = useSelector(
    (state: RootState) => state.avatar.avatarImage,
  );
  const [userData, setUserData] = useState<iUserData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<iUserData[]>(
          'https://66152deb2fc47b4cf27e3622.mockapi.io/user/user',
        );
        if (response.data && response.data.length > 0) {
          setUserData(response.data[0]);
          dispatch(setAvatarImage(response.data[0].avatar));
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <View style={styles.viewContainer}>
      {userData ? (
        <>
          <View style={styles.userDataContainer}>
            <View>
              <Image
                source={{uri: avatarImage || userData.avatar}}
                style={styles.avatar}
              />
            </View>
            <View style={styles.ffContainer}>
              <View style={styles.ffCol}>
                <Text style={styles.ffNumbers}>{userData.posts.length}</Text>
                <Text style={styles.ffLabel}>Posts</Text>
              </View>
              <View style={styles.ffCol}>
                <Text style={styles.ffNumbers}>{userData.followers}</Text>
                <Text style={styles.ffLabel}>Followers</Text>
              </View>
              <View style={styles.ffCol}>
                <Text style={styles.ffNumbers}>{userData.following}</Text>
                <Text style={styles.ffLabel}>Following</Text>
              </View>
            </View>
          </View>
          <Text style={styles.text}>{userData.name}</Text>
          <Text style={styles.text}>{userData.bio}</Text>
          <View style={styles.profileButtonsContainer}>
            <Pressable>
              <View style={styles.profileButtons}>
                <Pressable
                  onPress={() => {
                    navigation.navigate('Edit Profile');
                  }}>
                  <Text style={styles.buttonTitles}>Edit Profile</Text>
                </Pressable>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.profileButtons}>
                <Text style={styles.buttonTitles}>Share Profile</Text>
              </View>
            </Pressable>
          </View>
          <ProfileNavigation />
        </>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

export default ProfileScreen;
