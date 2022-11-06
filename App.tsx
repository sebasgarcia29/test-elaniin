import 'react-native-gesture-handler';
import * as React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { StackNavigator } from './src/navigation/StackNavigator';

GoogleSignin.configure({
  webClientId:
    Platform.OS === 'ios'
      ? '533875748376-io79gcigj8ujacst9a2jilel439ce0pg.apps.googleusercontent.com'
      : '533875748376-9b2gh33npj90vktb18rjuhckbft0qjln.apps.googleusercontent.com',
});

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
