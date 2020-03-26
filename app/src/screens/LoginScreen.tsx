/**
 *  LoginScreen.tsx
 */

import React from 'react';
import { View, Text, Button } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { useTranslation } from 'react-i18next';

import { LanguageSelector } from '../components/LanguageSelector';
import { button, typo } from '../styles';

/**
 * Type checking the navigator: object type with mappings for route
 * name to the params of the route.
 *
 * @type LoginScreenNavigationProp
 * @see https://reactnavigation.org/docs/typescript/
 */

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

/**
 * Component props
 */
interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

/**
 *  The component Functional Component LoginScreen is of type "React.FC"
 *  which takes 1 generic (Type defined by parameter)
 *  in this case the generic is the props "LoginProps".
 *
 *  @param navigation of type LoginProps
 *  @returns an element type JSX.Element.
 *  */

export const LoginScreen: React.FC<LoginProps> = ({
  navigation
}: LoginProps): JSX.Element => {
  const { t, i18n } = useTranslation();

  return (
    <View testID='login-screen'>
      <Text testID='title'>Login Screen</Text>
      <Button
        testID='login-button'
        title={t('login')}
        /**
         * Using the navigation prop to navigate between screens
         */
        onPress={() => {
          navigation.navigate('Onboarding');
        }}
      />
      <LanguageSelector />
    </View>
  );
};
