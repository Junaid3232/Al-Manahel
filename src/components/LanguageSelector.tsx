import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {_Icon, _View, _Text} from 'components';

import {useTranslation} from 'react-i18next';
import {Color} from 'const';
import {Fonts, FontsUrdu} from 'const/theme';

const LANGUAGES = [
  {code: 'en', label: 'English'},
  {code: 'ar', label: 'اردو'},
];

export const LanguageSelector = () => {
  const {t, i18n} = useTranslation();
  const lang = i18n?.language;
  0;
  const setLanguage = (code: any) => {
    return i18n.changeLanguage(code);
  };

  return (
    <_View style={styles.container}>
      {LANGUAGES.map(language => {
        const selectedLanguage = language.code === lang;

        return (
          <Pressable
            key={language.code}
            // style={styles.buttonContainer}
            disabled={selectedLanguage}
            onPress={() => setLanguage(language.code)}>
            <_Text
              multiLanguage
              style={[
                selectedLanguage
                  ? [
                      styles.selectedText,
                      {
                        fontFamily: Fonts.medium,
                        // lang == 'ur' ? FontsUrdu.medium : Fonts.medium,
                      },
                    ]
                  : [
                      styles.text,
                      {
                        fontFamily: Fonts.medium,
                        // lang == 'en' ? FontsUrdu.medium : Fonts.medium,
                      },
                    ],
              ]}>
              {language.label}
            </_Text>
          </Pressable>
        );
      })}
    </_View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginTop: 20,
  },
  row: {},
  title: {
    color: '#444',
    fontWeight: '600',
  },
  text: {
    color: '#000',
    paddingVertical: 4,

    lineHeight: 25,
  },
  selectedText: {
    fontWeight: '600',
    color: Color.Primary,
    paddingVertical: 4,
    lineHeight: 25,
  },
});
