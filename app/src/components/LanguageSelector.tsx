/**
 * LanguageSelector.tsx
 */

import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import { languages } from '../i18n';
import { setLang, currentLang } from '../utils/languageUtils';
import { FontWeight, Padding, typo } from '../styles';

export const LanguageSelector: React.FC = (): JSX.Element => {
  return (
    <View testID='lang-selector' style={styles.container}>
      {languages.map(lang => {
        return (
          <TouchableOpacity
            testID={`change-lang-to-${lang[0]}`}
            key={lang[0]}
            onPress={() => setLang(lang[0])}
          >
            <Text
              testID={lang[0]}
              style={[
                typo.body,
                {
                  fontWeight:
                    lang[0] === currentLang()
                      ? FontWeight.Bold
                      : FontWeight.Regular
                }
              ]}
            >
              {lang[1]}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: Padding.Medium
  }
});
