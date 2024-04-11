import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';

const NotificationScreen = () => {
  const notifications = useSelector(
    (state: RootState) => state.notification.notifications,
  );

  const renderItem = ({item}: {item: string}) => (
    <View style={styles.notificationBox}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.notificationList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  notificationBox: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  notificationList: {
    paddingHorizontal: 10,
  },
});

export default NotificationScreen;
