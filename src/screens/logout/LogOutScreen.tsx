// LogOutScreen.tsx

import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import useAuthStore from '../../store/authStore';

interface AuthStoreType {
  authToken: string | null;
  clearAuthToken: () => void;
}

const LogOut = ({navigation}: any) => {
  const {clearAuthToken} = useAuthStore() as AuthStoreType;

  const handleLogout = async () => {
    await clearAuthToken();
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.viewContainer}>
      <View style={styles.propContainer}>
        <Text style={styles.text}>Are you sure you want to log out?</Text>
        <View style={styles.choices}>
          <Pressable style={styles.yesButton} onPress={handleLogout}>
            <Text style={styles.text}>Click to Log Out</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LogOut;
