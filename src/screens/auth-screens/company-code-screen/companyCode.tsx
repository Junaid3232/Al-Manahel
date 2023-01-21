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

export const CompanyCode: FC = () => {
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
        <_Text style={{fontSize: 20, fontWeight: 'bold'}}>Company Code</_Text>
        <_Text style={{color: Color.Gray, textAlign: 'center', marginTop: 10}}>
          Lorem ipsum dolor sit amet, etiam eu turpis est a, mattis tellus sed
          dignissim, metus nec fringilla accumsan.
        </_Text>
        <_View width={'100%'} style={{marginTop: 20}}>
          <_Input
            text={'Company Code'}
            style={{height: 40, width: '100%'}}
            placeholder="Enter Company Code "
            iconFamily="MaterialCommunityIcons"
            iconName="link-lock"
            iconcolor={Color.Gray}
            iconSize={18}
          />
        </_View>
        <_View width={'100%'} style={{marginTop: 30}}>
          <_Button
            title="Continue"
            onPress={() => navigation.navigate('login-screen')}
          />
        </_View>
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
});
