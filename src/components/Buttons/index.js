import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export function PrimaryButton ({title, name,type, color, size, ...rest}) {
    return (
        <View style={styles.PrimaryButtoncontainer}>
            <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons {...rest} style={styles.backbutton}
              name={name}
              type={type}
              color={color}
                size={size}
            />
                <Text style={styles.buttontitle}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}