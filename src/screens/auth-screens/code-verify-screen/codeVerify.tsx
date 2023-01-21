import React, {FC, useEffect} from 'react';

import {
  _View,
  _Screen,
  Background,
  _Image,
  _Text,
  _Button,
  _Icon,
  _Input,
  SupportText,
} from 'components';
import {Color} from 'const';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'navigation';
import {StyleSheet} from 'react-native';
import OtpInputs from 'react-native-otp-inputs';

export const CodeVerfiy: FC = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <_Screen
      header={
        <_Image
          height={100}
          width={170}
          resizeMode="contain"
          style={{alignSelf: 'center'}}
          source={require('assets/icons/appLogo.png')}
        />
      }
      background={<Background color={Color.White} />}
      hideTopSafeArea>
      <_View paddings={{padding: 20}} flex={1} align="center">
        <_Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Verify it's you
        </_Text>
        <_Text style={{color: Color.Gray, textAlign: 'center', marginTop: 10}}>
          We’ve sent a six digit verification code to
        </_Text>
        <_Text style={styles.numberText}>+1******234</_Text>
        <_Text style={styles.timeText}>1:59</_Text>
        <_View width={'100%'} style={{marginTop: 20}}>
          <OtpInputs
            handleChange={code => console.log(code)}
            numberOfInputs={6}
            keyboardType={'numbers-and-punctuation'}
            style={styles.container}
            inputContainerStyles={styles.inputContainer}
            inputStyles={styles.inputStyles}
            focusStyles={styles.focusStyle}
          />
        </_View>
        <_View width={'100%'} style={{marginTop: 30, paddingBottom: 10}}>
          <_Button
            title="Sign in"
            onPress={() => navigation.navigate('home-screen')}
          />
        </_View>
        <_Text>
          Didn’t a recieve code?
          <_Text style={{color: '#0D6EFD', textDecorationLine: 'underline'}}>
            {` Send again`}
          </_Text>
        </_Text>
        <_View style={{position: 'absolute', bottom: 30}}>
          <SupportText />
        </_View>
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
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '99%',
    height: 60,
    alignSelf: 'center',
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyles: {
    width: 40,
    height: 60,
    borderBottomColor: Color.Primary,
    borderBottomWidth: 2,
    fontSize: 24,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  focusStyle: {
    borderBottomColor: Color.Primary,
    borderBottomWidth: 4,
    borderRadius: 2,
  },
  timeText: {
    color: Color.Gray,
    textAlign: 'center',
    marginTop: 10,
    fontSize: 12,
  },
  numberText: {color: Color.black, textAlign: 'center', marginTop: 10},
});
