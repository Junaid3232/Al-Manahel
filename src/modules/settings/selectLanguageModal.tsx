import React, {FC, useState} from 'react';
import {_Checkbox, _Icon, _Image, _Text, _View} from 'components';
import {Modal,TouchableOpacity} from 'react-native';
import {Color} from 'const';
import { styles } from './style';
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
  const [ArabicChecked, setArabicChecked] = useState<boolean>(false);
  const [englishChecked, setEnglishChecked] = useState<boolean>(true);

  const toggleArabicCheck = () => {
    setEnglishChecked(false)
    setArabicChecked(true);
    selectedLanguage?.('اللغة العربية')
    setIsVisible?.(false)
  };

  const toggleEnglishCheck = () => {
    setEnglishChecked(true)
    setArabicChecked(false);
    selectedLanguage?.('English')
    setIsVisible?.(false)
  };

  return (
    <Modal transparent={true} visible={isVisible} animationType='slide' >
      <_View style={styles.container}>
        <_View style={styles.innerContainer}>
          <_View style={styles.headerStyle}>
            <_Text
              style={{
                textAlign: 'center',
                fontSize: 20,
              }}>
              {'Language'}
            </_Text>

            <TouchableOpacity style={styles.closeButton} onPress={()=>setIsVisible?.(false)} >
              <_Icon name="close" family="AntDesign" color={Color.Gray} />
            </TouchableOpacity>
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
              <_Checkbox checked={ArabicChecked} onToggle={toggleArabicCheck} />
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
              <_Text style={styles.textStyle}>{'English'}</_Text>
            </_View>
            <_View style={styles.checkBox}>
              <_Checkbox checked={englishChecked} onToggle={toggleEnglishCheck} />
            </_View>
          </_View>
        </_View>
      </_View>
    </Modal>
  );
};

