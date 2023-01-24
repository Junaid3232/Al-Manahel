import React, {FC} from 'react';
import {_View, _Text, _Icon, _Image, _Button} from 'components';
import {Modal, StyleSheet, Image} from 'react-native';

import {Color} from 'const';
import {Fonts} from 'const/theme';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'navigation';
import {t} from 'i18next';

interface errorModalProps {
  isVisible?: boolean;

  setVisible: (x: boolean) => void;
  onPressButton?: () => void;
}
export const NoLicenseModal: FC<errorModalProps> = ({
  isVisible,

  setVisible,
  onPressButton,
}) => {
  const buttonColor = Color.warning;
  console.log('----visible', isVisible);
  const navigation = useNavigation<NavigationProps>();
  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <_View style={styles.container}>
        <_View style={styles.innerContainer}>
          <_View style={styles.topHeaderContainer}>
            <Image
              source={require('../assets/icons/ErrorModalCurve.png')}
              style={styles.headerImage}
            />
            <_Image
              source={require('../assets/icons/warningLogo.png')}
              width={90}
              height={90}
              style={styles.logoImage}
            />
          </_View>

          <_Text
            size="med"
            style={[
              styles.textStyle,
              {color: buttonColor, fontFamily: Fonts.regular},
            ]}>
            {t('common:warning')}
          </_Text>
          <_Text size="tny" style={[styles.textStyle, {color: Color.Gray}]}>
            {t('common:noLiecense')}
          </_Text>
          <_Button
            title={'Close'}
            style={styles.btnStyle}
            onPress={() => {
              setVisible(false);
            }}
          />
        </_View>
      </_View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.black + 99,
  },
  innerContainer: {
    backgroundColor: Color.White,
    width: '80%',
    paddingBottom: 30,
    borderRadius: 15,
  },
  topHeaderContainer: {
    height: 120,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderRadius: 15,
  },
  logoImage: {
    position: 'absolute',
    alignSelf: 'center',
    top: 15,
  },
  textStyle: {
    textAlign: 'center',
    width: '70%',
    marginTop: 10,
    alignSelf: 'center',
    textAlignVertical: 'center',
  },
  btnStyle: {
    width: 120,
    height: 30,
    alignSelf: 'center',
    marginTop: 20,
    textAlignVertical: 'center',
    backgroundColor: Color.warning,
  },
});
