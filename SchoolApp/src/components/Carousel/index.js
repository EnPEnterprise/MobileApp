import React,{useRef, useState} from 'react'
import {View, Animated, Image } from 'react-native'

import useInterval from '../../helpers/useInterval'

import styles from './styles'

import {MAX_WIDTH} from '../../constants/General'

const Carousel = ({images}) => {
    const animation = useRef ( new Animated.Value(0));
    const [currentImage, setCurrentImage]= useState(0);
    useInterval(()=> handleAnimation(),2500);

    const handleAnimation = () =>{

     let newCurrentImage = currentImage + 1;
     if(newCurrentImage >= images.length){
         newCurrentImage=0;
     }

     Animated.spring(animation.current,{
         toValue: -(MAX_WIDTH*newCurrentImage),
         useNativeDriver: true,
     }).start();

     setCurrentImage(newCurrentImage);
    }
        return(
            <React.Fragment>
            <View>
            <Animated.View style={[styles.container,{
                transform: [{ translateX: animation.current}]
            }]}> 
            {images.map((item, index) => (
            <Image key={item.id} source ={item.pic } style={styles.image}/>
            ))}
            </Animated.View>
            <View style={styles.indicatorContainer}>
            {images.map((item, index) => (
                <View 
                key={`${item}_${index}`}  
                style={[
                    styles.indicator,
                    index=== currentImage ? styles.activeIndicator: undefined,
                    ]}/>
            ))}
            </View>
            </View>
             </React.Fragment>
        )

}


export default Carousel;