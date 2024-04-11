// ReelScreen.js
import React from 'react';
import {View, StyleSheet} from 'react-native';
import WorkInProgress from '../../components/atoms/WorkInProgress'; // Import the WorkInProgress component

const ReelScreen = () => {
  return (
    <View style={styles.container}>
      <WorkInProgress />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ReelScreen;
