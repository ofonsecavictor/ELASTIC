import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import * as Progress from 'react-native-progress';
import {PrimaryButton} from '../../components/Buttons';
import {useDispatch} from 'react-redux';
import {increment} from '../../redux/reducer';
import {reset} from '../../redux/reducer';
import {useSelector} from 'react-redux';

export function StrengthBar() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [selected, setSelected] = useState(0);
  const checked = useState([]);


  const dispatch = useDispatch();
  const chart = useSelector(state => state.chart);

  const workouts = [
    'SELECIONE',
    'ABDOMINAL',
    'FLEXÃO DE COTOVELO',
    'EXTENSÃO DO COTOVELO DIREITO',
    'EXTENSÃO DO COTOVELO ESQUERDO',
  ];

  function handleClick() {
    setTimerOn(!timerOn);
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
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.config}>
          <MaterialCommunityIcons
            name="cog"
            type="ionicon"
            color={'#fc034e'}
            size={30}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.chart}>
          <MaterialCommunityIcons
            name="chart-line-stacked"
            type="ionicon"
            color={'#fc034e'}
            size={30}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.progressBar}>
        <Progress.Bar
          progress={chart}
          style={{
            width: '100%',
          }}
          height={50}
          color="#fc034e"
          backgroundColor="#dedede"
          borderRadius={50}
          animationConfig={{bounciness: 5}}
        />
      </View>

      <View style={styles.timer}>
        <MaterialCommunityIcons
          name="av-timer"
          type="ionicon"
          color={'#fc034e'}
          size={30}
        />
        <Text>
          {('0' + Math.floor((time / 1000) % 60)).slice(-2)}s{' '}
          {('0' + ((time / 10) % 100)).slice(-2)}mm
        </Text>

        <TouchableOpacity
          onPress={() => {
            dispatch(reset(), setTime(0));
          }}>
          <View style={styles.reset}>
            <Text>Resetar</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.list}>
        <TouchableOpacity style={{marginLeft: 20}} onPress={handleNext}>
          <MaterialCommunityIcons
            name="chevron-left"
            type="ionicon"
            color="grey"
            size={30}
          />
        </TouchableOpacity>
        <Text style={{textAlign: 'center', alignItems: 'center'}}>
          {checked ? workouts[selected] : checked}
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
      <Text style={styles.numbers}>{[selected]} / 4</Text>
      <View style={styles.actionButtons}>
        <PrimaryButton
          style={{marginTop: 20}}
          type="ionicon"
          name="play"
          size={18}
          color="#FFF"
          onPress={() => {
            dispatch(increment()), handleClick();
          }}>
          {timerOn ? 'SALVAR' : 'INICIAR'}
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
