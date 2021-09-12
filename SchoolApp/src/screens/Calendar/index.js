import React, {useContext}  from 'react'
import {Text, View } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import {GlobalContext} from '../../context/Provider'

import {Container,HomeHeader,ProfileHeader,CalendarAccordion} from '../../components'

import {HOME} from '../../constants/screenNames'
import {CALENDAR_SCREEN_TITLE} from '../../constants/titles'

import { CalendarData} from '../../data'

const CalendarScreen =({navigation})=>{
      const {user, adminAccess} =useContext(GlobalContext)
      const {navigate} = useNavigation()
      const onBackPress = () => {navigate(HOME)}
      const onHumburgerPress = () => {navigation.toggleDrawer()}
    return(
        <Container>
        {
         (user|| adminAccess)?
         <ProfileHeader title={CALENDAR_SCREEN_TITLE} onHumburgerPress={onHumburgerPress} />
         :
         <HomeHeader title={CALENDAR_SCREEN_TITLE} onBackPress={onBackPress} 
         />
         }
         <View style={{width:'100%', height:20}}/>
         <CalendarAccordion 
         key={CalendarData.id}
         CalendarData={CalendarData}
         />
        </Container>
    )
}
export default CalendarScreen