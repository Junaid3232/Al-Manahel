import {Spacing} from 'const';
import {Fonts} from 'const/theme';
import {_View, _Icon, _Text} from 'components';
import React from 'react';
import {
  Platform,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';
import {Color} from 'const';
import DeviceInfo from 'react-native-device-info';
import {useTranslation} from 'react-i18next';
const isTablet = DeviceInfo.isTablet();

interface IconProps {
  iconFamily?: string;
  iconName?: any;
  iconSize?: number;
  iconcolor?: string;
  iconStyle?: any;
  text?: string;
}

type Props = IconProps & TextInputProps;
export const _Input = React.forwardRef<TextInput, Props>(function Input(
  {
    style,
    iconFamily,
    iconName,
    iconSize = 15,
    iconcolor = Color.Primary,
    iconStyle,
    text,
    ...rest
  },
  ref,
) {
  const {i18n} = useTranslation();
  const lang = i18n?.language;
  return (
    <_View>
      <_Text style={{position: 'absolute', fontSize: 16, marginLeft: 3}}>
        {text}
      </_Text>
      <_View>
        {iconName && (
          <_Icon
            style={[
              styles.icon,
              lang == 'ar' && {right: 15},
              lang == 'en' && {left: 15},
              Platform.OS == 'android' && {left: 10},
            ]}
            name={iconName}
            family={iconFamily}
            color={iconcolor}
            size={iconSize}
          />
        )}
        <TextInput
          ref={ref}
          {...rest}
          placeholderTextColor={Color.GrayLite}
          style={[
            rest.multiline ? styles.multiline : styles.standard,
            style,
            lang == 'ar' && {fontFamily: 'JF Flat Regular'},
            lang == 'ar' && {textAlign: 'right'},
            lang == 'en' && {paddingLeft: iconName ? 50 : 20},
            lang == 'ar' && {paddingRight: iconName ? 60 : 20},
            Platform.OS === 'android' && iconName && {paddingLeft: 60},
          ]}
        />
      </_View>
    </_View>
  );
});

const core: TextStyle = {
  fontSize: 16,
  borderRadius: 10,
  alignItems: 'center',
  fontFamily: Fonts.regular,
  marginBottom: Spacing.Med,
  paddingHorizontal: Spacing.Med,
  textAlignVertical: 'center',
  alignSelf: 'center',
  borderWidth: 1,
  borderColor: '#E5E5E5',
};

const styles = StyleSheet.create({
  standard: {
    ...core,
    minHeight: 50,
    alignSelf: 'center',
    marginTop: 25,
  },
  multiline: {
    ...core,
    minHeight: 100,
    maxHeight: 150,
    height: 'auto',
    paddingVertical: Spacing.Med,
    textAlignVertical: 'top',
  },
  icon: {
    position: 'absolute',
    top: 43,
    alignSelf: 'flex-start',

    // marginLeft: -20,
    // top: 43,
    // zIndex: 1,
    width: 40,
  },
  rightIcon: {
    position: 'absolute',
    left: 50,
    top: 16,
    zIndex: 1,
  },
});
