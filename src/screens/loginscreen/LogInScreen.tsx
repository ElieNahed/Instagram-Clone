// LoginScreen.tsx
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LoginForm from '../../components/molecules/loginform/LogInForm';
import LogInHeader from '../../components/organisms/header/LogInHeader';

interface LoginProps {
  onLoginSuccess: () => void;
}

const LoginScreen: React.FC<LoginProps> = ({onLoginSuccess}) => {
  const handleLogin = (username: string, password: string) => {
    if (username === 'test' && password === '1') {
      onLoginSuccess();
    } else {
      console.log('Incorrect credentials. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <LogInHeader onPress></LogInHeader>
      <LoginForm onLogin={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Pacifico-Regular',
  },
});

export default LoginScreen;
