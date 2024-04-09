import React, {useEffect} from 'react';
import BootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigator from './src/navigation/mainNavigator';
import UnAuthSatck from './src/navigation/UnAuthSatck';
import useAuthStore from './src/store/authStore';

const linking = {
  prefixes: ['Instagram-Clone://'],
  config: {
    initialRouteName: 'Home' as const,
    screens: {
      Home: 'home',
      Search: 'search',
      AddPost: 'add post',
      Reels: 'Reels',
      Profile: 'profile',
    },
  },
};

const App = () => {
  const {authToken} = useAuthStore();
  useEffect(() => {
    setTimeout(() => {
      BootSplash.hide();
    });
  }, []);
  return (
    <SafeAreaProvider>
      <NavigationContainer linking={linking}>
        {authToken !== null ? <MainNavigator /> : <UnAuthSatck />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
