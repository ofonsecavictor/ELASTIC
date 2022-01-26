import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles'
import {Header} from '../../components/Header'

export function HomeScreen () {
    return (
        <View style={styles.container}>
            <Header title="Elastic"/>


            <View style={{justifyContent: 'center', textAlign: 'center',}}>
            <Text>OLÁ MUNDO ESSA É A HOME SCREEN</Text>
            <Text>OLÁ MUNDO ESSA É A HOME SCREEN</Text>
            <Text>OLÁ MUNDO ESSA É A HOME SCREEN</Text>
            <Text>OLÁ MUNDO ESSA É A HOME SCREEN</Text>
            <Text>OLÁ MUNDO ESSA É A HOME SCREEN</Text>
            </View>
        </View>
    )
}