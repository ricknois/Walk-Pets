/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { Container, List } from './styles';
import Pet from '../../components/Pet';
import { getData, storeData } from '../../helper';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function Pets () {
  const [token, setToken] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    handleInitialStorage();
    registerForPushNotificationsAsync().then(token => {
      setToken(token);
    });
    enableNotification();
  }, [])

  const handleInitialStorage = async () => {
    const aux = await getData('walks');
    if (!aux) {
      await storeData('walks', []);
    }
    setData(aux);
  };

  return (
    <Container>
      <List
        numColumns={1}
        data={data}
        renderItem={({ item }) => (
          <Pet
            pet={item}
        />
        )}
        keyExtractor={item => item.name}
      />
    </Container>
  );
}

function enableNotification() {
  Notifications.cancelAllScheduledNotificationsAsync();
  for(let hour = 9; hour < 10; hour++){
    scheduleNotification("Did you take your pet for a walk today ?", hour, 0);
  }
}

function scheduleNotification(title, hour, minute) {
  Notifications.scheduleNotificationAsync({
    content: {
      title,
    },
    trigger: {
      hour,
      minute,
      repeats: true,
    }
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [250, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}