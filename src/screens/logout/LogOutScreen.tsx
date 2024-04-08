import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {CommonActions, NavigationProp} from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
}

const LogOutScreen: React.FC<Props> = ({navigation}) => {
  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear authentication token or any other necessary cleanups

    // Assuming you have some function to clear authentication token
    clearAuthenticationToken();

    // Resetting the navigation stack to the login screen
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Login'}],
      }),
    );
  };

  // Function to clear authentication token
  const clearAuthenticationToken = () => {
    // Implement the logic to clear authentication token
    // For example:
    // AsyncStorage.removeItem('authToken');
    // Or use any other method provided by your authentication system
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Text style={styles.backButtonText}>{'<<<<'}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Log Out Screen</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default LogOutScreen;
