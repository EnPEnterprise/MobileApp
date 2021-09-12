import React from 'react'

import {useNavigation} from '@react-navigation/native'

import {Container,HomeHeader} from '../../components'

import {ENROL_SCREEN_TITLE} from '../../constants/titles'

const EnrollScreen =()=>{
    return(
        <Container>
        <HomeHeader title={ENROL_SCREEN_TITLE} />
        </Container>
    )
}
export default EnrollScreen