import React from 'react'
import {View,Image,TouchableOpacity} from 'react-native'

import {MAX_WIDTH, MAX_HEIGHT} from '../../constants/General'
import {IMAGE} from '../../constants/images'
import colors from '../../assets/theme/colors';

const MessageIcon =({onPress})=>{
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={{marginLeft:MAX_WIDTH-115, zindex:1, marginTop:MAX_HEIGHT-160,width:100, height:100, borderRadius:50, backgroundColor:colors.lightMain, justifyContent:'center', alignItems:'center'}}>
         <Image 
         source={IMAGE.GREEN_MESSAGE_ICON}
         resizeMode='contain'
         style={{width:70, height:70}}
         />
        </View>
        </TouchableOpacity>
    )
}
export default MessageIcon