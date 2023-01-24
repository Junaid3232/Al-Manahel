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
  HomeHeader,
} from 'components';
import {Color} from 'const';
import {FlatList, StyleSheet} from 'react-native';
import {CompanyCard, HomeCard} from 'modules';
import {useSelector} from 'react-redux';
import {t} from 'i18next';

export const Home: FC = () => {
  const currentUser = useSelector(state => state.currentUser);

  const cardsData = [
    {
      name: t('common:reports'),
      description: t('common:firstCard'),
      icon: require('../../assets/icons/sheet.png'),
    },
    {
      name: t('common:questionings'),
      description: t('common:secondCard'),
      icon: require('../../assets/icons/question.png'),
    },
    {
      name: t('common:furloughs'),
      description: t('common:thirdCard'),
      icon: require('../../assets/icons/employee.png'),
    },
    {
      name: t('common:vacationRequests'),
      description: t('common:fourthCard'),
      icon: require('../../assets/icons/holiday.png'),
    },
    {
      name: t('common:CheckinCheckout'),
      description: t('common:fifthCard'),
      navigateTo: 'check-in-out-screen',
      icon: require('../../assets/icons/time.png'),
    },
  ];

  return (
    <_Screen
      statusBarColor={Color.Primary}
      header={<HomeHeader currentUser={currentUser} />}
      background={<Background color={Color.White} />}>
      <_View paddings={{paddingHorizontal: 20}} flex={1}>
        <_View>
          <CompanyCard currentUser={currentUser} />
        </_View>
        <_View flex={1}>
          <FlatList
            data={cardsData}
            contentContainerStyle={{marginTop: 10}}
            renderItem={({item}) => <HomeCard item={item} />}
          />
        </_View>
      </_View>
    </_Screen>
  );
};

const styles = StyleSheet.create({});
