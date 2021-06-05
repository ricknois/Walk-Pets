/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { Container, List } from './styles';
import Pet from '../../components/Pet';
import AdBanner from '../../components/AdBanner';
import { getData, storeData } from '../../helper';

export default function Pets({ navigation }) {
  const [data, setData] = useState([]);

  const handleInitialStorage = async () => {
    const aux = await getData('walks');
    if (!aux) {
      await storeData('walks', []);
    }
    setData(aux);
  };

  useEffect(() => {
    navigation.addListener('focus', () => handleInitialStorage());
  }, [navigation]);

  return (
    <Container>
      <List
        numColumns={1}
        data={data}
        renderItem={({ item }) => (
          <Pet
            pet={item}
            setData={setData}
          />
        )}
        keyExtractor={(item) => item.name}
      />
      <AdBanner />
    </Container>

  );
}
