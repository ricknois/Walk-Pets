import React from 'react';
import { Container, Name, Logo, Good, Bad, Regular  } from './styles';
import { Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const handleMood = (mood) => {
  if (mood === 1) return <Bad><Entypo name="emoji-sad" size={28} color="black" /></Bad>
  if (mood === 2) return <Regular><Entypo name="emoji-neutral" size={28} color="black" /></Regular>
  return <Good><Entypo name="emoji-happy" size={28} color="black" /></Good>
}

export default function Pet (props) {
  const navigation = useNavigation()
  const { pet } = props
  const last = pet.walks.length
  const date = pet.walks[ last - 1 ]

  return (
    <Pressable onPress={() => navigation.navigate('Pet', { pet })}>
      <Container>
          <Logo source={ require('../../../assets/dog.png') }/>
        <Name>
            Pet: { pet.name }
            Last walk: {date.day}
        </Name>
            {handleMood(pet.mood)}
      </Container>
    </Pressable>
  );
}