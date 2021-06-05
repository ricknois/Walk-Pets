import React, { useState } from 'react';
import {
  Pressable, Modal,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {
  Container, Name, Logo, Good, Bad, Regular, Walk,
} from './styles';
import Mod from '../Modal';

const handleMood = (last) => {
  const dateNow = new Date();
  const date = new Date(last);
  const diff = Math.abs(dateNow.getTime() - date.getTime());
  const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
  if (parseFloat(diffDays) > 6) return <Bad><Entypo name="emoji-sad" size={28} color="black" /></Bad>;
  if (parseFloat(diffDays) > 1) return <Regular><Entypo name="emoji-neutral" size={28} color="black" /></Regular>;
  return <Good><Entypo name="emoji-happy" size={28} color="black" /></Good>;
};

const handleDate = (date) => {
  const dateObj = new Date(date);
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };
  return <Walk>{`${dateObj.toLocaleDateString(+1, options)}`}</Walk>;
};

export default function Pet(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const { pet, setData } = props;

  return (
    <Pressable onPress={() => setModalVisible(!modalVisible)}>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Mod pet={pet} setModalVisible={setModalVisible} setData={setData} />
      </Modal>
      <Container>
        <Logo source={{ uri: pet.image }} />
        <Name>
          {pet.name}
        </Name>
        <Walk>
          Last walk:
          {' '}
          {handleDate(pet.lastWalk)}
        </Walk>
        {handleMood(pet.lastWalk)}
      </Container>
    </Pressable>
  );
}
