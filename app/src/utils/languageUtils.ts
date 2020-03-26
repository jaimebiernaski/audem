/**
 * languageUtils.ts
 */

import { getItem, setItem } from './localStorage';
import i18n from 'i18next';
import { keys } from './localKeys';

/**
 * Set app lang according to parameter
 * @param lang
 */
export const setLang = async (lang: string): Promise<void> => {
  i18n.changeLanguage(lang);
  await setItem(keys.lang, lang);
};

/**
 * Get sored lang in local storage
 */
export const getLang = async (): Promise<string> => {
  const storedLang: string = await getItem(keys.lang);
  return storedLang;
};

/**
 * Get active language in i18next
 */
export const currentLang = (): string => {
  return i18n.language;
};
