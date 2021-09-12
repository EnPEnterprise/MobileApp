import React from 'react'

import {useNavigation} from '@react-navigation/native'

import {Container,HomeHeader} from '../../components'

import {PROFILE} from '../../constants/screenNames'
import {SUBJECTS_SCREEN_TITLE} from '../../constants/titles'

const SubjectsScreen =()=>{
    const {navigate} = useNavigation()
    const onBackPress = () => {navigate(PROFILE)}
    return( 
      <Container>
      <HomeHeader title={SUBJECTS_SCREEN_TITLE}onBackPress={onBackPress} />
      </Container>
    )
}
export default SubjectsScreen 