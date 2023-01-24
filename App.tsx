import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import {RootNavigator} from './src/navigation/RootNavigator';
import './src/const/IMLocalize';
import {Provider} from 'react-redux';
import {store, persistor} from './src/app-redux/store';
import {PersistGate} from 'redux-persist/integration/react';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    </View>
  );
};

export default App;
