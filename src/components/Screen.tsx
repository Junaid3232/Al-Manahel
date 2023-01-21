import {AlignmentProps, SpacingProps} from 'global-styles';

import React from 'react';
import {Platform, StatusBar, StyleSheet, ViewProps} from 'react-native';
import {_View} from 'components';
import {SafeAreaView} from 'react-native';
import {Color} from 'const';
import {screenProps} from 'interfaces';

type Props = screenProps & SpacingProps & AlignmentProps & ViewProps;

export const _Screen: React.FC<Props> = ({
  align,
  background,
  justify,
  children,
  margins,
  paddings,
  disableAndroidBack,
  footer,
  hideBottomSafeArea,
  hideTopSafeArea,
  bottomSafeAreaColor,
  topSafeAreaColor,
  header,
  style,
  statusBarType = 'dark-content',
  statusBarColor = Color.White,
  pageGuard,
  onAndroidBack,
  ...rest
}) => {
  return (
    <>
      {background && <_View style={styles.container}>{background}</_View>}
      {hideTopSafeArea && (
        <SafeAreaView style={{backgroundColor: topSafeAreaColor}} />
      )}
      <StatusBar backgroundColor={statusBarColor} barStyle={statusBarType} />
      <_View
        align={align}
        justify={justify}
        margins={margins}
        paddings={{
          ...paddings,
          paddingTop: Platform.OS === 'android' ? 0 : paddings?.paddingTop,
        }}
        flex={1}
        style={style}
        {...rest}>
        {header}
        {children}
      </_View>
      {footer}
      {hideBottomSafeArea && (
        <SafeAreaView
          style={{backgroundColor: bottomSafeAreaColor}}
          edges={['bottom']}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  blur: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 2,
  },
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
});
