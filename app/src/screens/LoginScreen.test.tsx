/**
 *  LoginScreen.test.tsx
 */

import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import { LoginScreen } from './LoginScreen';

/**
 * Mock function to test navigation.navigate calls.
 *
 *  In TypeScript the mock will cause an error since
 *  it does not completely match the expected type.
 *
 *  In situations like these where you have a mock that
 *  you know does not match the expected type you can use
 *  "any" to allow the mock to pass through compile-time checks.
 *
 *  ref: https://stackoverflow.com/questions/52569447/how-to-mock-react-navigations-navigation-prop-for-unit-tests-with-typescript-in
 */
let mockProps: any = { navigation: { navigate: jest.fn() } };

describe('Login Screen', () => {
  const { queryByTestId, queryByText, getByTestId } = render(
    <LoginScreen {...mockProps} />
  );

  test('render login screen component', () => {
    expect(queryByTestId('login-screen')).toBeTruthy();
  });

  test('render title', () => {
    expect(queryByText('Login Screen')).toBeTruthy();
  });

  test('render login button', () => {
    expect(queryByTestId('login-button')).toBeTruthy();
  });

  test('on login button press, navigate to onboarding', () => {
    fireEvent.press(getByTestId('login-button'));
    expect(mockProps.navigation.navigate).toHaveBeenCalledWith('Onboarding');
  });
});
