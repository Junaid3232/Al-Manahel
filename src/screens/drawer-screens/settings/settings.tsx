import React, {FC, useState} from 'react';
import {
  Background,
  _Header,
  _Icon,
  _Image,
  _Screen,
  _Text,
  _View,
} from 'components';
import {Color} from 'const';
import {Switch, TouchableOpacity} from 'react-native';
import {SelectLanguageModal} from 'modules';
import {styles} from './style';
import {useSelector} from 'react-redux';
import {urlConstants} from 'utils';
import {useTranslation} from 'react-i18next';
export const Settings: FC = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('English');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const BASE_URL = useSelector(state => state.companyUrl.companyUrl);
  const currentUser = useSelector(state => state.currentUser);
  const profileImage = `${BASE_URL}${urlConstants.GET_PHOTO}${currentUser?.user?.photoFileId}`;
  const {t, i18n} = useTranslation();
  const lang = i18n?.language;
  return (
    <_Screen
      header={<_Header goBack={true} name={t('common:settings')} />}
      background={<Background color={Color.White} />}
      statusBarColor={Color.Primary}>
      <_View style={styles.profileCard}>
        <_View style={styles.userCont}>
          <_View style={styles.userInfoContainer}>
            <_Image
              width={40}
              height={40}
              radius={20}
              source={{uri: profileImage}}
            />
          </_View>
        </_View>
        <_View>
          <_Text style={styles.nameText}>{currentUser?.user?.name}</_Text>
          <_Text
            color={Color.White}
            margins={{marginLeft: 15}}
            style={{fontSize: 12, color: Color.Gray}}>
            {'@jess_mi'}
          </_Text>
        </_View>
      </_View>

      <_View style={styles.card}>
        <_View style={styles.iconStyle}>
          <_Icon
            name="notifications"
            family="Ionicons"
            color={Color.Primary}
            size={30}
          />
        </_View>
        <_View justify="center" width="70%">
          <_Text style={styles.cardHeading} numberOfLines={1}>
            {t('common:notification')}
          </_Text>
          <_Text style={styles.cardBottomtext}>
            {t('common:questionsAlerts')}
          </_Text>
        </_View>
        <_View style={styles.switchStyle}>
          <Switch
            trackColor={{false: Color.Gray + 99, true: Color.Primary + 99}}
            thumbColor={isEnabled ? Color.Primary : Color.White}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setIsEnabled(!isEnabled)}
            value={isEnabled}
          />
        </_View>
      </_View>

      <TouchableOpacity style={styles.card} onPress={() => setIsVisible(true)}>
        <_View style={styles.iconStyle}>
          <_Icon
            name="language"
            family="Ionicons"
            color={Color.Primary}
            size={30}
          />
        </_View>
        <_View justify="center" width="85%">
          <_Text style={styles.cardHeading} numberOfLines={1}>
            {t('common:language')}
          </_Text>
          <_Text style={styles.cardBottomtext}>
            {lang == 'en' ? 'English' : 'اللغة العربية'}
          </_Text>
        </_View>
      </TouchableOpacity>

      <SelectLanguageModal
        isVisible={isVisible}
        selectedLanguage={setSelectedLanguage}
        setIsVisible={setIsVisible}
      />
    </_Screen>
  );
};
