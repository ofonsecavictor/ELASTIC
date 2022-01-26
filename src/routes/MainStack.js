import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {HomeScreen} from '../screens/HomeScreen'
import {PhysicalScrenn} from '../screens/PhysicalScrenn'
import {MainTab} from '../routes/MainTab'

const Stack = createStackNavigator();

export function MainStack() {
  const [user] = useState(null);
  return (
    <NavigationContainer style={{backgroundColor: '#fc034e'}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="MainTab" component={MainTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
