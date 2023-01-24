import React, {FC, useEffect, useState} from 'react';

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
  ErrorModal,
} from 'components';
import {Color} from 'const';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'navigation';
import {StyleSheet} from 'react-native';
import {useApi} from 'hooks';
import {urlConstants} from 'utils';
import {useDispatch} from 'react-redux';
import {companyUrl} from 'app-redux';
import axios, {AxiosResponse} from 'axios';
import {t} from 'i18next';

export const CompanyCode: FC = () => {
  const navigation = useNavigation<NavigationProps>();
  const [companyCode, setCompanyCode] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  let dispatch = useDispatch();
  const api = useApi();
  const getCompanyUrl = async () => {
    let URL = `${urlConstants.GET_COMAPNY_URL}?code=${companyCode}`;
    setIsLoading(true);

    axios
      .get(URL)
      .then((response: AxiosResponse | undefined) => {
        if (response) {
          setIsLoading(false);
          dispatch(companyUrl(response?.data));
          navigation.navigate('login-screen');
        }
      })
      .catch(e => {
        setShowError(true);
        setIsLoading(false);
      });

    // api.getResource(URL).then((res: AxiosResponse | undefined) => {
    //   if (res) {
    //     dispatch(companyUrl(res?.data));
    //     navigation.navigate('login-screen');
    //   } else {
    //     setShowError(true);
    //     setIsLoading(false);
    //   }
    // });
  };

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
        <_Text style={{fontSize: 20, lineHeight: 25}}>
          {t('common:companyCode')}
        </_Text>
        <_Text style={{color: Color.Gray, textAlign: 'center', marginTop: 10}}>
          {t('common:loremPisum')}
        </_Text>
        <_View width={'100%'} style={{marginTop: 20}}>
          <_Input
            text={t('common:companyCode').toString()}
            keyboardType={'number-pad'}
            style={{height: 40, width: '100%'}}
            placeholder={t('common:enterCompanyCode').toString()}
            iconFamily="MaterialCommunityIcons"
            iconName="link-lock"
            iconcolor={Color.Gray}
            iconSize={18}
            onChangeText={text => setCompanyCode(text)}
          />
        </_View>
        <_View width={'100%'} style={{marginTop: 30}}>
          <_Button
            title={t('common:continue')}
            loading={isLoading}
            onPress={getCompanyUrl}
            // onPress={() => navigation.navigate('login-screen')}
          />
        </_View>
        <_View style={{position: 'absolute', bottom: 30}}>
          <SupportText />
        </_View>
      </_View>
      <ErrorModal
        setVisible={setShowError}
        isVisible={showError}
        description={t('common:invalidCompanyCode')}
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
