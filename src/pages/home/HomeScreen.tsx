import React from 'react';
// import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
// import { HomeStackParams } from '../../navigation/HomeNavigator';

// interface Props extends StackScreenProps<HomeStackParams, 'HomeScreen'> {}

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>{'Home Page'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
