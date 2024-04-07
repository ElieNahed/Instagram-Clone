import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import MesgIcon from '../../../assets/homepage/msgpage-icon.svg';
import NotificationIcon from '../../../assets/homepage/notification.svg';

const HomeHeader = ({navigation}: any) => {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.title}>Instagram-Clone</Text>
      <View style={styles.viewButtonsContainer}>
        <Pressable
          onPress={() => {
            navigation.navigate('Notification');
          }}>
          <NotificationIcon width={35} height={35} />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate('MessageScreen');
          }}>
          <MesgIcon width={30} height={30} />
        </Pressable>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Pacifico-Regular',
    marginLeft: 10,
    flex: 0.6,
  },
  viewButtonsContainer: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
