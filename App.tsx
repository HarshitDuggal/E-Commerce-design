import {View} from 'react-native';
import React from 'react';
import AppNavigation from './src/navigation/appNavigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
    <View style={{flex: 1}}>
      <AppNavigation />
    </View>
    </Provider>
  );
};

export default App;
