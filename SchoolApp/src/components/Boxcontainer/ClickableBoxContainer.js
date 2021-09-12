import React from 'react'
import {View, Text,TouchableOpacity,Image } from 'react-native'

import styles from './styles'

const ClickableBoxContainer =({onPress,title,source})=>{
    return(
        
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container} >
        <View style={{flex:2.5}}>
         <Image resizeMode='contain' 
         style={[
             title==='Uniforms Shop'?styles.clickableUniformIcon:
             styles.clickableIcon
             ]} 
        source={source}
        />
        </View>
        <View style={[
            title==='Projects And Practicals'? styles.textProjectView:
            styles.textView
            ]}>
        <Text style={styles.clickableText}>{title}</Text>
        </View>
        </View>
        </TouchableOpacity>
    )
}
 export default ClickableBoxContainer