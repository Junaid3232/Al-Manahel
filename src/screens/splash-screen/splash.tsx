import React, {FC, useEffect, useState} from 'react';

import {
  _View,
  _Screen,
  Background,
  _Image,
  _Text,
  _Button,
  _Icon,
  NoLicenseModal,
} from 'components';
import {Color} from 'const';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'navigation';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {useApi} from 'hooks';
import {urlConstants} from 'utils';
export const Splash: FC = () => {
  const navigation = useNavigation<NavigationProps>();
  const isLoggedIn = useSelector(state => state?.currentUser?.loggedIn);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const api = useApi();
  const user = useSelector(state => state?.currentUser);
  console.log('user----redux', user);
  useEffect(() => {
    const URL = `${urlConstants.CHECK_LICENSE}/${user.user.id}/has-mobile-license`;
    if (isLoggedIn) {
      api.getResource(URL).then(res => {
        if (res?.data === true && user.loggedIn) {
          setTimeout(() => {
            navigation.navigate('home-screen');
          }, 2000);
        } else if (res?.data === false) {
          setIsVisible(true);
        }
      });
    } else {
      setTimeout(() => {
        navigation.navigate('terms-screen');
      }, 2000);
    }
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
      <NoLicenseModal isVisible={isVisible} setVisible={setIsVisible} />
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
