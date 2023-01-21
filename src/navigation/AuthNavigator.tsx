import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import * as screens from 'screens';
import {RoutesRecord} from './models';

export const AuthNavigator: FC = () => {
  const Stack = createNativeStackNavigator<RoutesRecord>();
  return (
    <Stack.Navigator
      initialRouteName="company-code"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen name="company-code" component={screens.CompanyCode} />
      <Stack.Screen name="login-screen" component={screens.Login} />
      <Stack.Screen name="code-verify-screen" component={screens.CodeVerfiy} />
    </Stack.Navigator>
  );
};
