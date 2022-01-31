import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {HomeScreen} from '../screens/HomeScreen'
import {PhysicalScrenn} from '../screens/PhysicalScrenn'

const Tab = createBottomTabNavigator();

export function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddinTop: 5,
          paddingBottom: 5,
        },
        tabBarActiveTintColor: '#d13f41',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons
              name="home"
              type="ionicon"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
