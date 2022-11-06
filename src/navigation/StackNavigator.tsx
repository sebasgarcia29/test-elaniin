import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../pages/login/LoginScreen';
import { HomeScreen } from '../pages/home/HomeScreen';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { PokemonScreen } from '../pages/pokemon/PokemonScreen';

export type RootStackParams = {
  LoginScreen: undefined;
  HomeScreen: undefined;
  PokemonScreen: {
    simplePokemon: SimplePokemon;
    color: string;
  };
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );
};
