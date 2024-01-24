import {View} from 'react-native';
import React from 'react';
import AppNavigation from './src/navigation/appNavigation';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <AppNavigation />
    </View>
  );
};

export default App;
