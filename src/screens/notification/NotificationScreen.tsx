import React from 'react';
import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store/store';
import {clearNotifications} from '../../store/notificationSlice';
import ClearIcon from '../../assets/notification/clear.svg';

const NotificationScreen = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(
    (state: RootState) => state.notification.notifications,
  );

  const renderItem = ({item}: {item: string}) => (
    <View style={styles.notificationBox}>
      <Text>{item}</Text>
    </View>
  );

  const handleClearNotifications = () => {
    dispatch(clearNotifications());
  };

  return (
    <View style={{flex: 1}}>
      {notifications.length > 0 ? (
        <>
          <Pressable
            style={styles.clearIconContainer}
            onPress={handleClearNotifications}>
            <ClearIcon width={30} height={30} fill="#000000" />
          </Pressable>
          <FlatList
            data={notifications}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.notificationList}
          />
        </>
      ) : (
        <View style={styles.emptyNotificationContainer}>
          <Text style={styles.emptyNotificationText}>
            No notifications to display
          </Text>
        </View>
      )}
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
  clearIconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  emptyNotificationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyNotificationText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NotificationScreen;
