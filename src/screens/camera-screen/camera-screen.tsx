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
import {
  StyleSheet,
  Platform,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {RNCamera} from 'react-native-camera';

import {useApi} from 'hooks';
import MapView from 'react-native-maps';
import {Alert} from 'react-native';

export const CameraScreen: FC = () => {
  const navigation = useNavigation<NavigationProps>();
  const [imageRatio, setImageRatio] = useState<any>();

  let cameraRef = useRef();
  const DESIRED_RATIO = '16:9';
  const takePicture = async () => {
    const options = {quality: 0.5, base64: true};
    const data = await cameraRef.takePictureAsync(options);
    navigation.navigate('send-checkin-screen', {image: data});
  };

  // const prepareRatio = async () => {
  //   if (Platform.OS === 'android' && cameraRef) {
  //     const ratios = await cameraRef.getSupportedRatiosAsync();

  //     // See if the current device has your desired ratio, otherwise get the maximum supported one
  //     // Usually the last element of "ratios" is the maximum supported ratio
  //     const ratio =
  //       ratios.find((ratio: any) => ratio === DESIRED_RATIO) ||
  //       ratios[ratios.length - 1];
  //     console.log('-----ration', ratio);
  //     setImageRatio(ratio);
  //   }
  // };

  return (
    <_Screen
      statusBarColor={Color.black}
      header={
        <_View
          style={{
            width: '100%',
            height: 70,
            backgroundColor: Color.black,
            alignItems: 'center',
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <_Icon
              family="AntDesign"
              name="close"
              color={Color.White}
              size={20}
            />
          </TouchableOpacity>

          <_Text style={{color: Color.White, fontSize: 20}}>Take Picture</_Text>
          <_View></_View>
        </_View>
      }
      background={<Background color={Color.black} />}>
      <_View flex={1} style={{backgroundColor: Color.White}}>
        <RNCamera
          style={{flex: 1, alignItems: 'center', backgroundColor: 'red'}}
          type={RNCamera.Constants.Type.back}
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
      <TouchableOpacity
        onPress={takePicture}
        style={{
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
        }}>
        <_View
          style={{
            width: 60,
            height: 60,
            backgroundColor: Color.White,

            borderRadius: 30,
          }}></_View>
      </TouchableOpacity>
    </_Screen>
  );
};

const styles = StyleSheet.create({});
