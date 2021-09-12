import React, {useContext} from 'react'

import {useNavigation} from '@react-navigation/native'
import {GlobalContext} from '../../context/Provider'

import {LOGIN,MESSAGE_MENU,PROFILE} from '../../constants/screenNames'
import {ADMIN_CHAT_SCREEN_TITLE} from '../../constants/titles'

import {Container,HomeHeader,AdminMessageHeader} from '../../components'

const AdminChatScreen =()=>{
    const { authState,userPresent} =useContext(GlobalContext)
    const {navigate} = useNavigation()
    const onLoginBackPress = () => {navigate(LOGIN)}
    const onMessageBackPress = () => {navigate(MESSAGE_MENU)}
    const onProfileBackPress = () => {navigate(PROFILE)}
    return(
        <Container>
         {
         userPresent?
         <HomeHeader title={ADMIN_CHAT_SCREEN_TITLE} onBackPress={onMessageBackPress}  />
         :
         userPresent===false?
         <HomeHeader title={ADMIN_CHAT_SCREEN_TITLE} onBackPress={onProfileBackPress}  />
         :
         <AdminMessageHeader title={ADMIN_CHAT_SCREEN_TITLE} onBackPress={onLoginBackPress} 
         />
         }
        </Container>
    )
}
export default AdminChatScreen