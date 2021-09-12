import React from 'react'

import {useNavigation} from '@react-navigation/native'

import {Container,HomeHeader} from '../../components'

import {PROFILE} from '../../constants/screenNames'
import {CLUBS_SCREEN_TITLE} from '../../constants/titles'

const ClubsScreen =()=>{
    const {navigate} = useNavigation()
    const onBackPress = () => {navigate(PROFILE)}
    return( 
      <Container>
      <HomeHeader title={CLUBS_SCREEN_TITLE} onBackPress={onBackPress} />
      </Container>
    )
}
export default ClubsScreen 