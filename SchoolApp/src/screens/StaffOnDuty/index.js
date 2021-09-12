import React from 'react'
import {Text} from 'react-native'

import {useNavigation} from '@react-navigation/native'

import {Container,HomeHeader} from '../../components'

import {HOME} from '../../constants/screenNames'
import {STAFF_SCREEN_TITLE} from '../../constants/titles'

const StaffOnDutyScreen =()=>{
    const {navigate} = useNavigation()
    const onBackPress = () => {navigate(HOME)}
    return(
        <Container>
        <HomeHeader title={STAFF_SCREEN_TITLE} onBackPress={onBackPress} />
        <Text>Should Appear as a business card sort of </Text>
        </Container>
    )
}
export default StaffOnDutyScreen