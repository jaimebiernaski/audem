import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import { MenuScreen } from './MenuScreen';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('Menu Screen', () => {
  const { queryByText, getByTestId } = render(<MenuScreen />);
  test('render Menu Screen', () => {
    expect(queryByText('Menu Screen')).toBeTruthy();
  });
  test('render Logout Button', () => {
    expect(queryByText('logout')).toBeTruthy();
  });
  test('On logout button pressed, go to login', () => {
    fireEvent.press(getByTestId('logout-button'));
    expect(mockedNavigate).toHaveBeenCalledWith('Login');
  });
});
