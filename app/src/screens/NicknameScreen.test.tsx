import React from 'react';
import { render } from 'react-native-testing-library';
import { NicknameScreen } from './NicknameScreen';

describe('Nickname Screen', () => {
  const { queryByText } = render(<NicknameScreen />);
  test('render Nickname Screen', () => {
    expect(queryByText('Nickname Screen')).toBeTruthy();
  });
});
