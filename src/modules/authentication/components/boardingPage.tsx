import React, {FC} from 'react';
import {_Image, _Text, _View, _Button} from 'components';
import {useNavigation} from '@react-navigation/native';
import {Color} from 'const';
import {Dimensions} from 'react-native';
import {StyleSheet, ImageSourcePropType} from 'react-native';
import {NavigationProps} from 'navigation';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

interface Props {
  title?: string;
  description?: string;
  image?: ImageSourcePropType;
  activeIndex: number;
}
export const BoardingPage: FC<Props> = ({
  title,
  description,
  image,
  activeIndex,
}) => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <>
      <_Image height={'55%'} width={'90%'} source={image} />
      <_Text
        width={'75%'}
        align={'center'}
        color={Color.Primary}
        size="lrg"
        font="Lato-Bold">
        {title}
      </_Text>
      <_Text
        width={'75%'}
        margins={{marginTop: 10}}
        align={'center'}
        color={Color.Gray}
        size="base"
        font="Lato-Medium">
        {description}
      </_Text>
      {activeIndex !== 3 ? (
        <_View style={styles.skipText}>
          <_Button
            onPress={() => navigation.navigate('welcome-screen')}
            type="secondary"
            paddings={{padding: 10}}
            title="Skip"
          />
        </_View>
      ) : (
        <_View style={styles.getStartedButton}>
          <_Button
            onPress={() => navigation.navigate('welcome-screen')}
            showArrowAfter
            type="primary"
            style={{width: screenWidth - 60}}
            title="Get Started"
          />
        </_View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  skipText: {
    width: 100,
    flex: 1,
    position: 'absolute',
    bottom: 13,
    top: screenHeight - 115,
    left: 50,
  },
  getStartedButton: {
    flex: 1,
    position: 'absolute',
    top: screenHeight - 115,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
