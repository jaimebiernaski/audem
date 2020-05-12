import React from 'react';
import { render } from 'react-native-testing-library';
import { RequestsScreen } from './RequestsScreen';

describe('Requests Screen', () => {
  const { queryByText } = render(<RequestsScreen />);
  test('render Requests Screen', () => {
    expect(queryByText('Requests Screen')).toBeTruthy();
  });
});
