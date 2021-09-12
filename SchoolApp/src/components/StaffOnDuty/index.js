import React from 'react'
import {Text, TouchableOpacity } from 'react-native'

import CircleContainer from '../CircleContainer'

import styles from './styles'

import {IMAGE} from '../../constants/images'
import {STAFF_ON_DUTY } from '../../constants/titles'

const StaffOnDuty =({onPress})=>{
    return(
        <TouchableOpacity onPress={onPress}>
        <CircleContainer title={STAFF_ON_DUTY}source={IMAGE.STAFF_PIC}/>
        <Text style={styles.text}>Staff On Duty</Text>
        </TouchableOpacity>
    )
}

export default StaffOnDuty;