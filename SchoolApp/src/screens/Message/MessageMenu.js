import React from 'react'
import {Text, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import {Container,ProfileHeader, IconButton, MessageAccordion} from '../../components'

import {MESSAGE_MENU_SCREEN_TITLE} from '../../constants/titles'
import {ADMIN_CHAT,ACCOUNTS_CHAT, TEACHER_CHAT, CLASS_GROUP_CHAT} from '../../constants/screenNames'

import {ICON} from '../../constants/images'

import { MessageAccordionData } from '../../data'

import {MAX_WIDTH, MAX_HEIGHT} from '../../constants/General'

const MessageMenuScreen  =({navigation})=>{
  navigation.setOptions({ tabBarVisible: false })
  const {navigate} = useNavigation()

 const onHumburgerPress = () => {navigation.toggleDrawer()}
 const onClassGroupPress = () => {navigate(CLASS_GROUP_CHAT)}
 const onTeacherPress = () => {navigate(TEACHER_CHAT)}
 const onAccountsPress = () => {navigate(ACCOUNTS_CHAT)}
 const onAdminPress = () => {navigate(ADMIN_CHAT)}
 
    return( 
      <Container>
       <ProfileHeader onHumburgerPress={onHumburgerPress} title={MESSAGE_MENU_SCREEN_TITLE}/>
       
       <IconButton 
       sms='150'
       title='Class Group Messages'
       source={ICON.GROUP_MESSAGE_ICON}
       onPress={onClassGroupPress}
       />
      <IconButton 
       sms='10'
       title='Teacher Chat'
       source={ICON.TEACHER_MESSAGE_ICON}
       onPress={onTeacherPress }
       />

       <IconButton 
       title='Accounts Messages'
       source={ICON.ACCOUNTS_MESSAGE_ICON}
       onPress={onAccountsPress}
       />
        <IconButton 
       sms='1'
       title='Admin Messages'
       source={ICON.ADMIN_MESSAGE_ICON}
       onPress={onAdminPress}
       />
       <MessageAccordion 
       MessageAccordionData={MessageAccordionData}
       />
       <View style={{width:'100%', height:50}}/>
      </Container>
    )
}
export default MessageMenuScreen 