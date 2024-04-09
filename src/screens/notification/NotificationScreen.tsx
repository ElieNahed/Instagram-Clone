import React, {useState, useEffect} from 'react';
import {View, FlatList, Text, Image, Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import notifee, {EventType} from '@notifee/react-native';
import Clear from '../../assets/notification/clear.svg';
import BackArrow from '../../assets/notification/backarrow.svg';

interface UserData {
  createdAt: number;
  name: string;
  avatar: string;
  image: string;
  caption: string;
  id: string;
}

interface Notification {
  id: string;
  message: string;
  user: UserData;
}

const NotificationScreen = () => {
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [userData, setUserData] = useState<UserData[]>([]);

  useEffect(() => {
    fetchUserData();
    const interval = setInterval(() => {
      onDisplayNotification();
    }, 60000);

    const backgroundEventHandler = async ({type}: {type: EventType}) => {
      if (type === EventType.PRESS) {
        console.log('Notification pressed in background');
        if (navigation && navigation.navigate) {
          navigation.navigate('NotificationScreen' as never);
        }
      }
    };

    notifee.onBackgroundEvent(backgroundEventHandler);

    return () => {
      clearInterval(interval);
    };
  }, []);

  async function fetchUserData() {
    try {
      // Your API call here to fetch user data
      // const response = await axios.get('<API_ENDPOINT>');
      // const data: UserData[] = response.data;
      // setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  async function onDisplayNotification() {
    try {
      await notifee.requestPermission();
      const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
        vibration: true,
        vibrationPattern: [500, 1000],
      });

      if (userData && userData.length > 0) {
        const randomIndex = Math.floor(Math.random() * userData.length);
        const user = userData[randomIndex];
        const message = `${user.name} just posted a photo`;
        await notifee.displayNotification({
          title: 'New Notification',
          body: message,
          android: {
            channelId,
            vibrationPattern: [500, 1000],
            pressAction: {
              id: 'default',
            },
          },
        });

        setNotifications(prevNotifications => [
          ...prevNotifications,
          {id: Math.random().toString(), message, user},
        ]);
      }
    } catch (error) {
      console.error('Error displaying notification:', error);
    }
  }

  const handleClear = () => {
    setNotifications([]);
  };

  const renderItem = ({item}: {item: Notification}) => {
    return (
      <View style={styles.renderItemStyle}>
        <Image source={{uri: item.user.avatar}} style={styles.avatar} />
        <Text style={styles.message}>{item.message}</Text>
        <Image source={{uri: item.user.image}} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Text>
            <BackArrow width={30} height={30} />
          </Text>
        </Pressable>
        <Text style={styles.title}>Notification</Text>
        <Pressable onPress={handleClear} style={styles.clearButton}>
          <Clear width={30} height={30} />
        </Pressable>
      </View>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  clearButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  renderItemStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  message: {
    flex: 1,
    fontSize: 16,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginLeft: 'auto',
  },
});

export default NotificationScreen;
