import React from 'react';
import { View, Text } from 'react-native';

export const OnboardingScreen: React.FC = (): JSX.Element => {
  return (
    <View>
      <Text testID='title'>Welcome</Text>
    </View>
  );
};
