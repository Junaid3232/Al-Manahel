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
import {StyleSheet, Platform} from 'react-native';

import {useApi} from 'hooks';
import MapView from 'react-native-maps';

export const CheckInOut: FC = () => {
  const api = useApi();
  const navigation = useNavigation<NavigationProps>();
  const data = [{name: 'San Francisco'}, {name: 'Islamabad'}];
  return (
    <_Screen
      statusBarColor={Color.Primary}
      header={<_Header goBack name="Checkin & Checkout" />}
      background={<Background color={Color.White} />}>
      <_View flex={1}>
        <_View
          style={{
            zIndex: 10,
            position: 'absolute',
            left: 20,
            right: 20,
            top: 20,
          }}>
          <_Dropdown title="Select location" storeData={data} />
        </_View>

        <MapView
          mapType={Platform.OS == 'android' ? 'none' : 'standard'}
          style={{flex: 1}}
          provider={'google'}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />

        <_View
          style={{
            width: '100%',
            height: 100,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <_View style={{width: '42%', marginTop: 15}}>
            <_Button title="Checkin" />
          </_View>
          <_View style={{width: '42%', marginTop: 15}}>
            <_Button
              type="secondary"
              title="Checkout"
              onPress={() => navigation.navigate('camera-screen')}
            />
          </_View>
        </_View>
      </_View>
    </_Screen>
  );
};

const styles = StyleSheet.create({});
