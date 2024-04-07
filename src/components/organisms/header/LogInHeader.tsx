import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Button from '../../atoms/Button';

const LogInHeader = ({navigation}: any) => {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.title}>LogIn</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('SignUp');
        }}
        style={[styles.signUpButton, styles.customButtonStyle]}>
        <Button title="Sign Up" textStyle={styles.signUpText} />
      </Pressable>
    </View>
  );
};

export default LogInHeader;

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Pacifico-Regular',
    marginLeft: 10,
  },
  signUpButton: {
    paddingHorizontal: 8, // Adjusted padding
    paddingVertical: 4, // Adjusted padding
    borderRadius: 5,
    marginLeft: 'auto', // Push the button to the right
  },
  signUpText: {
    color: '#fff',
    fontSize: 12, // Adjusted font size
    fontWeight: 'bold',
  },
  customButtonStyle: {
    backgroundColor: '#007bff',
  },
});
