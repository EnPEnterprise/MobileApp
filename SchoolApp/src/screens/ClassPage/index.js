import React from 'react'
import {Text, View} from 'react-native'

import {Container,ProfileHeader} from '../../components'

import {CLASS_PAGE_SCREEN_TITLE} from '../../constants/titles'

const ClassPageScreen =({navigation})=>{
const onHumburgerPress = () => {navigation.toggleDrawer()}
    return( 
      <Container>
      <ProfileHeader onHumburgerPress={onHumburgerPress} title={CLASS_PAGE_SCREEN_TITLE}/>
      </Container>
    )
}
export default ClassPageScreen 