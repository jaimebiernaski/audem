/**
 * localStorage.ts
 */

import { AsyncStorage } from 'react-native';

/**
 * Get value from local Storage according to the key parameter
 * @param key
 */
export const getItem = async (key: string): Promise<string> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (err) {
    console.error(err);
  }
};

/**
 * Set key/value pair into async storage
 * @param key
 * @param value
 */
export const setItem = async (key: string, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (err) {
    console.error(err);
  }
};
