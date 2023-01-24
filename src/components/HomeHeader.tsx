import React from 'react';
import {StyleSheet, TouchableOpacity, Platform, Text} from 'react-native';
import {_Image, _Text, _Icon, _View} from 'components';
import {Color} from 'const';
import {useNavigation} from '@react-navigation/native';
import {urlConstants} from 'utils';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

interface Props {
  currentUser: [];
}
export const HomeHeader: React.FC<Props> = ({currentUser}) => {
  const navigation = useNavigation();
  const BASE_URL = useSelector(state => state.companyUrl.companyUrl);
  const imageURL = `${BASE_URL}${urlConstants.GET_PHOTO}${currentUser?.user?.photoFileId}`;
  const {i18n} = useTranslation();
  const lang = i18n.language;

  return (
    <_View
      style={[
        styles.headerContainer,
        {height: Platform.OS == 'android' ? 115 : 140},
      ]}>
      <Text style={styles.appText}>{'AL-MANAHEL TIME'}</Text>
      <_View style={styles.iconStyles}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <_Icon
            family="MaterialCommunityIcons"
            name="menu"
            color={Color.White}
            size={25}
          />
        </TouchableOpacity>
        <_View style={styles.userImage}>
          <_Image
            height={'100%'}
            width={'100%'}
            style={{alignSelf: 'center', backgroundColor: 'blue'}}
            source={{uri: imageURL}}
          />
        </_View>
        <_Text style={styles.userName}>{currentUser?.user?.name}</_Text>
      </_View>
    </_View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    paddingBottom: 15,
    backgroundColor: Color.Primary,
  },
  appText: {
    marginTop: 30,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',

    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Lato-Regular',
  },
  iconStyles: {
    paddingTop: 13,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Color.Primary,
    marginLeft: 10,
    overflow: 'hidden',
  },
  userName: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '700',
    color: Color.White,
  },
});
