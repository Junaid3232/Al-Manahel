import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import {RootNavigator} from './src/navigation/RootNavigator';
import './src/const/IMLocalize';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <RootNavigator />
    </View>
  );
};

export default App;
