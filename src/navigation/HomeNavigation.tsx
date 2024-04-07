import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import MessageScreen from '../screens/message/MessageScreen';
import Home from '../screens/home/HomeScreen';
import {RootStackParamList} from './RootStackParamList';
import NotificationScreen from '../screens/notification/NotificationScreen';

const Tab = createStackNavigator<RootStackParamList>();

const HomeNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen name="MessageScreen" component={MessageScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
    </Tab.Navigator>
  );
};

export default HomeNav;
