import React, {useContext} from 'react'
import {Text, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import {GlobalContext} from '../../context/Provider'

import {HOME} from '../../constants/screenNames'
import {ABOUT_US_SCREEN_TITLE} from '../../constants/titles'

import {Container,HomeHeader,ProfileHeader} from '../../components'

const AboutScreen =({navigation})=>{
     const { authState,authDispatch} =useContext(GlobalContext)
      const {navigate} = useNavigation()
      const onBackPress = () => {navigate(HOME)}
      const onHumburgerPress = () => {navigation.toggleDrawer()}
    return( 
      <Container>
       {
         authState.isLoggedIn?
         <ProfileHeader title={ABOUT_US_SCREEN_TITLE} onHumburgerPress={onHumburgerPress} />
         :
         <HomeHeader title={ABOUT_US_SCREEN_TITLE} onBackPress={onBackPress} 
         />
         }
      </Container>
    )
}
export default AboutScreen 