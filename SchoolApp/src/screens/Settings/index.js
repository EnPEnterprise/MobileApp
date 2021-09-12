import React from 'react'
import {Text, View} from 'react-native'

import {Container,ProfileHeader} from '../../components'

import {SETTINGS_SCREEN_TITLE} from '../../constants/titles'

const SettingsScreen =({navigation})=>{
  const onHumburgerPress = () => {navigation.toggleDrawer()}
    return( 
      <Container>
       <ProfileHeader onHumburgerPress={onHumburgerPress} title= {SETTINGS_SCREEN_TITLE}/>
      </Container>
    )
}
export default SettingsScreen 