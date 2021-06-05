import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import Pets from './Pages/Pets';
import AddPet from './Pages/AddPet';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pets"
          component={Pets}
          options={({ route, navigation }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Add Pet')}>
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
        <Stack.Screen name="Add Pet" component={AddPet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
