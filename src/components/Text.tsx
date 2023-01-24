import {SizeProps, SpacingProps} from 'global-styles';
import React from 'react';
import {Text, TextProps} from 'react-native';
import {
  DefaultFont,
  FontFamily,
  Color,
  TextAlignStyles,
  TextSizeStyles,
  TextStyles,
  TextTransformStyles,
} from 'const/theme';
import {useTranslation} from 'react-i18next';

interface OwnProps extends TextProps {
  size?: keyof typeof TextSizeStyles;
  font?: FontFamily;
  textTransform?: keyof typeof TextTransformStyles;
  color?: string;
  align?: keyof typeof TextAlignStyles;
  opacity?: number;
}

type Props = OwnProps & SpacingProps & SizeProps;

export const _Text: React.FC<Props> = ({
  size,
  font = DefaultFont,
  textTransform,
  width,
  height,
  color = Color.black,
  style,
  children,
  align,
  margins,
  paddings,
  opacity,
  ...rest
}) => {
  const {i18n} = useTranslation();
  const lang = i18n?.language;

  return (
    <Text
      style={[
        TextStyles.base,
        size && TextStyles[size],
        {fontFamily: font, color: color || Color.Text},
        textTransform && TextStyles[textTransform],
        align && TextStyles[align],
        opacity ? {opacity} : undefined,
        margins,
        paddings,
        width ? {width} : undefined,
        height ? {height} : undefined,
        style,
        lang == 'ar' && {fontFamily: 'JF Flat Regular'},
      ]}
      allowFontScaling={false}
      {...rest}>
      {children}
    </Text>
  );
};
