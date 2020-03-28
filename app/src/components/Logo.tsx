import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { buttons, styles, typo, Padding } from '../styles';

export const Logo = (): JSX.Element => {
  return (
    <View>
      <Image
        testID='image'
        style={localStyle.logo}
        source={require('../../assets/icon.png')}
      />
      <Text testID='title' style={[localStyle.title, typo.largeTitle]}>
        AUDEM
      </Text>
      <Text testID='login-subtitle' style={[localStyle.title, typo.captionOne]}>
        Auto Destructive Messenger
      </Text>
    </View>
  );
};

const localStyle = StyleSheet.create({
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
