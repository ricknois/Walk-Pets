import React, { useState, useEffect } from 'react'
import { Text, View, Button, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker';


import { Container, InputIcon, InputName } from './styles';

export default function index() {
  const [name, setName] = useState('oii');
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setIcon(result.uri);
    }
  }


  return (
    <Container>
      <InputName placeholder="Name" onChangeText={(text) => setName(text)}/>
      <InputIcon placeholder="Icon" onChangeText={(text) => setIcon(text)}/>
      <Button onPress={ pickImage } title="Pick an image from camera roll"/>
      {icon && <Image source={{ uri: icon }} style={{ width: 200, height: 200 }} />}
    </Container>
  )
}
