import React from 'react'

import {useNavigation} from '@react-navigation/native'

import {Container,HomeHeader} from '../../components'

import {PROFILE} from '../../constants/screenNames'
import {SPORTS_SCREEN_TITLE} from '../../constants/titles'

const SportsScreen =()=>{
    const {navigate} = useNavigation()
    const onBackPress = () => {navigate(PROFILE)}
    return( 
      <Container>
      <HomeHeader title={SPORTS_SCREEN_TITLE}  onBackPress={onBackPress} />
      </Container>
    )
}
export default SportsScreen 