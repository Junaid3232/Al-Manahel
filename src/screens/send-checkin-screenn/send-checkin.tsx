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
  _Dropdown,
  _Header,
} from 'components';
import {Color} from 'const';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'navigation';
import {StyleSheet, Platform, Image, TouchableOpacity} from 'react-native';

import {useApi} from 'hooks';

export const SendCheckin: FC = ({route}) => {
  const api = useApi();
  const navigation = useNavigation<NavigationProps>();

  const {image} = route?.params;

  return (
    <_Screen
      statusBarColor={Color.Primary}
      header={<_Header goBack name="Send Checkin" />}
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
              Take again
            </_Text>
          </TouchableOpacity>
          <_View style={{width: '100%'}}>
            <_Button title="Send" />
          </_View>
        </_View>
      </_View>
    </_Screen>
  );
};

const styles = StyleSheet.create({});
