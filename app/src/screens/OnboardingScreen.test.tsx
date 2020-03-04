import React from 'react';
import { render } from 'react-native-testing-library';
import { OnboardingScreen } from './OnboardingScreen';

describe('Onboarding Screen Tests', () => {
  test('render welcome message', () => {
    const { queryByText } = render(<OnboardingScreen />);
    expect(queryByText('Welcome')).toBeTruthy();
  });
});
