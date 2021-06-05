import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { getData, storeData } from '../../helper';
import { useNavigation } from '@react-navigation/native';

export default function App(props) {
  const { setModalVisible, pet, setData } = props;
  const navigation = useNavigation();

  const handleWalk = async () => {
    const storage = await getData('walks');
    storage.forEach((item) => {
      if (item.name === pet.name) {
          console.log(item.lastWalk);
          item.lastWalk = new Date();
          console.log(item.lastWalk);
       }   
    });
    await storeData('walks', storage);
    setData(storage);
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>{pet.name}</Text>
        <TouchableHighlight
          style={styles.openButton }
          onPress={() => {
            handleWalk(pet);
            setModalVisible(false);
          }}>
          <Text style={styles.textStyle}>Walk !</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});