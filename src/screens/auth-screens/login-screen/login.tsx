import React, {FC, useEffect, useState} from 'react';
import {
  _Screen,
  _View,
  _Text,
  _Input,
  _Image,
  _Button,
  SupportText,
  ErrorModal,
} from 'components';
import {Background} from 'components';
import {Color} from 'const';

import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'navigation';
import {useApi} from 'hooks';
import {AxiosResponse} from 'axios';
import {urlConstants} from 'utils';
import {useTranslation} from 'react-i18next';
import {t} from 'i18next';
import {Fonts} from 'const/theme';

export const Login: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [employeeNo, setEmployeeNo] = useState<number>();
  const [phoneNo, setPhoneNo] = useState<number>();

  const navigation = useNavigation<NavigationProps>();
  const {i18n} = useTranslation();

  const language = i18n.language;
  const api = useApi();
  const login = async () => {
    const languageCode = language == 'en' ? 1 : 0;
    const URL = `${urlConstants.LOGIN}?code=${employeeNo}&mobile=${phoneNo}&language=${languageCode}`;
    setIsLoading(true);
    api.postResource(URL, {}).then((res: AxiosResponse | undefined) => {
      if (res) {
        setIsLoading(false);
        navigation.navigate('code-verify-screen', {employeeNo, phoneNo});
      } else {
        setShowError(true);
        setIsLoading(false);
      }
    });
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
      background={<Background color={Color.Negative} />}
      hideTopSafeArea>
      <_View flex={1} paddings={{padding: 20}}>
        <_Text
          style={{fontSize: 20, fontFamily: Fonts.bold, alignSelf: 'center'}}>
          {t('common:signIn')}
        </_Text>
        <_View paddings={{paddingVertical: 40}}>
          <_Input
            text={t('common:employeeNo').toString()}
            style={{height: 40, width: '100%'}}
            placeholder={t('common:enterEmployeeNo').toString()}
            iconFamily="Feather"
            iconName="hash"
            iconcolor={Color.Gray}
            keyboardType={'number-pad'}
            onChangeText={text => setEmployeeNo(parseInt(text))}
            // iconSize={18}
          />
          <_View margins={{marginTop: 10}}>
            <_Input
              text={t('common:phoneNo')}
              style={{height: 40, width: '100%'}}
              placeholder={t('common:enterPhoneNo').toString()}
              iconFamily="MaterialCommunityIcons"
              iconName="phone"
              iconcolor={Color.Gray}
              iconSize={18}
              keyboardType={'number-pad'}
              onChangeText={text => setPhoneNo(parseInt(text))}
            />
          </_View>
        </_View>
        <_Button
          loading={isLoading}
          title={t('common:signIn')}
          onPress={login}
        />
        <_View style={{position: 'absolute', bottom: 30, alignSelf: 'center'}}>
          <SupportText />
        </_View>
      </_View>
      <ErrorModal
        setVisible={setShowError}
        isVisible={showError}
        description={t('common:wrongCredentials')}
      />
    </_Screen>
  );
};
