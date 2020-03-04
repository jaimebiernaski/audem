/**
 *  LoginScreen.tsx
 */

import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

/**
 * The type for the navigation prop takes 2 generics, the param list
 * and the name of the current route.
 *
 * ref: https://reactnavigation.org/docs/typescript/
 */
type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

/**
 *  The component Functional Component LoginScreen is of type "React.FC"
 *  which takes 1 generic (Type defined by parameter)
 *  in this case the generic is the props "LoginProps".
 *
 *  The navigation props is of type LoginProps
 *
 *  The component returns an element type JSX.Element.
 *  */

export const LoginScreen: React.FC<LoginProps> = ({
  navigation
}: LoginProps): JSX.Element => {
  return (
    <View testID='login-screen'>
      <Text testID='title'>Login Screen</Text>
      <Button
        testID='login-button'
        title='Login'
        /**
         * Using the navigation prop to navigate between screens
         */
        onPress={() => {
          navigation.navigate('Onboarding');
        }}
      />
    </View>
  );
};
