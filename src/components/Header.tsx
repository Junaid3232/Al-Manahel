import React, {FC} from 'react';
import {_View, _Text, _Icon, _Image, _Screen} from 'components';
import {
  Image,
  TouchableOpacity,
  StatusBar,
  Platform,
  SafeAreaView,
} from 'react-native';
import {Color} from 'const';
import {Fonts} from 'const/theme';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'navigation';
import {useTranslation} from 'react-i18next';

interface Props {
  name: string;
  goBack: boolean;
  iconRight?: boolean;
}
export const _Header: FC<Props> = ({name, goBack, iconRight}) => {
  const navigation = useNavigation<NavigationProps>();
  const {i18n} = useTranslation();
  const lang = i18n.language;
  return (
    <SafeAreaView
      style={{
        backgroundColor: Color.Primary,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 5,
      }}>
      {goBack ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <_Icon
            family="Feather"
            name={lang == 'ar' ? 'chevron-right' : 'chevron-left'}
            color={Color.White}
            size={30}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
          <Image
            source={require('assets/icons/hamburger.png')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
      )}
      <_Text font={Fonts.bold} color={Color.White} size="med">
        {name}
      </_Text>
      <TouchableOpacity
        style={{
          width: 35,
          height: 35,
          borderRadius: 18,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {iconRight ? (
          <_Icon name="timer-outline" family="Ionicons" size={25} />
        ) : null}
      </TouchableOpacity>
    </SafeAreaView>
  );
};
