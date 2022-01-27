import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles'
import {Header} from '../../components/Header'
import {PrimaryButton} from '../../components/Buttons'
import { WorkoutList } from '../../components/WorkoutList';
import {Line} from '../../components/Line'
import {StrengthBar} from '../../components/StrengthBar'

export function HomeScreen () {
    return (
        <View style={styles.container}>
            <Header title="Elastic"/>
            <WorkoutList/>
            <Line/>
            <StrengthBar/>
            <View style={{flexDirection:'row', justifyContent: 'center'}}>
            <PrimaryButton  name="play" size={25} color="#FFF" title="INICIAR"/>
            <PrimaryButton  name="chart-bar" size={22} color="#FFF" title="RELATÓRIOS"/>
            </View>
            <View>
            <Text>OLÁ MUNDO ESSA É A HOME SCREEN</Text>
            </View>
            <View>
            <Text>OLÁ MUNDO ESSA É A HOME SCREEN</Text>

            </View>
        </View>
    )
}