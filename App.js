import React from 'react';

import {View, StatusBar} from 'react-native';
import {MainStack} from './src/routes/MainStack';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <MainStack />
    </View>
  );
}
