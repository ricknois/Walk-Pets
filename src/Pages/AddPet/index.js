/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import {
  Image, Alert, Platform,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { storeData, getData, formateDate } from '../../helper';

import {
  Container, InputName, Buttons, TouchableText,
} from './styles';

export default function index({ navigation }) {
  const [name, setName] = useState(null);
  const [icon, setIcon] = useState(null);
  const [time, setTime] = useState(null);
  const [showTime, setShowTime] = useState(false);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Hey !!', 'Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setIcon(result.uri);
    }
  };

  const handleTime = (event, selectedDate) => {
    setShowTime(false);
    if (selectedDate) setTime(formateDate(selectedDate));
  };

  const handleSave = async () => {
    if (name && icon && time) {
      const aux = await getData('walks');
      const obj = {
        name,
        lastWalk: new Date(),
        walkTime: time,
        image: icon,
      };
      await storeData('walks', [...aux, obj]);
      return navigation.navigate('Pets');
    }
    return Alert.alert('Hey !!', 'Fill in all fields');
  };

  return (
    <Container>
      {icon && <Image source={{ uri: icon }} style={{ width: 150, height: 150 }} />}
      <InputName placeholder="Name" onChangeText={(text) => setName(text)} />
      <Buttons onPress={pickImage}>
        <TouchableText>Pick an image from camera roll</TouchableText>
      </Buttons>
      <Buttons color="#841584" onPress={() => setShowTime(true)}>
        <TouchableText>Pick an time to be notificated</TouchableText>
      </Buttons>
      {
        showTime
          ? (
            <DateTimePicker
              value={new Date()}
              mode="time"
              is24Hour
              display="default"
              onChange={handleTime}
            />
          )
          : null
      }
      <Buttons onPress={() => handleSave()}>
        <TouchableText>Save</TouchableText>
      </Buttons>
    </Container>

  );
}
