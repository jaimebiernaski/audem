import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { styles, buttons } from '../styles';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

export const MenuScreen: React.FC = (): JSX.Element => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.container, styles.center]}>
      <Text>Menu Screen</Text>
      <Button
        testID='logout-button'
        title={t('logout')}
        onPress={() => {
          navigation.navigate('Login');
        }}
        containerStyle={buttons.container}
      />
    </SafeAreaView>
  );
};
