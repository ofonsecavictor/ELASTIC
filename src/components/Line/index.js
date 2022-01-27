import React from 'react';
import {View, Text} from 'react-native';

export function Line({style, props, ...rest}) {
    return (
        <View {...rest}
  style={{
    width: '90%',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20,
  }}
/>
    )
}