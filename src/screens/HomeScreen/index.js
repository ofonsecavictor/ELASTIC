import React, {useState} from 'react';
import { View} from 'react-native';
import {styles} from './styles';
import {Header} from '../../components/Header';
import {WorkoutList} from '../../components/WorkoutList';
import {Line} from '../../components/Line';
import {StrengthBar} from '../../components/StrengthBar';
import {Modal} from '../../components/Modal';

export function HomeScreen () {

  return (
    <View style={styles.container}>
      <Header title="Elastic" />
      <WorkoutList />
      <Line marginTop={25} marginBottom={25} />
      <StrengthBar />
      <Modal/>
    </View>
  );
}
