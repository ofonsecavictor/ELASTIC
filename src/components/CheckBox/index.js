import  React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Checkbox,} from 'react-native-paper';

import {styles} from './styles';


export function MyCheckBox({props, title, ...rest}) {
  const [checked, setChecked] = useState(false);
  return (

      <View style={styles.checkContainer}>
        <Checkbox {...rest}
          color="#fc034e"
        />
        <Text style={styles.title}> {title} </Text>
      </View>

  );
}
