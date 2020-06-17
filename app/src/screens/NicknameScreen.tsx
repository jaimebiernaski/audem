import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { styles, buttons } from '../styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { useTranslation } from 'react-i18next';

type NicknameScreenProps = StackNavigationProp<RootStackParamList, 'Nickname'>;

interface NicknameProps {
  navigation: NicknameScreenProps;
}

export const NicknameScreen: React.FC<NicknameProps> = ({
  navigation,
}: NicknameProps): JSX.Element => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={[styles.container, styles.center]}>
      <Text>Nickname Screen</Text>
      <Button
        testID='finish-button'
        title={t('finish')}
        buttonStyle={buttons.regular}
        containerStyle={{ width: 200 }}
        onPress={() => navigation.navigate('Main')}
      />
    </SafeAreaView>
  );
};
