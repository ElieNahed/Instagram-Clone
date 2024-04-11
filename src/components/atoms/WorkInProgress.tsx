import React, {useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

const WorkInProgress = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [scaleAnim]);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, {transform: [{scale: scaleAnim}]}]}>
        Work in Progress
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    width: '80%',
    aspectRatio: 1,
    borderRadius: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'blue',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
  },
});

export default WorkInProgress;
