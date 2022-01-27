import React  from "react";
import {View, Text,} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from "./styles"

export function WorkoutList () {
    return (
        <View style={styles.container}>
            <View style={{marginLeft:'auto', marginRight:'auto', marginTop: 30,}}>
            <MaterialCommunityIcons style={styles.backbutton}
              name='flag'
              type='ionicon'
              color={'#fc034e'}
                size={30}
            />
            <Text>SERIES
            </Text>
            <Text style={{textAlign:'center'}}>0/1
            </Text>
            </View>

            <View style={{marginLeft:'auto', marginRight:'auto', marginTop: 30,}}>
            <MaterialCommunityIcons style={styles.backbutton}
              name='refresh'
              type='ionicon'
              color={'#fc034e'}
                size={30}
            />
            <Text>REPETIÇÕES
            </Text>
            <Text style={{textAlign:'center'}}>0/1
            </Text>
            </View>

            <View style={{marginLeft:'auto', marginRight:'auto', marginTop: 30,}}>
            <MaterialCommunityIcons style={styles.backbutton}
              name='dumbbell'
              type='ionicon'
              color={'#fc034e'}
                size={30}
            />
            <Text style={{textAlign:'center'}}>PESO
            </Text>
            <Text style={{textAlign:'center'}}>0/1
            </Text>
            </View>

            <View style={{marginLeft:'auto', marginRight:'auto', marginTop: 30, }}>
            <MaterialCommunityIcons style={styles.backbutton}
              name='yoga'
              type='ionicon'
              color={'#fc034e'}
                size={30}
            />
            <Text style={{textAlign:'center'}}>MÁXIMO
            </Text>
            <Text style={{textAlign:'center'}}>0/1
            </Text>
            </View>
        </View>
    )
}