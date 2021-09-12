import React,{useRef, useState} from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground,Animated} from 'react-native';

import colors from '../../assets/theme/colors';
import {BACKGROUND} from '../../constants/images'
import styles from './styles'

import {CustomButton} from '../Button'

import useInterval from '../../helpers/useInterval'

import {ANNOUNCEMENTS,UPCOMING_EVENTS,COMMUNICATION_BOOK} from '../../constants/titles'


const NoticeBoard = ({title, notice,onPress}) => {

   const animation = useRef ( new Animated.Value(0));
    const [currentNotice, setCurrentNotice]= useState(-1);
    useInterval(()=> handleAnimation(),1500);

    const handleAnimation = () =>{

     let newCurrentNotice = currentNotice + 1;
     if(newCurrentNotice >= notice.length -1){
         newCurrentNotice=-1;
     }

     Animated.spring(animation.current,{
         toValue: -(Dimensions.get('window').width*newCurrentNotice),
         useNativeDriver: true,
     }).start();

     setCurrentNotice(newCurrentNotice);
    }

    
    return(
         <React.Fragment>
        <ImageBackground  
        resizeMode='cover'
        source={    
    title===ANNOUNCEMENTS ? BACKGROUND.ANNOUNCEMENT_BACKGROUND:
    title===UPCOMING_EVENTS ? BACKGROUND.UPCOMING_BACKGROUND :
    title===COMMUNICATION_BOOK ? BACKGROUND.COMMUNICATION_BACKGROUND :
     undefined} style={styles.imagebackground}>
     <Text style={styles.title}>{title}</Text>
         <Animated.View style={[styles.container,{
                transform: [{ translateX: animation.current}]
            }]}> 
            {notice.map((item, index) => (
            <View key={item.id} style={styles.viewBox}>
            <Text style={styles.notice}>{item.notice}</Text>
            </View>
            ))}
      </Animated.View>
      <View style={{justifyContent:'center', alignItems:'center', flex:0.8}}>
      {title===COMMUNICATION_BOOK?<CustomButton title='View Class requirements' onPress={onPress}/>:undefined}
      </View>
        </ImageBackground >
         </React.Fragment>
    )
}

export default NoticeBoard;