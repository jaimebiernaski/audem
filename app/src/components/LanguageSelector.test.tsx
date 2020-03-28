/**
 * LanguageSelector.test.tsx
 */

import React from 'react';

import { render, fireEvent } from 'react-native-testing-library';
import { LanguageSelector } from './LanguageSelector';
import { languages } from '../i18n';
import { setLang, currentLang } from '../utils/languageUtils';
import { FontWeight } from '../styles';

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
    key === currentLang()
      ? expect(element.props.style[1].fontWeight).toBe(FontWeight.Bold)
      : expect(element.props.style[1].fontWeight).toBe(FontWeight.Regular);
  });

  test('change language', () => {
    const lang: string = 'pt_BR';
    const button = getByTestId(`change-lang-to-${lang}`);
    fireEvent.press(button);
    expect(setLang).toHaveBeenCalledWith(lang);
  });
});
