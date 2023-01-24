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
  _Dropdown,
  _Header,
  LoadingModal,
} from 'components';
import {Color} from 'const';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'navigation';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {CommonActions} from '@react-navigation/native';

import {useApi} from 'hooks';
import {t} from 'i18next';
import {enumConstants, urlConstants} from 'utils';
import {useSelector} from 'react-redux';

export const SendCheckin: FC = ({route}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const api = useApi();
  const navigation = useNavigation<NavigationProps>();
  const currentUser = useSelector(state => state.currentUser.user);

  const {image, type, locationId} = route?.params;
  const sendCheckinOut = async () => {
    setLoading(true);
    api
      .postResource(urlConstants.SEND_CHECK_IN_OUT, {
        employeeId: currentUser.id,
        inOutMode: type, //CkeckIn = 0,  Checkout = 1
        photoFile: {
          content: image,
        },
        locaTionId: locationId,
      })
      .then(res => {
        if (res?.status == 200) {
          setLoading(false);
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'home-screen'}],
            }),
          );
        } else {
          setLoading(false);
        }
      });
  };

  return (
    <_Screen
      statusBarColor={Color.Primary}
      header={
        <_Header
          goBack
          name={
            type == enumConstants.checkIn
              ? t('common:sendCheckin')
              : t('common:sendCheckout')
          }
        />
      }
      background={<Background color={Color.White} />}>
      <_View flex={1}>
        <_View
          style={{
            flex: 8.5,
            backgroundColor: Color.Primary,
            margin: 20,
            borderRadius: 20,
          }}>
          <Image
            resizeMode="stretch"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 20,
            }}
            source={{
              uri: `data:image/jpeg;base64,${image.base64}`,
            }}
          />
        </_View>
        <_View
          style={{
            marginTop: -20,
            flex: 1.5,
            padding: 20,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <_Icon
              family="Feather"
              name="camera"
              size={15}
              color={Color.black}
            />
            <_Text style={{marginLeft: 10, color: Color.black}}>
              {t('common:takeAgain')}
            </_Text>
          </TouchableOpacity>
          <_View style={{width: '100%'}}>
            <_Button title={t('common:send')} onPress={sendCheckinOut} />
          </_View>
        </_View>
      </_View>
      <LoadingModal
        modalVisible={loading}
        task={type == 0 ? 'Checking in...' : 'Checking out...'}
      />
    </_Screen>
  );
};

const styles = StyleSheet.create({});
