import React, {FC, useEffect, useState} from 'react';

import {
  _View,
  _Screen,
  Background,
  _Image,
  _Text,
  _Button,
  _Icon,
  _Checkbox,
} from 'components';
import {Color} from 'const';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'navigation';
import {StyleSheet} from 'react-native';
import {LanguageSelector} from '../../components/LanguageSelector';
import {useTranslation} from 'react-i18next';
export const Terms: FC = () => {
  const navigation = useNavigation<NavigationProps>();
  const [agree, setAgree] = useState<boolean>(false);
  const {t} = useTranslation();
  return (
    <_Screen background={<Background color={Color.White} />} hideTopSafeArea>
      <_View flex={1} align="center" justify="center">
        <_Image
          height={130}
          width={'100%'}
          resizeMode="contain"
          style={{alignSelf: 'center'}}
          margins={{marginBottom: 20}}
          source={require('assets/icons/appLogo.png')}
        />
        <_Text style={{width: '80%', textAlign: 'center'}}>
          Lorem ipsum dolor sit amet, etiam eu turpis dictum est a, mattis
          tellus. Sed dignissim, metus nec fringilla accumsan.
        </_Text>
        <_Text>{t('common:hello')}</_Text>
      </_View>

      <_View style={{position: 'absolute', bottom: 30, alignSelf: 'center'}}>
        <_View
          style={{
            marginBottom: 40,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <_Checkbox checked={agree} onToggle={setAgree.bind(null, !agree)} />
          <_Text>
            I agree to
            <_Text style={{color: '#0D6EFD', textDecorationLine: 'underline'}}>
              {' '}
              Terms & Conditions{' '}
            </_Text>
            and
            <_Text style={{color: '#0D6EFD', textDecorationLine: 'underline'}}>
              {' '}
              Privacy Policy
            </_Text>
          </_Text>
        </_View>
        {/* <LanguageSelector /> */}
        <_Button
          onPress={() => navigation.navigate('auth')}
          title="Continue"
          style={styles.loginBtn}
        />
      </_View>
    </_Screen>
  );
};

const styles = StyleSheet.create({
  loginBtn: {width: 350, height: 50},
  registerBtn: {
    width: 350,
    height: 50,
    marginBottom: 50,
    backgroundColor: Color.White,
  },
});
