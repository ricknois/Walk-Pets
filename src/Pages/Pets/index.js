import React, { useState, useEffect } from 'react';
import { Container, List } from './styles';
import Pet from '../../components/Pet';
import { StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import AsyncStorage from '@react-native-async-storage/async-storage';


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function Pets () {
  const [token, setToken] = useState(null)

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => {
      setToken(token);
    });
    enableNotification();
  }, [])

  const DATA = [
    {
      id: 1,
      name: 'Bobiiiiiiiiiiiii',
      mood: 3,
      walks: [
        {
          day: '05/03/2020',
          times: 1
        }, ]
    },
    { id: 2,
      name: 'Laila',
      mood: 1,
      walks: [
        {
          day: '05/03/2020',
          times: 1
        },] 
    },
    {
      id: 3,
      name: 'Meggie',
      mood: 2,
      walks: [
        {
          day: '05/03/2020',
          times: 1
        }, ]
    },
  ];


  return (
    <Container>
      <List
        numColumns={1}
        contentContainerStyle={styles.list}
        data={DATA}
        renderItem={({ item }) => (
          <Pet
            pet={ item }
        />
        )}
        keyExtractor={ item => item.name }
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  list: {
    
  }
})

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