import React from 'react';
import { Logo } from './Logo';
import { render } from 'react-native-testing-library';

describe('Logo Component', () => {
  const { getByTestId } = render(<Logo />);
  test('render image', () => {
    const img = getByTestId('image');
    expect(img).toBeTruthy();
  });

  test('render title', () => {
    expect(getByTestId('title').props.children).toBeTruthy();
  });
  test('render subtitle', () => {
    expect(getByTestId('login-subtitle').props.children).toBeTruthy();
  });
});
