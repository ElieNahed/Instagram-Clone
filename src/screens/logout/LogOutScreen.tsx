import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import useAuthStore from '../../store/authStore';

const LogOut = ({navigation}: any) => {
  const stayLogged = () => {
    navigation.navigate('Profile');
  };

  const {setAuthToken} = useAuthStore();
  const out = () => {
    setAuthToken();
  };
  return (
    <View style={styles.viewContainer}>
      <View style={styles.propContainer}>
        <Text style={styles.text}>Are you sure you want to log out?</Text>
        <View style={styles.choices}>
          <Pressable style={styles.yesButton} onPress={out}>
            <Text style={styles.text}>Yes</Text>
          </Pressable>
          <Text style={styles.noButton} onPress={stayLogged}>
            stay logged in
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LogOut;
