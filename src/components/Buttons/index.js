import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export function PrimaryButton ({title, name,type, color, size, props, ...rest}) {
    return (
        <View style={styles.PrimaryButtoncontainer}>
            <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons style={styles.backbutton}
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