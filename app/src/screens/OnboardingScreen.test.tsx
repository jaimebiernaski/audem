/**
 * OnboardingScreen.test.tsx
 */

import React from 'react';
import { render, debug } from 'react-native-testing-library';
import { OnboardingScreen } from './OnboardingScreen';

// let t = jest.fn();

let mockProps: any = { navigation: { navigate: jest.fn() } };

describe('Onboarding Screen Tests', () => {
  const component = <OnboardingScreen {...mockProps} />;
  const { queryByTestId, queryByText, debug } = render(component);
  debug('DEBUG >>>');

  test('render welcome message', () => {
    expect(queryByTestId('title').props.children).toBe('welcome');
    //expect(queryByText('welcome')).toBeTruthy();
  });

  test('render next button', () => {
    expect(queryByTestId('next-button').props.title).toBe('next');
    //expect(queryByText('next')).toBeTruthy();
  });
});
