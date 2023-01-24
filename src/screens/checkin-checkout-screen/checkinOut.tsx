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
  ErrorModal,
} from 'components';
import {Color} from 'const';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'navigation';
import {StyleSheet, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import * as geolib from 'geolib';

import {useApi} from 'hooks';
import MapView, {
  Callout,
  Circle,
  Marker,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import {enumConstants, urlConstants} from 'utils';
import {useSelector} from 'react-redux';
import {AxiosResponse} from 'axios';
import {t} from 'i18next';

export const CheckInOut: FC = () => {
  const {user} = useSelector(state => state.currentUser);
  const [apiLocations, setApiLocations] = useState<any>();
  const [currentLocation, setCurrentLocation] = useState<any>();
  const [showError, setShowError] = useState<boolean>(false);
  const [errorDescripton, setErrorDescription] = useState<string>('');
  const [distanceBetween, setDistanceBetween] = useState<number>();
  const [initialRegion, setInitialRegion] = useState({
    latitude: currentLocation?.latitude || 33.6601,
    longitude: currentLocation?.longitude || 73.0553,
    latitudeDelta: 0.0422,
    longitudeDelta: 0.0121,
  });
  const [tagetCoords, setTargetCoords] = useState<any>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0422,
    longitudeDelta: 0.0121,
  });

  const api = useApi();
  const navigation = useNavigation<NavigationProps>();
  const [selectedItem, setSelectedItem] = useState<[]>();
  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setCurrentLocation(info.coords);
      setInitialRegion({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0121,
      });
    });
    getLoction();
  }, []);
  const getLoction = async () => {
    const URL = `${urlConstants.USER_LOCATION}?employeeId=${user?.id}`;
    api.getResource(URL).then((res: AxiosResponse | undefined) => {
      if (res) {
        console.log('----RESPONSE', res.data);
        setApiLocations(res?.data);
      }
    });
  };

  console.log('----target', tagetCoords);

  const calculateDistance = () => {
    if (selectedItem) {
      const distance = geolib.getDistance(
        {
          latitude: currentLocation?.latitude,
          longitude: currentLocation?.longitude,
        },
        {latitude: selectedItem?.y, longitude: selectedItem?.x},
      );
      setDistanceBetween(distance);
    }
  };
  useEffect(() => {
    if (selectedItem) {
      setTargetCoords({
        latitude: selectedItem?.y,
        longitude: selectedItem?.x,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0121,
      });
    }
    calculateDistance();
  }, [selectedItem]);

  function CustomMarker() {
    return (
      <_Icon
        family="Ionicons"
        name="location"
        color={Color.Primary}
        size={30}
      />
    );
  }

  useEffect(() => {
    if (selectedItem) {
      if (selectedItem.permittedDistance < 30) {
        setShowError(true);
        setErrorDescription(
          'You need to be at the location to send checkin or checkout',
        );
        setSelectedItem();
      } else {
        setShowError(false);
      }
    }
  }, [selectedItem]);

  const onPressCheckin = type => {
    if (selectedItem && distanceBetween! <= selectedItem?.permittedDistance) {
      navigation.navigate('camera-screen', {
        type: type,
        locationId: selectedItem?.id,
      });
    } else {
      setShowError(true);
      setErrorDescription('You must select your location to proceed');
    }
  };
  console.log('initialRegion', PROVIDER_GOOGLE);
  return (
    <_Screen
      statusBarColor={Color.Primary}
      header={<_Header goBack name={t('common:mapScreen')} />}
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
          <_Dropdown
            title={t('common:selectLocation')}
            storeData={apiLocations}
            setSelectedItem={setSelectedItem}
            selectedItem={selectedItem}
          />
        </_View>

        <MapView
          style={{flex: 1}}
          initialRegion={initialRegion}
          // provider={PROVIDER_GOOGLE}
          showsMyLocationButton={true}
          followsUserLocation={true}
          showsUserLocation={true}>
          {selectedItem && (
            <Marker coordinate={tagetCoords} draggable={false}>
              <CustomMarker />
              <Callout style={{width: 200}}>
                <_Text style={{width: 200}}>You're target is here</_Text>
              </Callout>
            </Marker>
          )}
        </MapView>

        <_View
          style={{
            width: '100%',
            height: 100,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <_View style={{width: '42%', marginTop: 15}}>
            <_Button
              title={t('common:checkin')}
              onPress={() => onPressCheckin(enumConstants.checkIn)}
            />
          </_View>
          <_View style={{width: '42%', marginTop: 15}}>
            <_Button
              type="secondary"
              title={t('common:checkout')}
              onPress={() => onPressCheckin(enumConstants.checkOut)}
            />
          </_View>
        </_View>
      </_View>
      <ErrorModal
        setVisible={setShowError}
        isVisible={showError}
        description={'Wrong Location'}
        details={errorDescripton}
      />
    </_Screen>
  );
};

const styles = StyleSheet.create({});
