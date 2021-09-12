import React from 'react'
import {Text, View} from 'react-native'

import {Container,ProfileHeader} from '../../components'
import {TRACK_SCREEN_TITLE} from '../../constants/titles'

const TrackScreen =({navigation})=>{
     const onHumburgerPress = () => {navigation.toggleDrawer()}
    return( 
      <Container>
       <ProfileHeader onHumburgerPress={onHumburgerPress} title={TRACK_SCREEN_TITLE} />
      </Container>
    )
}
export default TrackScreen 