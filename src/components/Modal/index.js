import React, {useRef, useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {MyCheckBox} from '../CheckBox';
import {styles} from './styles';
import {Line} from '../Line';
import {PrimaryButton} from '../Buttons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Modal({children}) {
  const modalizeRef = useRef(false);
  const [checked, setChecked] = useState('');
  const [value, setValue] = useState();

  const workouts = [
    'ABDOMINAL',
    'FLEXÃO DE COTOVELO',
    'EXTENSÃO DO COTOVELO DIREITO',
    'EXTENSÃO DO COTOVELO ESQUERDO',
  ];

  const Armazenar = async value => {
    try {
       AsyncStorage.setItem('@App1', value);
    } catch (error) {
    }
  };

  const Buscar = async () => {
    try {
      const data = AsyncStorage.getItem('@App1');
      setValue(data);
    } catch (e) {
      console.log(checked);
    }
    };
    useEffect(() => {
      Buscar();
    }, []);
  //Open Modal
  useEffect(() => {
    setTimeout(() => modalizeRef.current?.open(true));
  }, []);

  return (
    <>
      <Modalize ref={modalizeRef} snapPoint={470}>
        <Text style={styles.modalTitle}> Adicione os exercício</Text>
        <Text>ESSE É O VALOR ARMAZENADO {value? checked : value}</Text>
        <View
          style={{
            alignSelf: 'center',
            borderWidth: 1,
            borderRadius: 10,
            width: '90%',
            marginTop: 10,
          }}>
          <MyCheckBox
            title={workouts[0]}
            value={checked}
            onValueChange={value => setChecked(value)}
            onPress={() => {
              setChecked(workouts[0]);
              Armazenar(workouts[0]);
            }}
            status={checked === workouts[0] ? 'checked' : 'unchecked'}
          />
          <View style={{marginBottom: 10, opacity: 0.3}}>
            <Line />
          </View>
          <MyCheckBox
            title={workouts[1]}
            value={checked}
            onValueChange={value => setChecked(value)}
            onPress={() => {
              setChecked(workouts[1]);
              Armazenar(workouts[1]);
            }}
            status={checked === workouts[1] ? 'checked' : 'unchecked'}
          />
          <View style={{marginBottom: 10, opacity: 0.3}}>
            <Line />
          </View>
          <MyCheckBox
            title={workouts[2]}
            value={checked}
            onValueChange={value => setChecked(value)}
            onPress={() => {
              setChecked(workouts[2]);
              Armazenar(workouts[2]);
            }}
            status={checked === workouts[2] ? 'checked' : 'unchecked'}
          />

          <View style={{marginBottom: 10, opacity: 0.3}}>
            <Line />
          </View>
          <MyCheckBox
            title={workouts[3]}
            value={checked}
            onValueChange={value => setChecked(value)}
            onPress={() => {
              setChecked(workouts[3]);
              Armazenar(workouts[3]);
            }}
            status={checked === workouts[3] ? 'checked' : 'unchecked'}
          />
        </View>
      </Modalize>
    </>
  );
}
