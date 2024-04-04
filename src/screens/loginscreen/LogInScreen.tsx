import React, {useState} from 'react';
import {View, StyleSheet, Button as RNButton} from 'react-native';
import TextField from '../../components/atoms/TextField';
import Button from '../../components/atoms/Button';

interface LoginProps {
  onLoginSuccess: () => void;
}

const LoginScreen: React.FC<LoginProps> = ({onLoginSuccess}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'test' && password === '1') {
      onLoginSuccess();
    } else {
      console.log('Incorrect credentials. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <TextField
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextField
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default LoginScreen;
