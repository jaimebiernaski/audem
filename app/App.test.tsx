/**
 *  App.test.tsx
 */

import React from 'react';
import { render } from 'react-native-testing-library';
import App from './App';

/**
 * JEST.MOCK to fix the issue:
 *  console.warn
 *  node_modules/react-native/Libraries/Animated/src/NativeAnimatedHelper.js:270
 *  Animated: `useNativeDriver` is not supported because the native animated
 *  module is missing. Falling back to JS-based animation.
 *  To resolve this, add `RCTAnimation` module to this app, or remove `useNativeDriver`.
 *  More info: https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
 */
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('Navigation', () => {
  test('renders the correct first screen', () => {
    const { getByTestId } = render(<App />);
    const startScreen = getByTestId('login-screen').props.children;
    expect(startScreen).toBeTruthy();
  });
});
