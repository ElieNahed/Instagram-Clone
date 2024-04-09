import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
  Image,
  Modal,
} from 'react-native';
import LockSvg from '../../assets/login/LockSvg.svg';
import UserSvg from '../../assets/login/UserSvg.svg';
import VisibleSvg from '../../assets/login/VisibleSvg.svg';
import LoginSvg from '../../assets/login/LoginSvg.svg';
import styles from './styles';
import axios from 'axios';
import useAuthStore from '../../store/authStore';

const LoginScreen = () => {
  const [username, setUsername] = useState('kminchelle');
  const [password, setPassword] = useState('0lelplR');
  const [loading, setLoading] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);

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

  const [passHidden, setPassHidden] = useState<false | true>(true);

  const toggleVisibility = () => {
    setPassHidden(prev => !prev);
  };

  return (
    <View style={styles.viewContainer}>
      <Image
        source={require('../../assets/lunchphoto/instaram-icon.png')}
        style={styles.image}
      />
      <View style={styles.formContainer}>
        <Text style={styles.formLabel}>Username:</Text>
        <View style={styles.inputField}>
          <UserSvg width={20} height={20} />
          <TextInput
            onChangeText={setUsername}
            value={username}
            style={styles.inputText}
            placeholder="Enter username here"
            placeholderTextColor={'#cdcdcd'}
          />
        </View>
        <Text style={styles.formLabel}>Password:</Text>
        <View style={styles.inputField}>
          <LockSvg width={20} height={20} />
          <TextInput
            onChangeText={setPassword}
            value={password}
            secureTextEntry={passHidden}
            style={styles.inputText}
            placeholder="Enter password here"
            placeholderTextColor={'#cdcdcd'}
          />
          <TouchableOpacity onPress={toggleVisibility}>
            <VisibleSvg width={20} height={20} />
          </TouchableOpacity>
        </View>
        <View style={styles.loginButton}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Pressable onPress={onLogin}>
              <LoginSvg height={50} width={50} />
            </Pressable>
          )}
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
