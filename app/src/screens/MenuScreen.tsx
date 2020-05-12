import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { styles } from '../styles';

export const MenuScreen: React.FC = (): JSX.Element => {
  return (
    <SafeAreaView style={[styles.container, styles.center]}>
      <Text>Menu Screen</Text>
    </SafeAreaView>
  );
};
