import React from 'react';
import { render } from 'react-native-testing-library';
import { MenuScreen } from './MenuScreen';

describe('Menu Screen', () => {
  const { queryByText } = render(<MenuScreen />);
  test('render Menu Screen', () => {
    expect(queryByText('Menu Screen')).toBeTruthy();
  });
});
