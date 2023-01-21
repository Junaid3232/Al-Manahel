import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {_Image, _Text, _Icon, _View} from 'components';
import {Color} from 'const';
import {useNavigation} from '@react-navigation/native';

export const HomeHeader: React.FC = () => {
  const navigation = useNavigation();
  return (
    <_View style={styles.headerContainer}>
      <_Text style={styles.appText}>AL-MANAHEL TIME</_Text>
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
            resizeMode="contain"
            style={{alignSelf: 'center'}}
            source={require('assets/images/profile.jpeg')}
          />
        </_View>
        <_Text style={styles.userName}>Jessica Miller</_Text>
      </_View>
    </_View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 115,
    backgroundColor: Color.Primary,
  },
  appText: {
    marginTop: 30,
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: '700',
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
    backgroundColor: 'red',
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
