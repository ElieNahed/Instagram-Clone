import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/mainNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableLatestRenderer} from 'react-native-maps';
import BootSplash from 'react-native-bootsplash';
import LoginScreen from './src/screens/loginscreen/LogInScreen';
import HomeScreen from './src/screens/homescreen/HomeScreen';

enableLatestRenderer();

const App = () => {
  // State to track authentication status
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    BootSplash.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* Conditionally render screens based on authentication status */}
        {authenticated ? (
          <MainNavigator />
        ) : (
          <LoginScreen onLoginSuccess={() => setAuthenticated(true)} />
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
