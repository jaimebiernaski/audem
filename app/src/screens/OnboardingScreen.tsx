/**
 * OnboardingScreen.tsx
 */

import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

export const OnboardingScreen: React.FC = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  return (
    <View>
      <Text testID='title'>{t('welcome')}</Text>
    </View>
  );
};
