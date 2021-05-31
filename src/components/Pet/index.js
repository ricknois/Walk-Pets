/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Pressable } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  Container, Name, Logo, Good, Bad, Regular,
} from './styles';

const handleMood = (last) => {
  const date = new Date();
  const diff = Math.abs(date - last);
  if (parseFloat(diff) > 6) return <Bad><Entypo name="emoji-sad" size={28} color="black" /></Bad>;
  if (parseFloat(diff) > 2) return <Regular><Entypo name="emoji-neutral" size={28} color="black" /></Regular>;
  return <Good><Entypo name="emoji-happy" size={28} color="black" /></Good>;
};

export default function Pet(props) {
  const navigation = useNavigation();
  const { pet } = props;

  return (
    <Pressable onPress={() => navigation.navigate('Pet', { pet })}>
      <Container>
        <Logo source={{ uri: pet.image }} />
        <Name>
          Pet:
          {' '}
          {pet.name}
          Last walk:
          {' '}
          {pet.lastWalk}
        </Name>
        {handleMood(pet.lastWalk)}
      </Container>
    </Pressable>
  );
}
