import React, {useEffect} from 'react';
import {Provider} from 'react-redux'; // Import Provider from react-redux
import BootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigator from './src/navigation/mainNavigator';
import UnAuthSatck from './src/navigation/UnAuthSatck';
import useAuthStore from './src/store/authStore';
import {store} from './src/store/store'; // Import your Redux store

interface AuthData {
  authToken: string | null;
}

const linking = {
  prefixes: ['Instagram-Clone://'],
  config: {
    initialRouteName: 'Home' as const,
    screens: {
      Home: 'home',
      Search: 'search',
      AddPost: 'add post',
      Reels: 'reels',
      Profile: 'profile',
    },
  },
};

const App = () => {
  const {authToken}: AuthData = useAuthStore() as AuthData;

  useEffect(() => {
    setTimeout(() => {
      BootSplash.hide();
    });
  }, []);

  return (
    <SafeAreaProvider>
      {/* Wrap the NavigationContainer with Provider */}
      <Provider store={store}>
        <NavigationContainer linking={linking}>
          {/* Use conditional rendering based on the presence of authToken */}
          {authToken !== null ? <MainNavigator /> : <UnAuthSatck />}
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
