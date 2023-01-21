import {SpacingProps} from 'global-styles';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {_Image, _Text, _Icon} from 'components';
import {Color, Spacing} from 'const';

interface OwnProps extends TouchableOpacityProps {
  title: string;
  type?: 'primary' | 'secondary' | 'tertiary';
  loading?: boolean;
  showArrowBefore?: boolean;
  showArrowAfter?: boolean;
}

type Props = OwnProps & SpacingProps;

export const _Button: React.FC<Props> = ({
  title,
  style,
  disabled,
  margins,
  paddings,
  loading,
  type = 'primary',
  showArrowBefore,
  showArrowAfter,
  ...rest
}) => {
  const disabledType = `${type}Disabled` as keyof typeof styles;
  const disabledTextType = `${type}TextDisabled` as keyof typeof styles;
  const textType = `${type}Text` as keyof typeof styles;
  const disabledStyle = JSON.parse(JSON.stringify(styles[disabledType]));
  const textStyle = JSON.parse(JSON.stringify(styles[textType]));
  const disabledTextStyle = JSON.parse(
    JSON.stringify(styles[disabledTextType]),
  );

  if (loading) {
    return (
      <ActivityIndicator
        size="small"
        color={Color.Primary}
        style={{...styles.loading, ...margins, ...paddings}}
      />
    );
  }

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.base,
          styles[type],
          margins,
          paddings,
          style,
          disabled && disabledStyle,
        ]}
        disabled={disabled}
        {...rest}>
        {showArrowBefore && (
          <_Icon
            family="AntDesign"
            name="arrowright"
            style={{marginRight: 10}}
          />
        )}
        <_Text
          size="base"
          font="Lato-Bold"
          style={[textStyle, disabled && disabledTextStyle]}>
          {title}
        </_Text>
        {showArrowAfter && (
          <_Icon
            family="AntDesign"
            name="arrowright"
            style={{marginLeft: 10}}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: Spacing.Med,
    minWidth: 100,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  primary: {
    backgroundColor: Color.Primary,
  },
  primaryText: {
    color: Color.Negative,
  },
  primaryDisabled: {
    backgroundColor: Color.Secondary,
    borderColor: Color.Secondary,
  },
  primaryTextDisabled: {
    color: Color.Negative,
  },
  secondary: {
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: Color.Primary,
  },
  secondaryText: {
    color: Color.Primary,
  },
  secondaryDisabled: {},
  secondaryTextDisabled: {
    color: Color.Secondary,
  },
  tertiary: {
    borderColor: Color.TextLight,
    backgroundColor: 'transparent',
    color: Color.Primary,
  },
  tertiaryText: {
    color: Color.Primary,
  },
  tertiaryDisabled: {},
  tertiaryTextDisabled: {
    color: Color.Secondary,
  },
  disabledImage: {
    opacity: 0.2,
  },
  loading: {
    alignSelf: 'center',
    height: 40,
  },
  arrowRotated: {
    transform: [{rotate: '180deg'}],
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
  },
});
