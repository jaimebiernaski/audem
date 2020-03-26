/**
 *  App.tsx
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './src/screens/LoginScreen';
import { OnboardingScreen } from './src/screens/OnboardingScreen';
import './src/i18n'; // i18n (needs to be bundled ;))

/**
 *  Object type with mappings for route name to the params of the route
 */
export type RootStackParamList = {
  Login: undefined;
  Onboarding: undefined;
};

/**
 * Make navigator use the param list by
 * Passing the RootStackParamList as Generic to the createStackNavigator
 */
const Stack = createStackNavigator<RootStackParamList>();

/**
 *  The Functional Component App is of type "React.FC"
 *  and returns an element type JSX.Element.
 */

const App: React.FC = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Onboarding' component={OnboardingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
