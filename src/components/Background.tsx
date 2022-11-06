/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';

export const Background = () => {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: '#0e3c79',
        top: -350,
        width: 1000,
        height: 1150,
        transform: [
          {
            rotate: '-70deg',
          },
        ],
      }}
    />
  );
};
