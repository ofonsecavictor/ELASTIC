import React, {useRef, useEffect, useState} from 'react';
import {View, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {MyCheckBox} from '../CheckBox';
import {styles} from './styles';
import {Line} from '../Line';

export function Modal({title1, title2, title3,title4}) {
  const modalizeRef = useRef(false);


  useEffect(() => {
    setTimeout(() => modalizeRef.current?.open(true));
  }, []);

  return (
    <>
      <Modalize ref={modalizeRef} snapPoint={350}>
        <Text style={styles.modalTitle}> Selecione o exercício</Text>
        <View
          style={{

            alignSelf: 'center',
            borderWidth: 1,
            borderRadius: 10,
            width: '90%',
            marginTop: 10,
          }}>
          <MyCheckBox title={title1} />
          <View style={{ marginBottom: 10, opacity: 0.3}}>
            <Line />
          </View>
          <MyCheckBox title={title2}/>
          <View style={{ marginBottom: 10, opacity: 0.3}}>
            <Line />
          </View>
          <MyCheckBox title={title3} />
          <View style={{ marginBottom: 10, opacity: 0.3}}>
            <Line />
          </View>
          <MyCheckBox title={title4} />
        </View>
      </Modalize>
    </>
  );
}
