import React from 'react'
import { View, Text, Image,TouchableOpacity } from 'react-native';

import CircleContainer from '../CircleContainer'
import {ICON,IMAGE} from '../../constants/images'
import styles from './styles'

import {
  MESSAGE_MENU_SCREEN_TITLE,
  STUDENT_PROFILE,
  PROFILE_SCREEN_TITLE, 
  CALENDAR_SCREEN_TITLE, 
  SHOP_SCREEN_TITLE,
  NEWS_SCREEN_TITLE,
  ACCOUNTS_SCREEN_TITLE
  } from '../../constants/titles'


const ProfileHeader =({title,onProfilePress,onHumburgerPress})=>{
    return(
       <View style={styles.container}>
         <View style={styles.iconView}>
      <TouchableOpacity onPress={onHumburgerPress}>
        <Image 
        resizeMode='contain' 
        style={styles.onPressIconImage} 
        source={ICON.HUMBURGER_ICON} 
        />
         </TouchableOpacity>
        </View>
        <View style={styles.titleView}>
        <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.screenIconView}>
        {
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
        title===MESSAGE_MENU_SCREEN_TITLE
        ?
        <Image 
        resizeMode='contain' 
        style={styles.iconImage} 
        source={ICON.ACTIVE_CONTACT_ICON} 
        />
        :
        title===ACCOUNTS_SCREEN_TITLE
        ?
        <Image 
        resizeMode='contain' 
        style={styles.iconImage} 
        source={ICON.ACCOUNTS_HEAER_ICON} 
        />
        :
        title===PROFILE_SCREEN_TITLE?
        <TouchableOpacity onPress={onProfilePress}>
          <CircleContainer 
          title={STUDENT_PROFILE} 
          source={IMAGE.STUDENT_PIC}
          />
        </TouchableOpacity>
        :
        <Text>Screen Icon </Text>
        }
        </View >
        </View>
    )
}
export default ProfileHeader