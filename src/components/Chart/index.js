import React from 'react'
import {View} from 'react-native';
import {StackedBarChart} from 'react-native-svg-charts'

export function StrengthChart () {
  const data = [
    {
        month: new Date(2022, 27, 1),
        apples: 3320,
        bananas: 480,
        cherries: 640,
        dates: 400,
    },
]

const colors = ['#fc034e', 'grey', 'grey', 'grey']
const keys = ['apples', 'bananas', 'cherries', 'dates']

  return(

    <StackedBarChart
    style={{ height: 120, width:'90%', alignSelf:'center', borderRadius:10, }}
    horizontal
    keys={keys}
    colors={colors}
    data={data}
    showGrid={false}
    contentInset={{ top: 30, bottom: 30 }}
/>


  )
}
       
