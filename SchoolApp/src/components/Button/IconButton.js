import React from 'react'
import {Text,View,TouchableOpacity,ImageBackground} from 'react-native'

import styles from './styles'

import colors from '../../assets/theme/colors';

import {MAX_WIDTH, MAX_HEIGHT} from '../../constants/General'

const IconButton =({onPress,source,title,sms})=>{
    return(
        <TouchableOpacity onPress={onPress}>
        <View style={styles.iconButtonMainContainer}>
        <View style={styles.iconButtonContainer}>
         <View style={styles.iconImageView}>
        <ImageBackground
        source={source}
        resizeMode='contain'
        style={styles.iconImage}
        >
        {
        sms>0?<View style={styles.messageIndicatorCircle}>
        <Text style={styles.messageIndicatorText}>{sms}</Text>
        </View>:null
        }

        
        </ImageBackground>
        </View>
        <View style={styles.iconTitle}>
        <Text style={styles.iconButtonText}>{title}</Text>
        </View>

        </View>
        </View>
        </TouchableOpacity>
    )
}

export default IconButton