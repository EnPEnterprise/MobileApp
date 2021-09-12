import React from 'react';
import { View,Image} from 'react-native';

import styles from './styles'

import {SCHOOL_LOGO, STAFF_ON_DUTY, STUDENT_PROFILE, DRAWER_LOGO,STUDENT_DETAILS} from '../../constants/titles'

const CircleContainer =({source, title, style }) => {
    return(
        <View style={[styles.container, style]}>
        <Image source={source} resizeMode='contain' style={[
            title===SCHOOL_LOGO ?styles.schoolLogoImage:undefined,
            title===STAFF_ON_DUTY ?styles.staffOnDutyImage:undefined,
            title===STUDENT_PROFILE ?styles.profileHeaderImage:undefined,
            title===DRAWER_LOGO ?styles.drawerImage:undefined,
            title===STUDENT_DETAILS ?styles.studentPic:undefined,
            ]} />
        </View>
    )
}
export default CircleContainer