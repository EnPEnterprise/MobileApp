import React,{useRef, useState, useEffect} from 'react'
import {View,Text, Animated} from 'react-native'

import {MAX_WIDTH,MAX_HEIGHT} from '../../constants/General'
import colors from '../../assets/theme/colors'

const ProgressBar =({step, steps,height,studentMark})=>{
const animatedValue = useRef(new Animated.Value(-1000)).current
const reactive = useRef(new Animated.Value(-1000)).current

const [width, setWidth] = useState(0)

useEffect(()=>{
    Animated.timing(animatedValue,{
      toValue:  reactive,
      duration:300,
      useNativeDriver:true
    }).start();
},[])

useEffect(()=>{
    reactive.setValue(-width+(width*step)/steps)
     
}, [step, width])

return(
    <>
    <Text style={{color:colors.main, marginLeft:10,}}>{studentMark}%</Text>
    <View
    onLayout={(e)=>{
        const newWidth = e.nativeEvent.layout.width
        setWidth(newWidth)

    }}
     style={{
       height,
       backgroundColor: colors.lightMain,
       borderRadius:height,
       overflow:'hidden'
    }}
    >
    <Animated.View 
    style={{
        height,
        width:'100%',
        borderRadius:height,
        backgroundColor:colors.main,
        position:'absolute',
        left:0,
        top:0,
        transform:[{
            translateX:animatedValue 
        }]

    }}
    />
    </View>
    </>
)
}
export default ProgressBar
