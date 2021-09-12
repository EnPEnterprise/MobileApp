import React from 'react'
import { View, Text, Image,TouchableOpacity } from 'react-native';

import styles from './styles'
import {ICON} from '../../constants/images'
import {
    ABOUT_US_SCREEN_TITLE,
     CALENDAR_SCREEN_TITLE,
      SHOP_SCREEN_TITLE,
      NEWS_SCREEN_TITLE,
      REPORT_SCREEN_TITLE
      } from '../../constants/titles'

const HomeHeader =({title, onBackPress})=>{
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
        {
        title===ABOUT_US_SCREEN_TITLE
        ?
        <Image 
        resizeMode='contain' 
        style={styles.iconImage} 
        source={ICON.ACTIVE_ABOUT_ICON} 
        />
        :
        title===CALENDAR_SCREEN_TITLE
        ?
        <Image 
        resizeMode='contain' 
        style={styles.iconImage} 
        source={ICON.ACTIVE_CALENDAR_ICON} 
        />
        : 
        title===SHOP_SCREEN_TITLE
        ?
        <Image 
        resizeMode='contain' 
        style={styles.iconImage} 
        source={ICON.ACTIVE_SHOP_ICON} 
        />
        :
        title===NEWS_SCREEN_TITLE
        ?
        <Image 
        resizeMode='contain' 
        style={styles.iconImage} 
        source={ICON.ACTIVE_NEWS_ICON} 
        />
        :
        title===REPORT_SCREEN_TITLE
        ?
        <Image 
        resizeMode='contain' 
        style={styles.iconImage} 
        source={ICON.REPORT_ICON} 
        />
        :
        <Text>Screen Icon </Text>
        }
        </View >
        </View>
    )
}
export default HomeHeader