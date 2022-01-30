import React from 'react';
import {View, StatusBar} from 'react-native';
import {MainStack} from './src/routes/MainStack';
import { Provider } from 'react-redux';

import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
    <View style={{flex: 1}}>
<StatusBar
   backgroundColor="transparent"
   translucent={true}
   barStyle="light-content"
/>
      <MainStack />
    </View>
    </Provider>
  );
}
