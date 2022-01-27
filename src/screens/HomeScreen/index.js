import React, {useState} from 'react';
import { View} from 'react-native';
import {styles} from './styles';
import {Header} from '../../components/Header';
import {WorkoutList} from '../../components/WorkoutList';
import {Line} from '../../components/Line';
import {StrengthBar} from '../../components/StrengthBar';
import {Modal} from '../../components/Modal';

export function HomeScreen() {
  const workouts = [
    'ABDOMINAL',
    'FLEXÃO DE COTOVELO',
    'EXTENSÃO DO COTOVELO DIREITO',
    'EXTENSÃO DO COTOVELO ESQUERDO',
  ];

  return (
    <View style={styles.container}>
      <Header title="Elastic" />
      <WorkoutList />
      <Line marginTop={25} marginBottom={25} />
      <StrengthBar />
      <Modal
        title1={workouts[0]}
        title2={workouts[1]}
        title3={workouts[2]}
        title4={workouts[3]}
      />
    </View>
  );
}
