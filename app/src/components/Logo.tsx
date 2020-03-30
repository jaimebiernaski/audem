/**
 * Logo.tsx
 */

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { typo } from '../styles';

export const Logo = (): JSX.Element => {
  return (
    <View>
      <Image
        testID='image'
        style={customStyles.logo}
        source={require('../../assets/icon.png')}
      />
      <Text testID='title' style={[customStyles.title, typo.largeTitle]}>
        AUDEM
      </Text>
      <Text
        testID='login-subtitle'
        style={[customStyles.title, typo.captionOne]}
      >
        Auto Destructive Messenger
      </Text>
    </View>
  );
};

const customStyles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center'
  },
  title: { alignSelf: 'center' },
  message: {
    width: 250,
    textAlign: 'center',
    alignSelf: 'center'
  }
});
