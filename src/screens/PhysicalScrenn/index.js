
import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles'

import {Header} from '../../components/Header'

export function PhysicalScrenn () {
    return (
        <View style={styles.container}>
            <Header title="Elastic"/>
            <Text>OLÁ MUNDO ESSA É A PhysicalScrenn</Text>
        </View>
    )
}