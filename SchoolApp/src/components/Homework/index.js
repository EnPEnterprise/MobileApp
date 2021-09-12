import React from 'react'
import {View,Text, ImageBackground,} from 'react-native'

import styles from './styles'
import colors from '../../assets/theme/colors'

import {CustomButton} from '../Button'

import {BACKGROUND} from '../../constants/images'

const Homework =({onPress})=>{
    return(
        <View style={styles.container}>
        <ImageBackground
        resizeMode='cover'
        style={styles.imagebackground}
        source={BACKGROUND.HOMEWORK_BACKGROUND}
        >
        <View style={{flex:0.5, width:'100%',alignItems:'center', justifyContent:'center' }}>
        <Text style={{color:colors.background, fontWeight:'bold', fontSize:25}}>Homework</Text>
        </View>
        <View style={{flex:2, width:'100%',alignItems:'center', justifyContent:'center'}} >
        <Text style={{color:colors.background, fontSize: 20, textAlign:'center'}}>Maths Homework to be Handed in Tomorrow</Text>
        <View style={{width:'100%', height:10}}/>
        <CustomButton title='Homework' onPress={onPress}/>
        </View>
        </ImageBackground>

        </View>
    )
}
export default Homework