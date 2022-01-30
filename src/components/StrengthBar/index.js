import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import {StrengthChart} from '../Chart';
import {PrimaryButton} from '../../components/Buttons';
import { useDispatch } from 'react-redux';
import {increment} from '../../redux/reducer'
import {reset} from '../../redux/reducer'

export function StrengthBar() {
  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');
  const [counter, setCounter] = useState(0);
  const [selected, setSelected] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch()
  
const workouts = [
'SELECIONE',
'ABDOMINAL',
'FLEXÃO DE COTOVELO',
'EXTENSÃO DO COTOVELO DIREITO',
'EXTENSÃO DO COTOVELO ESQUERDO',
  ];

  function handleClick() {
    setIsActive(!isActive);
  }


  const handleNext = () => {
    setSelected(prev => {
      if (prev === workouts.length - 1) {
        return 1;
      } else {
        return prev + 1;
      }
    });
  };


    useEffect(() => {
      let intervalId;
  
      if (isActive) {
        intervalId = setInterval(() => {
          const secondCounter = counter % 60;
          const minuteCounter = Math.floor(counter / 60);
          const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
          const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;
  
          setSecond(computedSecond);
          setMinute(computedMinute);
  
          setCounter(counter => counter + 1);
        }, 1000)
      }
  
      return () => clearInterval(intervalId);
    }, [isActive, counter])


  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%',}}>
        <TouchableOpacity
          style={{marginLeft: 35, marginRight: 'auto', marginTop: 10}}>
          <MaterialCommunityIcons
            name="cog"
            type="ionicon"
            color={'#fc034e'}
            size={30}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{marginLeft: 'auto', marginRight: 35, marginTop: 10}}>
          <MaterialCommunityIcons
            name="chart-line-stacked"
            type="ionicon"
            color={'#fc034e'}
            size={30}
          />
        </TouchableOpacity>
      </View>
      <View>
      <StrengthChart/>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 50,}}>
        <MaterialCommunityIcons
          name="av-timer"
          type="ionicon"
          color={'#fc034e'}
          size={30}
        />
        <Text> {minute}m {second}s </Text>

        <TouchableOpacity onPress={() => dispatch(reset(), setCounter(0),)} style={{marginLeft: 10,}}>
          <View style={{borderWidth:1, borderColor:'#fc034e', borderRadius: 5, width:55, height:25, textAlign: 'center', alignItems: 'center'}}>
        <Text>Resetar</Text>
        </View>
        </TouchableOpacity>
      </View>


      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderWidth: 1,
          height: 50,
          marginLeft: 20,
          marginRight: 20,
          borderRadius: 30,
          marginTop: 10,
          alignItems: 'center',
          borderColor: 'grey',
        }}>
        <TouchableOpacity style={{marginLeft: 20}} onPress={handleNext}>
          <MaterialCommunityIcons
            name="chevron-left"
            type="ionicon"
            color="grey"
            size={30}
          />
        </TouchableOpacity>
        <Text  style={{textAlign: 'center', alignItems: 'center'}}>      
        {workouts[selected]}
        </Text>

        <TouchableOpacity style={{marginRight: 20}} onPress={handleNext}>
          <MaterialCommunityIcons 
            name="chevron-right"
            type="ionicon"
            color="grey"
            size={30}
          />
        </TouchableOpacity>

      </View>
      <Text  style={{textAlign: 'center', alignItems: 'center', marginTop: 5,}}>      
        {[selected]} / 4
        </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 100,
        }}>
        <PrimaryButton  style={{marginTop: 20}}
          type="ionicon"
          name="play"
          size={18}
          color="#FFF"

          onPress={dispatch(increment()), handleClick}>
          {isActive ? "PARAR" : "INICIAR"}
          </PrimaryButton>
        <PrimaryButton
          type="ionicon"
          name="chart-bar"
          size={22}
          color="#FFF"
          title="RELATÓRIOS"
        />
      </View>
    </View>
  );
}
