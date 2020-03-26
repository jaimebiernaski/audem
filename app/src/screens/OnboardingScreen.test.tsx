/**
 * OnboardingScreen.test.tsx
 */

import React from 'react';
import { render } from 'react-native-testing-library';
import { OnboardingScreen } from './OnboardingScreen';

let t = jest.fn();

describe('Onboarding Screen Tests', () => {
  test('render welcome message', () => {
    const { queryByTestId } = render(<OnboardingScreen />);
    expect(queryByTestId('title').props.children).toBe('welcome');
  });
});
