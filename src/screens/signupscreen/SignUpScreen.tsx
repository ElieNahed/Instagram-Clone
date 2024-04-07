// SignUpScreen.tsx
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SignUpForm from '../../components/molecules/signupfrom/SignUpForm';

interface SignUpProps {
  onSignUpSuccess: () => void;
}

const SignUpScreen: React.FC<SignUpProps> = ({onSignUpSuccess}) => {
  const handleSignUp = (username: string, password: string) => {
    // Implement your sign up logic here
    // For simplicity, let's assume sign up is successful always
    onSignUpSuccess();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instagram-clone Sign Up</Text>
      <SignUpForm onSignUp={handleSignUp} />
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

export default SignUpScreen;
