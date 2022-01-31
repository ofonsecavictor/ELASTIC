import React from "react";
import {styles} from "./styles"
import {View, Text,} from "react-native";
import { useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function WorkoutList (){


  const count = useSelector(state => state.counter)
  const max = useSelector(state => state.max)
  const weigth = useSelector(state => state.weigth)


    return (
        <View style={styles.container}>
            <View style={styles.series}>
            <MaterialCommunityIcons 
              name='flag'
              type='ionicon'
              color={'#fc034e'}
                size={30}
            />
            <Text>SERIES
            </Text >
            <Text  style={styles.title}>{count}/1
            </Text>
            </View>

            <View style={styles.series}>
            <MaterialCommunityIcons 
              name='refresh'
              type='ionicon'
              color={'#fc034e'}
                size={30}
            />
            <Text>REPETIÇÕES
            </Text>
            <Text style={styles.title}>{count}/1
            </Text>
            </View>

            <View style={styles.series}>
            <MaterialCommunityIcons style={styles.backbutton}
              name='dumbbell'
              type='ionicon'
              color={'#fc034e'}
                size={30}
            />
            <Text style={styles.title}>PESO
            </Text>
            <Text style={styles.title}>{weigth} KG
            </Text>
            </View>

            <View style={styles.series}>
            <MaterialCommunityIcons style={styles.backbutton}
              name='yoga'
              type='ionicon'
              color={'#fc034e'}
                size={30}
            />
            <Text style={styles.title}>MÁXIMO
            </Text>
            <Text style={styles.title}>{max} KG
            </Text>
            </View>
        </View>
    )
}