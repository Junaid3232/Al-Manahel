import React, {FC} from 'react';
import {
  _Screen,
  _View,
  _Text,
  _Input,
  _Image,
  _Button,
  SupportText,
} from 'components';
import {Background} from 'components';
import {Color} from 'const';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'navigation';

export const Login: FC = () => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <_Screen
      header={
        <_Image
          height={100}
          width={170}
          resizeMode="contain"
          style={{alignSelf: 'center'}}
          source={require('assets/icons/appLogo.png')}
        />
      }
      background={<Background color={Color.Negative} />}
      hideTopSafeArea>
      <_View flex={1} paddings={{padding: 20}}>
        <_Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'center'}}>
          Sign in
        </_Text>
        <_View paddings={{paddingVertical: 40}}>
          <_Input
            text={'Employee No.'}
            style={{height: 40, width: '100%'}}
            placeholder="Enter Company Code "
            iconFamily="Feather"
            iconName="hash"
            iconcolor={Color.Gray}
            // iconSize={18}
          />
          <_View margins={{marginTop: 10}}>
            <_Input
              text={'Phone No.'}
              style={{height: 40, width: '100%'}}
              placeholder="Enter Company Code "
              iconFamily="MaterialCommunityIcons"
              iconName="phone"
              iconcolor={Color.Gray}
              iconSize={18}
            />
          </_View>
        </_View>
        <_Button
          title="Sign in"
          onPress={() => navigation.navigate('code-verify-screen')}
        />
        <_View style={{position: 'absolute', bottom: 30, alignSelf: 'center'}}>
          <SupportText />
        </_View>
      </_View>
    </_Screen>
  );
};
