/**
 * OnboardingScreen.tsx
 */

import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { buttons } from '../styles';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { useTranslation } from 'react-i18next';

type OnboardingScreenNavProps = StackNavigationProp<
  RootStackParamList,
  'Onboarding'
>;

interface OnboardingProps {
  navigation: OnboardingScreenNavProps;
}

export const OnboardingScreen: React.FC<OnboardingProps> = ({
  navigation,
}: OnboardingProps): JSX.Element => {
  const { t, i18n } = useTranslation();
  return (
    <SafeAreaView>
      <Text testID='title'>{t('welcome')}</Text>
      <Button
        testID='next-button'
        title={t('next')}
        buttonStyle={buttons.regular}
        /**
         * Using the navigation prop to navigate between screens
         */
        onPress={() => {
          navigation.navigate('Nickname');
        }}
      />
    </SafeAreaView>
  );
};
