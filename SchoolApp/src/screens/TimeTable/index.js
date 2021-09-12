import React from 'react'
import {View, Text,TouchableOpacity} from 'react-native'

import {useNavigation} from '@react-navigation/native'

import {Container,HomeHeader,MessageIcon} from '../../components'

import {PROFILE,CONTACT} from '../../constants/screenNames'
import {TIME_TABLE_SCREEN_TITLE} from '../../constants/titles'

import {MAX_WIDTH, MAX_HEIGHT} from '../../constants/General'

const TimeTableScreen =()=>{
    const {navigate} = useNavigation()
    const onBackPress = () => {navigate(PROFILE)}
    const onMessagePress = () => {navigate(CONTACT)}
    return( 
      <Container>
      <HomeHeader title={TIME_TABLE_SCREEN_TITLE} onBackPress={onBackPress} />
     <MessageIcon onPress={onMessagePress}/>
      </Container>
    )
}
export default TimeTableScreen 