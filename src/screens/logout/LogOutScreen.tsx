import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, Image, Animated, Easing} from 'react-native';
import styles from './styles';
import useAuthStore from '../../store/authStore';

const LogOut = ({navigation}: any) => {
  const {clearAuthToken} = useAuthStore();
  const [backgroundColorAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    startBackgroundAnimation();
  }, []);

  const startBackgroundAnimation = () => {
    Animated.loop(
      Animated.timing(backgroundColorAnim, {
        toValue: 3,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ).start();
  };

  const handleLogout = async () => {
    await clearAuthToken();
    navigation.navigate('LoginScreen');
  };

  return (
    <Animated.View
      style={[styles.viewContainer, {backgroundColor: getAnimatedColor()}]}>
      <Image
        source={require('../../assets/lunchphoto/instaram-icon.png')}
        style={styles.image}
      />
      <Text style={styles.welcomeText}>Are you sure you want to log out?</Text>
      <View style={styles.choices}>
        <Pressable
          style={[styles.button, styles.yesButton]}
          onPress={handleLogout}>
          <Text style={styles.buttonText}>Yes</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.noButton]}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>No</Text>
        </Pressable>
      </View>
    </Animated.View>
  );

  function getAnimatedColor() {
    return backgroundColorAnim.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: ['yellow', 'green', 'gray', 'red'],
    });
  }
};

export default LogOut;
