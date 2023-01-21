import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'navigation/models';
import {getUniqueId} from 'react-native-device-info';

import {
  StyleSheet,
  Platform,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {_Text, _View, _Image, _Icon} from 'components';
import React, {FC, useState} from 'react';
import {CommonActions} from '@react-navigation/native';

import {Color} from 'const';

import {useApi} from 'hooks';

import {useTranslation} from 'react-i18next';
import {Fonts} from 'const/theme';
import {CompanyCard} from 'modules';
import {shadow} from 'global-styles';

export const DrawerContent: FC = () => {
  const navigation = useNavigation<NavigationProps>();
  const height = Dimensions.get('screen').height;

  const {t, i18n} = useTranslation();
  const api = useApi();

  const language = i18n.language;

  return (
    <DrawerContentScrollView contentContainerStyle={styles.container}>
      <_View>
        <TouchableOpacity
          onPress={() => navigation.navigate('profile-screen')}
          style={styles.drawerContainer}>
          <_View style={styles.userCont}>
            <_View style={styles.userInfoContainer}>
              <_Image
                width={40}
                height={40}
                radius={20}
                source={require('assets/images/profile.jpeg')}
              />
            </_View>
          </_View>
          <_View>
            <_Text style={styles.nameText}>{`Jessica Miller`}</_Text>
            <_Text
              color={Color.White}
              margins={{marginLeft: 15}}
              style={{fontSize: 12, color: Color.Gray}}>
              {'@jess_mi'}
            </_Text>
          </_View>
        </TouchableOpacity>
        <_View style={styles.contentContainer}>
          <_View style={styles.iconStyles}>
            <_View style={styles.userImage}>
              <_Image
                height={'100%'}
                width={'100%'}
                resizeMode="contain"
                style={{alignSelf: 'center'}}
                source={require('assets/images/profile.jpeg')}
              />
            </_View>
            <_View>
              <_Text style={[styles.itemText, {marginLeft: 10}]}>
                A Comapny
              </_Text>
            </_View>
          </_View>
          <DrawerItem
            pressColor={Color.Secondary}
            style={[styles.drawerItem, {marginTop: 10}]}
            label={t('common:settings').toString()}
            labelStyle={[
              styles.itemText,
              {
                fontFamily: Fonts.medium,
              },
            ]}
            onPress={() => navigation.navigate('setting')}
          />
          <DrawerItem
            pressColor={Color.Secondary}
            style={styles.drawerItem}
            label={t('common:privacyPolicy')}
            labelStyle={[
              styles.itemText,
              {
                fontFamily: language == 'ur' ? FontsUrdu.regular : Fonts.medium,
              },
            ]}
            onPress={() =>
              navigation.navigate('inventory-screen', {isFromDrawer: true})
            }
          />
          <DrawerItem
            pressColor={Color.Secondary}
            style={styles.drawerItem}
            label={t('common:about')}
            labelStyle={[
              styles.itemText,
              {
                fontFamily: language == 'ur' ? FontsUrdu.regular : Fonts.medium,
              },
            ]}
            onPress={() =>
              navigation.navigate('inventory-screen', {isFromDrawer: true})
            }
          />
        </_View>
      </_View>
      <TouchableOpacity
        // onPress={onLogout}
        style={[
          styles.logoutContainer,
          Platform.OS === 'ios' ? {top: height - 80} : {bottom: 10},
        ]}>
        <_Text style={styles.itemText}>Logout</_Text>
        <_View style={styles.icon}>
          <_Icon
            family="MaterialIcons"
            size={20}
            name="logout"
            color={Color.black}
          />
        </_View>
      </TouchableOpacity>
      {/* <LoadingModal modalVisible={isLoading} task={'Logging out...'} /> */}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  drawerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    // backgroundColor: Color.Primary,
    paddingBottom: 10,
    marginTop: Platform.OS == 'android' ? 20 : 0,
    borderBottomWidth: 0.6,
    borderBottomColor: Color.GrayLite,
    marginHorizontal: 20,
  },
  userInfoContainer: {
    backgroundColor: Color.White,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 27.5,
  },
  userCont: {
    backgroundColor: Color.Primary,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  contentContainer: {
    backgroundColor: Color.White + 80,

    margin: 10,
    borderRadius: 15,
    marginBottom: 50,
  },
  drawerItem: {
    borderBottomWidth: 1,
    borderColor: Color.White,
    marginTop: -5,
  },
  setupItem: {
    borderColor: Color.White,
    marginTop: -5,
    borderBottomWidth: 1,
  },
  itemText: {
    color: Color.Tertiary,
    fontSize: 16,
    // marginLeft: -20,
    fontWeight: '400',
    textAlign: 'left',
  },
  icon: {
    backgroundColor: Color.White,
    padding: 3,
    borderRadius: 15,
    alignSelf: 'center',
    position: 'absolute',
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutContainer: {
    width: '94%',

    padding: 10,
    borderRadius: 12,
    flexDirection: 'row',
    alignSelf: 'center',
    paddingLeft: 18,
    position: 'absolute',
    zIndex: 10,
  },
  logoutText: {paddingLeft: 30, fontSize: 13, color: Color.White},
  nameText: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: '700',
  },
  commissionIcon: {
    width: 22,
    height: 22,
    backgroundColor: Color.White,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    height: 70,
    borderBottomColor: Color.black + 20,
    borderBottomWidth: 0.5,
  },
  appText: {
    marginTop: 50,
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: '700',
  },
  iconStyles: {
    flexDirection: 'row',
    alignItems: 'center',

    borderBottomColor: Color.black + 20,
    borderBottomWidth: 0.6,
    paddingBottom: 15,
    paddingTop: 5,
    marginHorizontal: 10,
  },
  userImage: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: 'red',

    ...shadow,
    overflow: 'hidden',
  },
  userName: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '700',
  },
});
