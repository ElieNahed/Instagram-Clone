import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Platform} from 'react-native';
import React from 'react';
import MessageScreen from '../screens/message/MessageScreen';
import Home from '../screens/home/HomeScreen';
import {RootStackParamList} from './RootStackParamList';
import NotificationScreen from '../screens/notification/NotificationScreen';

const Tab = createStackNavigator<RootStackParamList>();

const HomeNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        cardStyleInterpolator: ({current, next, layouts}) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
                {
                  translateX: next
                    ? next.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -layouts.screen.width],
                      })
                    : 1,
                },
              ],
            },
          };
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen name="MessageScreen" component={MessageScreen} />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigation;
