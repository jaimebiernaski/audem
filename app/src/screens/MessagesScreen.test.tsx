import React from 'react';
import { render } from 'react-native-testing-library';
import { MessagesScreen } from './MessagesScreen';

describe('Messages Screen', () => {
  const { queryByText } = render(<MessagesScreen />);
  test('render Messages Screen', () => {
    expect(queryByText('Messages Screen')).toBeTruthy();
  });
});
