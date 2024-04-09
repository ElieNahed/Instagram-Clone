import {View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyDrawer from '../../navigation/ProfileDrawer';
import styles from './styles';

const UserScreen = () => {
  return (
    <View style={styles.viewContainer}>
      <NavigationContainer independent={true}>
        <MyDrawer />
      </NavigationContainer>
    </View>
  );
};

export default UserScreen;
