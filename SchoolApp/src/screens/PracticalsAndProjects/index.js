import React from 'react'

import {useNavigation} from '@react-navigation/native'

import {Container,HomeHeader} from '../../components'

import {PROFILE} from '../../constants/screenNames'
import {PRACTICALS_AND_PROJECTS_SCREEN_TITLE} from '../../constants/titles'

const PracticalsAndProjectsScreen =()=>{
    const {navigate} = useNavigation()
    const onBackPress = () => {navigate(PROFILE)}
    return( 
      <Container>
        <HomeHeader title={PRACTICALS_AND_PROJECTS_SCREEN_TITLE} onBackPress={onBackPress} />
      </Container>
    )
}
export default PracticalsAndProjectsScreen 