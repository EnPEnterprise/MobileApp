import React from 'react'
import {Text, View} from 'react-native'

import {Container,ProfileHeader} from '../../components'

import {SCHOOL_DOC_SCREEN_TITLE} from '../../constants/titles'

const SchoolDocScreen =({navigation})=>{
   const onHumburgerPress = () => {navigation.toggleDrawer()}
    return( 
      <Container>
       <ProfileHeader onHumburgerPress={onHumburgerPress} title={SCHOOL_DOC_SCREEN_TITLE}/>
      </Container>
    )
}
export default SchoolDocScreen 