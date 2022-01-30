import React from "react";
import {View, Text,} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from "./styles"
import { useSelector } from 'react-redux';

export function WorkoutList (){


  const count = useSelector(state => state.counter)
  const max = useSelector(state => state.max)
  const weigth = useSelector(state => state.weigth)
    return (
        <View style={styles.container}>
            <View style={{marginLeft:'auto', marginRight:'auto', marginTop: 30, alignItems: 'center'}}>
            <MaterialCommunityIcons style={styles.backbutton}
              name='flag'
              type='ionicon'
              color={'#fc034e'}
                size={30}
            />
            <Text>SERIES
            </Text >
            <Text  style={{textAlign:'center'}}>{count}/1
            </Text>
            </View>

            <View style={{marginLeft:'auto', marginRight:'auto', marginTop: 30, alignItems: 'center'}}>
            <MaterialCommunityIcons style={styles.backbutton}
              name='refresh'
              type='ionicon'
              color={'#fc034e'}
                size={30}
            />
            <Text>REPETIÇÕES
            </Text>
            <Text style={{textAlign:'center'}}>{count}/1
            </Text>
            </View>

            <View style={{marginLeft:'auto', marginRight:'auto', marginTop: 30, alignItems: 'center'}}>
            <MaterialCommunityIcons style={styles.backbutton}
              name='dumbbell'
              type='ionicon'
              color={'#fc034e'}
                size={30}
            />
            <Text style={{textAlign:'center'}}>PESO
            </Text>
            <Text style={{textAlign:'center'}}>{weigth} KG
            </Text>
            </View>

            <View style={{marginLeft:'auto', marginRight:'auto', marginTop: 30, alignItems: 'center'}}>
            <MaterialCommunityIcons style={styles.backbutton}
              name='yoga'
              type='ionicon'
              color={'#fc034e'}
                size={30}
            />
            <Text style={{textAlign:'center'}}>MÁXIMO
            </Text>
            <Text style={{textAlign:'center'}}>{max} KG
            </Text>
            </View>
        </View>
    )
}