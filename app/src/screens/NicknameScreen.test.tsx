import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import { NicknameScreen } from './NicknameScreen';

let mockProps: any = { navigation: { navigate: jest.fn() } };

describe('Nickname Screen', () => {
  const { queryByText, getByTestId } = render(
    <NicknameScreen {...mockProps} />
  );
  test('render Nickname Screen', () => {
    expect(queryByText('Nickname Screen')).toBeTruthy();
  });
  test('render Button Finish', () => {
    expect(queryByText('finish')).toBeTruthy();
  });
  test('on Finish press, navigate to messages', () => {
    fireEvent.press(getByTestId('finish-button'));
    expect(mockProps.navigation.navigate).toHaveBeenCalledWith('Main');
  });
});
