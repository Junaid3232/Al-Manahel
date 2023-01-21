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
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'navigation';
import {FlatList, StyleSheet} from 'react-native';
import {CompanyCard, HomeCard} from 'modules';
import {useApi} from 'hooks';

export const Home: FC = () => {
  const api = useApi();
  const navigation = useNavigation<NavigationProps>();
  const cardsData = [
    {
      name: 'Reports',
      description:
        'Browse reports, shifts, summary,fingerprints in specific time period. Download & share.',
    },
    {
      name: 'Questionings',
      description:
        'View new & old questionings, send & view anserwers.Also see manager’s decision.',
    },
    {
      name: 'Furloughs Requests',
      description: `Send and view pending fulough requests. Also see manager’s decision.`,
    },
    {
      name: 'Vacations Requests',
      description: `Send and view pending vacation requests. Also see manager’s decision.`,
    },
    {
      name: 'Checkin & Checkout',
      description: `Employee can send checkin and checkout in spesific locations.`,
      navigateTo: 'check-in-out-screen',
    },
  ];
  const getUrl = async () => {
    api
      .getResource('http://113.30.151.6:100/clients/get-api-url?code=0001')
      .then(res => console.log('----response', res.data));
  };
  useEffect(() => {
    getUrl();
  }, []);
  return (
    <_Screen
      statusBarColor={Color.Primary}
      header={<HomeHeader />}
      background={<Background color={Color.White} />}>
      <_View paddings={{paddingHorizontal: 20}} flex={1}>
        <_View>
          <CompanyCard />
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
