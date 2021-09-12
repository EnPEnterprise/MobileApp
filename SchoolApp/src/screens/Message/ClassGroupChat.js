import React from 'react'
import {View, Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import {MESSAGE_MENU} from '../../constants/screenNames'
import {CLASS_GROUP_CHAT_SCREEN_TITLE} from '../../constants/titles'

import {Container,HomeHeader} from '../../components'


const ClassGroupChatScreen =()=>{
    
    const {navigate} = useNavigation()
    const onBackPress = () => {navigate(MESSAGE_MENU)}
    return(
     <Container>
        <HomeHeader title={CLASS_GROUP_CHAT_SCREEN_TITLE} 
        onBackPress={onBackPress} 
        />
    </Container>
    )
}
export default ClassGroupChatScreen

