import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {_Image, _Text, _Icon, _View} from 'components';
import {Color} from 'const';
import {NavigationProps} from 'navigation';
import {useNavigation} from '@react-navigation/native';
import {Fonts} from 'const/theme';

interface Props {
  item: {
    description: string;
    name: string;
    onPress: any;
  };
}
export const HomeCard: React.FC<Props> = ({item}) => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(item?.navigateTo)}
      style={styles.container}>
      <_View style={styles.iconStyles}>
        <_View style={styles.userImage}></_View>
        <_View flexDirection="row" width={'100%'}>
          <_View margins={{marginLeft: 10}}>
            <_Text style={styles.userName}>{item.name}</_Text>

            <_Text numberOfLines={2} style={styles.desText}>
              {item.description}
            </_Text>
          </_View>
          <_View style={styles.iconCont}>
            <_Icon
              family="Feather"
              name="chevron-right"
              color={Color.Gray}
              size={18}
            />
          </_View>
        </_View>
      </_View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 75,
    justifyContent: 'center',
    borderRadius: 14,
    borderColor: Color.black + 30,
    borderWidth: 0.6,
    marginTop: 10,
  },
  desText: {
    fontSize: 12,
    color: Color.MediumLite,
    paddingRight: 20,
    lineHeight: 15,
    marginTop: 3,
  },
  iconCont: {
    position: 'absolute',
    right: -3,
    height: '100%',
    justifyContent: 'center',
  },
  iconStyles: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    width: '90%',
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: Color.Primary + 20,
    alignSelf: 'center',

    overflow: 'hidden',
  },
  userName: {
    fontSize: 16,
    fontFamily: Fonts.bold,
  },
});
