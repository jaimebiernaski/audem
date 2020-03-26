import { getItem, setItem } from './localStorage';
import { AsyncStorage } from 'react-native';

jest.mock('react-native', () => ({
  AsyncStorage: { setItem: jest.fn(), getItem: jest.fn() }
}));

describe('localStorage', () => {
  test('setItem', async () => {
    await setItem('myKey', 'myValue');
    expect(AsyncStorage.setItem).toBeCalledWith('myKey', 'myValue');
  });

  test('getItem', async () => {
    await getItem('myKey');
    expect(AsyncStorage.getItem).toBeCalledWith('myKey');
  });
});
