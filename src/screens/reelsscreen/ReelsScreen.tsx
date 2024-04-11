import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import WorkInProgress from '../../components/atoms/WorkInProgress';

const ReelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reels Screen</Text>
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
  title: {
    fontSize: 30,
    color: 'blue',
  },
});

export default ReelScreen;
