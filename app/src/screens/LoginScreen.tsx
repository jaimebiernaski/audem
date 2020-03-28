/**
 *  LoginScreen.tsx
 */

import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import { useTranslation } from 'react-i18next';

import { RootStackParamList } from '../../App';
import { LanguageSelector } from '../components/LanguageSelector';
import { Logo } from '../components/Logo';
import { buttons, styles, typo, Colors } from '../styles';

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
    <SafeAreaView testID='login-screen' style={styles.container}>
      <View style={[styles.container, localStyle.container]}>
        <Logo />
        <Text
          testID='login-message'
          style={[localStyle.message, typo.titleThree]}
        >
          {t('messageReadOnce')}
        </Text>

        <Button
          testID='login-button'
          title={t('login')}
          style={buttons.regular}
          buttonStyle={{ backgroundColor: Colors.Blue }}
          /**
           * Using the navigation prop to navigate between screens
           */
          onPress={() => {
            navigation.navigate('Onboarding');
          }}
        />
      </View>
      <LanguageSelector />
    </SafeAreaView>
  );
};

const localStyle = StyleSheet.create({
  container: {
    justifyContent: 'space-around'
  },
  message: {
    width: 250,
    textAlign: 'center',
    alignSelf: 'center'
  }
});
