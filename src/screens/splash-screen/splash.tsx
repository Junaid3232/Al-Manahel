import React, {FC, useEffect} from 'react';

import {
  _View,
  _Screen,
  Background,
  _Image,
  _Text,
  _Button,
  _Icon,
} from 'components';
import {Color} from 'const';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'navigation';
import {StyleSheet} from 'react-native';
export const Splash: FC = () => {
  const navigation = useNavigation<NavigationProps>();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('terms-screen');
    }, 2000);
  }, []);
  return (
    <_Screen background={<Background color={Color.White} />} hideTopSafeArea>
      <_View flex={1} align="center" justify="center">
        <_Image
          height={130}
          width={'100%'}
          resizeMode="contain"
          style={{alignSelf: 'center'}}
          margins={{marginVertical: 80}}
          source={require('assets/icons/appLogo.png')}
        />
      </_View>
      <_Image
        height={80}
        width={'70%'}
        resizeMode="contain"
        style={{alignSelf: 'center'}}
        margins={{marginVertical: 80}}
        source={require('assets/icons/appLogo2.png')}
      />
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
