import React, {FC, useEffect, useRef, useState} from 'react';

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
import {StyleSheet, Platform, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {t} from 'i18next';

export const CameraScreen: FC = ({route}) => {
  const navigation = useNavigation<NavigationProps>();
  let cameraRef = useRef();
  const DESIRED_RATIO = '16:9';
  const {type, locationId} = route?.params;

  const takePicture = async () => {
    const options = {quality: 0.5, base64: true};
    const data = await cameraRef.takePictureAsync(options);
    navigation.navigate('send-checkin-screen', {
      image: data,
      type: type,
      locationId: locationId,
    });
  };

  return (
    <_Screen
      statusBarColor={Color.black}
      header={
        <_View style={styles.mainView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <_Icon
              family="AntDesign"
              name="close"
              color={Color.White}
              size={20}
            />
          </TouchableOpacity>
          <_Text style={{color: Color.White, fontSize: 20}}>
            {t('common:takePicture')}
          </_Text>
          <_View></_View>
        </_View>
      }
      background={<Background color={Color.black} />}>
      <_View flex={1} style={{backgroundColor: Color.White}}>
        <RNCamera
          style={{flex: 1, alignItems: 'center', backgroundColor: 'red'}}
          type={RNCamera?.Constants?.Type?.back}
          ref={ref => {
            cameraRef = ref;
          }}
          // onCameraReady={prepareRatio}
          ratio={DESIRED_RATIO}
          captureAudio={false}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
      </_View>
      <TouchableOpacity onPress={takePicture} style={styles.captureButton}>
        <_View style={styles.innerView}></_View>
      </TouchableOpacity>
    </_Screen>
  );
};

const styles = StyleSheet.create({
  captureButton: {
    width: 75,
    height: 75,
    // backgroundColor: Color.White,
    borderColor: Color.White,
    borderWidth: 2,
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    borderRadius: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerView: {
    width: 60,
    height: 60,
    backgroundColor: Color.White,
    borderRadius: 30,
  },
  mainView: {
    width: '100%',
    height: Platform.OS == 'android' ? 70 : 90,
    backgroundColor: Color.black,
    alignItems: Platform.OS == 'android' ? 'center' : 'flex-end',
    padding: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
