import React, {FC, useEffect, useState} from 'react';

import {
  _View,
  _Screen,
  Background,
  _Image,
  _Text,
  _Button,
  _Icon,
  _Input,
  SupportText,
  ErrorModal,
} from 'components';
import {Color} from 'const';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'navigation';
import {StyleSheet} from 'react-native';

import {urlConstants} from 'utils';
import {AxiosResponse} from 'axios';
import {useApi} from 'hooks';
import {useDispatch} from 'react-redux';
import {setUser} from 'app-redux';
import {t} from 'i18next';
import {Fonts} from 'const/theme';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

export const CodeVerfiy: FC = ({route}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [smsCode, setSmsCode] = useState<number>();
  const navigation = useNavigation<NavigationProps>();
  const [employeeCode, setEmployeeCode] = useState<number>();
  const [buttonDisable, setButtonDisble] = useState<boolean>(true);
  const [value, setValue] = useState();
  const CELL_COUNT = 6;
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const employeeNo = route?.params?.employeeNo;
  const phoneNo = route?.params?.phoneNo;
  let phone = phoneNo.toString();
  var lastFive = phone.substr(phone.length - 4);

  const dispatch = useDispatch();
  const api = useApi();
  useEffect(() => {
    setEmployeeCode(employeeNo);
  }, []);

  const onValidateSms = async () => {
    const URL = `${urlConstants.SMS_CODE}?employeeCode=${
      employeeCode || employeeNo
    }&smsCode=${smsCode}`;
    setIsLoading(true);
    api.postResource(URL, {}).then((res: AxiosResponse | undefined) => {
      if (res) {
        getUser();
      } else {
        setShowError(true);
        setIsLoading(false);
      }
    });
  };
  const getUser = async () => {
    const URL = `${urlConstants.EMPLOYEE_DATA}?code=${employeeNo}`;
    api.getResource(URL).then(res => {
      if (res) {
        setIsLoading(false);
        dispatch(setUser(res?.data));
        navigation.navigate('home-screen');
      }
    });
  };
  useEffect(() => {
    checkNo();
  }, [value]);
  let checkNo = async code => {
    if (value?.toString().length === 6) {
      setButtonDisble(false);
      setSmsCode(value);
    } else {
      setButtonDisble(true);
    }
  };

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
      background={<Background color={Color.White} />}
      hideTopSafeArea>
      <_View paddings={{padding: 20}} flex={1} align="center">
        <_Text style={{fontSize: 20, fontWeight: Fonts.bold}}>
          {t('common:verify')}
        </_Text>
        <_Text style={{color: Color.Gray, textAlign: 'center', marginTop: 10}}>
          {t('common:weHaveSend6digitCode')}
        </_Text>
        <_Text style={styles.numberText}>{`+1******${lastFive}`}</_Text>
        <_Text style={styles.timeText}>1:59</_Text>
        <_View
          width={'100%'}
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <_View
                // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={[styles.cellRoot, isFocused && styles.focusCell]}>
                <_Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </_Text>
              </_View>
            )}
          />
          {/* <OtpInputs
            handleChange={checkNo}
            // autoFocus={true}
            autoFocusOnLoad={true}
            numberOfInputs={6}
            keyboardType={'phone-pad'}
            style={styles.container}
            inputContainerStyles={styles.inputContainer}
            inputStyles={styles.inputStyles}
            focusStyles={styles.focusStyle}
          /> */}
        </_View>
        <_View width={'100%'} style={{marginTop: 30, paddingBottom: 10}}>
          <_Button
            title={t('common:signIn')}
            disabled={buttonDisable}
            loading={isLoading}
            onPress={onValidateSms}
          />
        </_View>
        <_Text>
          {t('common:didnotrecevetheCode')}
          <_Text
            onPress={onValidateSms}
            style={{color: '#0D6EFD', textDecorationLine: 'underline'}}>
            {t('common:sendAgain')}
          </_Text>
        </_Text>
        <_View style={{position: 'absolute', bottom: 30}}>
          <SupportText />
        </_View>
      </_View>
      <ErrorModal
        setVisible={setShowError}
        isVisible={showError}
        description={t('common:invalidVerificationCode')}
      />
    </_Screen>
  );
};

const styles = StyleSheet.create({
  loginBtn: {width: 350, height: 50},
  registerBtn: {
    width: 350,
    height: 50,
    marginBottom: 50,
    backgroundColor: Color.White,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '99%',
    height: 60,
    alignSelf: 'center',
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyles: {
    width: 40,
    height: 60,
    borderBottomColor: Color.Primary,
    borderBottomWidth: 2,
    fontSize: 24,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  focusStyle: {
    borderBottomColor: Color.Primary,
    borderBottomWidth: 4,
    borderRadius: 2,
  },
  timeText: {
    color: Color.Gray,
    textAlign: 'center',
    marginTop: 10,
    fontSize: 12,
  },
  numberText: {color: Color.black, textAlign: 'center', marginTop: 10},
  root: {padding: 20, minHeight: 300},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cellRoot: {
    width: 50,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
    // marginLeft: 10,
  },
  cellText: {
    color: '#000',
    fontSize: 28,
    textAlign: 'center',
    lineHeight: 40,
  },
  focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 2,
  },
});
