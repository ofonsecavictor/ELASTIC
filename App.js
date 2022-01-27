import React from 'react';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context'
import {View, StatusBar} from 'react-native';
import {MainStack} from './src/routes/MainStack';

export default function App() {
  return (
    <View style={{flex: 1}}>
<StatusBar
   backgroundColor="transparent"
   translucent={true}
/>
      <MainStack />
    </View>
  );
}
