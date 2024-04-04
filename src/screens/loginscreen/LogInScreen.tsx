// screens/LoginScreen.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import TextField from '../../components/atoms/TextField';
import Button from '../../components/atoms/Button';

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextField placeholder="Username" />
      <TextField placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={() => console.log('Login pressed')} />
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
