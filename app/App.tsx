/**
 *  App.tsx
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { LoginScreen } from './src/screens/LoginScreen';
import { OnboardingScreen } from './src/screens/OnboardingScreen';
import { MenuScreen } from './src/screens/MenuScreen';
import { NicknameScreen } from './src/screens/NicknameScreen';
import { MessagesScreen } from './src/screens/MessagesScreen';
import { RequestsScreen } from './src/screens/RequestsScreen';

import './src/i18n'; // i18n (needs to be bundled ;))

/*** TYPE CHECKING THE NAVIGATORS ***/

/**
 *  Object type with mappings for route name to the params of the route
 */
export type RootStackParamList = {
  Login: undefined;
  Onboarding: undefined;
  Main: undefined;
  Nickname: undefined;
  Messages: undefined;
  Requests: undefined;
};

export type RootTabParamsList = {
  Messages: undefined;
  Requests: undefined;
};

export type RootDrawerParamList = {
  Menu: undefined;
  Home: undefined;
};

/**
 * Make navigator use the param list by
 * Passing the RootStackParamList as Generic to the createStackNavigator
 */
const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamsList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();
/**
 *  The Functional Component App is of type "React.FC"
 *  and returns an element type JSX.Element.
 */

function MessagesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Messages' component={MessagesScreen} />
    </Stack.Navigator>
  );
}

function RequestStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Requests' component={RequestsScreen} />
    </Stack.Navigator>
  );
}

function TabNav() {
  return (
    <Tab.Navigator initialRouteName='Messages'>
      <Tab.Screen name='Messages' component={MessagesStack} />
      <Tab.Screen name='Requests' component={RequestStack} />
    </Tab.Navigator>
  );
}

function DrawerNav() {
  return (
    <Drawer.Navigator
      initialRouteName='Home'
      drawerContent={() => <MenuScreen />}
    >
      <Drawer.Screen name='Home' component={TabNav} />
    </Drawer.Navigator>
  );
}

function StackApp() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Onboarding'
        component={OnboardingScreen}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Nickname'
        component={NicknameScreen}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Main'
        component={DrawerNav}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const App: React.FC = (): JSX.Element => {
  return (
    <NavigationContainer>
      <StackApp />
    </NavigationContainer>
  );
};

export default App;
