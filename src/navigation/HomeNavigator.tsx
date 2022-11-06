import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../pages/home/HomeScreen';

export type HomeStackParams = {
  HomeScreen: undefined;
};

const Stack = createStackNavigator<HomeStackParams>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
