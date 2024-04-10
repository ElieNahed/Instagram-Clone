import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Modal,
} from 'react-native';
import LockSvg from '../../assets/login/Lock.svg';
import UserSvg from '../../assets/login/User.svg';
import VisibleSvg from '../../assets/login/eye.svg';
import Button from '../../components/atoms/Button'; // Import the Button component

import styles from './styles';
import axios from 'axios';
import useAuthStore from '../../store/authStore';

const LoginScreen = () => {
  const [username, setUsername] = useState('kminchelle');
  const [password, setPassword] = useState('0lelplR');
  const [loading, setLoading] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [passHidden, setPassHidden] = useState(true);

  const {setAuthToken} = useAuthStore();

  const onLogin = async () => {
    try {
      setLoading(true);

      const result = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password,
      });

      setAuthToken(result.data.token);
    } catch (err) {
      console.log(err);
      setErrorModalVisible(true);
    } finally {
      setLoading(false);
    }
  };

  const toggleVisibility = () => {
    setPassHidden(prev => !prev);
  };

  const isLoginDisabled = !username || !password; // Check if username or password is empty

  return (
    <View style={styles.viewContainer}>
      <Image
        source={require('../../assets/lunchphoto/instaram-icon.png')}
        style={styles.image}
      />
      <Text style={styles.welcomeText}>Welcome back!</Text>
      <View style={styles.formContainer}>
        <Text style={styles.formLabel}>Username:</Text>
        <View style={styles.inputField}>
          <UserSvg width={20} height={20} />
          <TextInput
            onChangeText={setUsername}
            value={username}
            style={styles.inputText}
            placeholder="Enter username here"
            placeholderTextColor="#cdcdcd"
          />
        </View>
        <Text style={styles.formLabel}>Password:</Text>
        <View style={[styles.inputField, {marginBottom: 20}]}>
          <LockSvg width={20} height={20} />
          <TextInput
            onChangeText={setPassword}
            value={password}
            secureTextEntry={passHidden}
            style={styles.inputText}
            placeholder="Enter password here"
            placeholderTextColor="#cdcdcd"
          />
          <TouchableOpacity onPress={toggleVisibility}>
            <VisibleSvg width={20} height={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.loginButton}>
          <Button title="Login" onPress={onLogin} disabled={isLoginDisabled} />
        </View>
      </View>
      <Modal visible={errorModalVisible} animationType="fade" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Invalid username or password. Close this alert and try again.
            </Text>
            <TouchableOpacity onPress={() => setErrorModalVisible(false)}>
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LoginScreen;
