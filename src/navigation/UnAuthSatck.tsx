import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/loginscreen/LogInScreen';

const UnAuthStackNavigator = createNativeStackNavigator();

const UnAuthSatck = () => {
  return (
    <UnAuthStackNavigator.Navigator>
      <UnAuthStackNavigator.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </UnAuthStackNavigator.Navigator>
  );
};

export default UnAuthSatck;
