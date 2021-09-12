import React from 'react'
import { View, Text, Image,TouchableOpacity } from 'react-native';

import styles from './styles'
import {ICON} from '../../constants/images'

const AdminMessageHeader =({title, onBackPress})=>{
    return(
        <View style={styles.container}>
         <View style={styles.iconView}>
      <TouchableOpacity onPress={onBackPress}>
        <Image 
        resizeMode='contain' 
        style={styles.onPressIconImage} 
        source={ICON.BACK_ICON} 
        />
         </TouchableOpacity>
         </View>
        <View style={styles.titleView}>
        <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.screenIconView}>
        <Text>Admin Icon</Text>
        </View >
        </View>
    )
}
export default AdminMessageHeader