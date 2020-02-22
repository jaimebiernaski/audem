import React from 'react';
import { render } from 'react-native-testing-library';
import App from './App';

describe('render', () => {
  test('hello world message', () => {
    const { getByText } = render(<App />);
    const text = getByText(`Hello World!`);
    expect(text).toBeTruthy();
  });
});
