import React from 'react';
import {StyleSheet} from 'react-native';
import {_Image, _Text, _Icon, _View} from 'components';
import {Color} from 'const';
import {Fonts} from 'const/theme';
import {urlConstants} from 'utils';
import {useSelector} from 'react-redux';

interface Props {
  currentUser: [];
}
export const CompanyCard: React.FC<Props> = ({currentUser}) => {
  const BASE_URL = useSelector(state => state.companyUrl.companyUrl);
  const imageURL = `${BASE_URL}${urlConstants.GET_PHOTO}${currentUser?.user?.photoLogoFileId}`;

  return (
    <_View style={styles.headerContainer}>
      <_View style={styles.iconStyles}>
        <_View style={styles.userImage}>
          <_Image
            height={'100%'}
            width={'100%'}
            resizeMode="contain"
            style={{alignSelf: 'center'}}
            source={{uri: imageURL}}
          />
        </_View>
        <_View>
          <_Text style={styles.userName}>
            {currentUser.user.institutionName}
          </_Text>
          {currentUser.user.institutionAddress && (
            <_View flexDirection="row" margins={{marginLeft: 10}}>
              <_Icon
                family="Ionicons"
                name="location-sharp"
                color={Color.Gray}
                size={13}
                style={{marginTop: 3}}
              />
              <_Text
                style={{fontSize: 12, color: Color.MediumLite, marginLeft: 4}}>
                {currentUser.user.institutionAddress}
              </_Text>
            </_View>
          )}
        </_View>
      </_View>
    </_View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 70,
    borderBottomColor: Color.GrayLite,
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
    marginTop: 20,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,

    marginLeft: 10,
    overflow: 'hidden',
  },
  userName: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: Fonts.bold,
  },
});
