/**
 * LanguageSelector.test.tsx
 */

import React from 'react';

import { render, fireEvent } from 'react-native-testing-library';
import { LanguageSelector } from './LanguageSelector';
import { languages } from '../i18n';
import { setLang, currentLang } from '../utils/languageUtils';

jest.mock('../utils/languageUtils', () => ({
  setLang: jest.fn(),
  currentLang: jest.fn(() => 'pt_BRX')
}));

describe('Language Selector', () => {
  const { queryByTestId, getByTestId } = render(<LanguageSelector />);

  test('render selector', () => {
    expect(queryByTestId('lang-selector')).toBeTruthy();
  });
  test.each(languages)('lang option %o', (key, expected) => {
    const element = queryByTestId(key);
    expect(element.props.children).toBe(expected);
  });
  test.each(languages)('selector style %o', (key, expected) => {
    const element = queryByTestId(key);
    key === 'BRX' //currentLang()
      ? expect(element.props.style.fontWeight).toBe('bold')
      : expect(element.props.style.fontWeight).toBe('normal');
  });

  test('change language', () => {
    const lang: string = 'pt_BR';
    const button = getByTestId(`change-lang-to-${lang}`);
    fireEvent.press(button);
    expect(setLang).toHaveBeenCalledWith(lang);
  });
});
