import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/mainNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableLatestRenderer} from 'react-native-maps';
import BootSplash from 'react-native-bootsplash';

enableLatestRenderer();

const App = () => {
  useEffect(() => {
    BootSplash.hide();
  }, []);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
