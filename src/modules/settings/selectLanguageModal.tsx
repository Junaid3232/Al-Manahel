import React, {FC, useState} from 'react';
import {_Checkbox, _Icon, _Image, _Text, _View} from 'components';
import {Modal, TouchableOpacity, Text} from 'react-native';
import {Color} from 'const';
import {styles} from './style';
import {useTranslation} from 'react-i18next';
import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';
import {t} from 'i18next';

interface selectLanguageModalProps {
  isVisible?: boolean;
  setIsVisible?: (x: boolean) => void;
  selectedLanguage?: (x: string) => void;
}
export const SelectLanguageModal: FC<selectLanguageModalProps> = ({
  isVisible,
  setIsVisible,
  selectedLanguage,
}) => {
  const {i18n} = useTranslation();
  const lang = i18n?.language;

  const setLanguage = async (code: any) => {
    // setIsVisible?.(false);
    if (code == 'en') {
      if (I18nManager.isRTL) {
        await I18nManager.forceRTL(false);
      }
    } else {
      if (!I18nManager.isRTL) {
        await I18nManager.forceRTL(true);
      }
    }
    RNRestart.Restart();

    return i18n.changeLanguage(code);
  };

  return (
    <Modal transparent={true} visible={isVisible} animationType="slide">
      <_View style={styles.container}>
        <_View style={styles.innerContainer}>
          <_View style={styles.headerStyle}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsVisible?.(false)}>
              <_Icon name="close" family="AntDesign" color={Color.Gray} />
            </TouchableOpacity>
            <_Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                marginBottom: -10,
              }}>
              {t('common:language')}
            </_Text>
          </_View>
          <_View style={styles.languageCard}>
            <_View style={styles.flagContainer}>
              <_Image
                source={require('assets/images/Saudi_Arabia_Flag.jpg')}
                width="100%"
                height="100%"
                radius={40}
              />
            </_View>
            <_View style={styles.textContainer}>
              <_Text style={styles.textStyle}>{'اللغة العربية'}</_Text>
            </_View>
            <_View style={styles.checkBox}>
              <_Checkbox
                checked={lang == 'ar' ? true : false}
                onToggle={() => setLanguage('ar')}
              />
            </_View>
          </_View>

          <_View style={styles.languageCard}>
            <_View style={styles.flagContainer}>
              <_Image
                source={require('assets/images/England_Flag.png')}
                width="100%"
                height="100%"
                radius={40}
              />
            </_View>
            <_View style={styles.textContainer}>
              <Text style={[styles.textStyle, {fontFamily: 'Lato-Regular'}]}>
                {'English'}
              </Text>
            </_View>
            <_View style={styles.checkBox}>
              <_Checkbox
                checked={lang == 'en' ? true : false}
                onToggle={() => setLanguage('en')}
              />
            </_View>
          </_View>
        </_View>
      </_View>
    </Modal>
  );
};
