import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles'

export function Header ({title, ...rest}) {
    return (
            <View style={styles.header}>
                <TouchableOpacity>
                <MaterialCommunityIcons style={styles.backbutton}
              name="chevron-left"
              type="ionicon"
              color="#fff"
                size={35}
            />
                </TouchableOpacity>
                <Text style={styles.headertitle}>{title}</Text>

                <TouchableOpacity>
                <MaterialCommunityIcons style={styles.menubutton}
              name="menu"
              type="ionicon"
              color="#fff"
                size={35}
            />
                </TouchableOpacity>
            </View>
    )
}