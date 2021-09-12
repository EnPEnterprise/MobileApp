import React from 'react'
import {Text, View} from 'react-native'

import {Container,ProfileHeader} from '../../components'

import {ONLINE_SCREEN_TITLE} from '../../constants/titles'

const OnlineScreen =({navigation})=>{
     const onHumburgerPress = () => {navigation.toggleDrawer()}
    return( 
      <Container>
      <ProfileHeader onHumburgerPress={onHumburgerPress} title={ONLINE_SCREEN_TITLE}/>
      </Container>
    )
}
export default OnlineScreen 