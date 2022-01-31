import React, {useRef, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Modalize} from 'react-native-modalize';

import {MyCheckBox} from '../CheckBox';
import {styles} from './styles';
import {Line} from '../Line';

export function Modal() {
  const modalizeRef = useRef(null);
  const [checked, setChecked] = useState('');

  //ABRIR MODAL
  useEffect(() => {
    setTimeout(() => modalizeRef.current?.open(1000));
  }, []);

  return (
    <Modalize
      handlePosition="inside"
      ref={modalizeRef}
      snapPoint={400}
      modalHeight={500}>
      <Text style={styles.modalTitle}> Adicione os exercício</Text>
      <View
        style={{
          alignSelf: 'center',
          borderWidth: 1,
          borderRadius: 10,
          width: '90%',
          marginTop: 10,
        }}>
        <MyCheckBox
          value="ABDOMINAL"
          status={checked === 'ABDOMINAL' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('ABDOMINAL')}
          title="ABDOMINAL"
          onValueChange={value => setChecked(value)}
          Armazenar={'ABDOMINAL'}
        />
        <View style={{marginBottom: 10, opacity: 0.3}}>
          <Line />
        </View>
        <MyCheckBox
          value="FLEXÃO DE COTOVELO"
          status={checked === 'FLEXÃO DE COTOVELO' ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked('FLEXÃO DE COTOVELO');
            Armazenar('FLEXÃO DE COTOVELO');
          }}
          title="FLEXÃO DE COTOVELO"
          onValueChange={value => setChecked(value)}
        />
        <View style={{marginBottom: 10, opacity: 0.3}}>
          <Line />
        </View>
        <MyCheckBox
          value="EXTENSÃO DO COTOVELO DIREITO"
          status={
            checked === 'EXTENSÃO DO COTOVELO DIREITO' ? 'checked' : 'unchecked'
          }
          onPress={() => setChecked('EXTENSÃO DO COTOVELO DIREITO')}
          title="EXTENSÃO DO COTOVELO DIREITO"
          onValueChange={value => setChecked(value)}
        />

        <View style={{marginBottom: 10, opacity: 0.3}}>
          <Line />
        </View>
        <MyCheckBox
          value="EXTENSÃO DO COTOVELO ESQUERDO"
          status={
            checked === 'EXTENSÃO DO COTOVELO ESQUERDO'
              ? 'checked'
              : 'unchecked'
          }
          onPress={() => setChecked('EXTENSÃO DO COTOVELO ESQUERDO')}
          title="EXTENSÃO DO COTOVELO ESQUERDO"
          onValueChange={value => setChecked(value)}
        />
      </View>
    </Modalize>
  );
}
