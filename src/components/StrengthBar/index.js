import React from 'react';
import {View, Text, TouchableOpacity} from'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles}from './styles'

export function StrengthBar() {
    return (
        <View>
            <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
            <TouchableOpacity style={{marginLeft:35, marginRight:'auto', marginTop: 10,}}>
            <MaterialCommunityIcons
              name='cog'
              type='ionicon'
              color={'#fc034e'}
                size={30}
            />
            </TouchableOpacity>

            <TouchableOpacity style={{marginLeft:'auto', marginRight:35, marginTop: 10,}}>
            <MaterialCommunityIcons
              name='chart-line-stacked'
              type='ionicon'
              color={'#fc034e'}
                size={30}
            />
            </TouchableOpacity>
            
            </View>
            <View
  style={{
    borderBottomColor: 'grey',
    borderBottomWidth: 50,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 30,
  }}
/>
<View style={{flexDirection: 'row', justifyContent:'space-between', borderWidth: 1, height: 50, marginLeft: 20, marginRight: 20, borderRadius: 30, alignItems: 'center', borderColor: 'grey'}}>
<TouchableOpacity style={{marginLeft: 20}}>
<MaterialCommunityIcons
              name='chevron-left'
              type='ionicon'
              color='grey'
                size={30}
            />
            </TouchableOpacity>
    <Text style={{textAlign: 'center', alignItems: 'center'}}> Extensão do cotovelo esquerdo</Text>
    <TouchableOpacity style={{marginRight: 20}}>
<MaterialCommunityIcons
              name='chevron-right'
              type='ionicon'
              color='grey'
                size={30}
            />
            </TouchableOpacity>
    

</View>
        </View>
    )
}