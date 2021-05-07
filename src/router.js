import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pets from './Pages/Pets';
import Pet from './Pages/Pet';
import AddPet from './Pages/AddPet';
import { Ionicons } from '@expo/vector-icons'; 

const Stack = createStackNavigator()


export default function Router () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pets"
          component={ Pets }
          options={({ route, navigation }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={ () => navigation.navigate('AddPet') }>
                <Ionicons
                  name="add"
                  style={{ marginRight: 8 }}
                  size={35}
                  color="black"
                />
              </TouchableOpacity>
            ),
          })}
          />
        <Stack.Screen name="Pet" component={ Pet }/>
        <Stack.Screen name="AddPet" component={ AddPet }/>
      </Stack.Navigator>
    </NavigationContainer>
  );

};
