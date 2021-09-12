import React from 'react'
import {View,Text} from 'react-native'

import styles from './styles'

import CircleContainer from '../CircleContainer'
import {CustomButton} from '../Button'

import {IMAGE} from '../../constants/images'
import {STUDENT_DETAILS, VIEW_REPORTS } from '../../constants/titles'

const StudentReport =({name,studentID,level,rank,avatar})=>{
    return(
        <View style={styles.container}>
        <View>
          <CircleContainer title={STUDENT_DETAILS} source={avatar} />
         </View>

         <View style={styles.textView}>
            
         <View style={{flexDirection:'row'}}> 
            <Text style={styles.nameText}>Name : </Text> 
            <Text style={styles.nameText} >{name}</Text> 
          </View>
         
         <View style={{flexDirection:'row'}}> 
            <Text style={styles.studentIdText}>Student ID : </Text>
            <Text style={styles.studentIdText}>{studentID}</Text>
         </View>

         <View style={{flexDirection:'row'}}> 
            <Text style={styles.levelText}>Level : </Text>
            <Text style={styles.levelText}>{level}</Text>
         </View>

         <View style={{flexDirection:'row'}}> 
            <Text style={styles.rankText}>Rank : </Text>
            <Text style={styles.rankText} >{rank}</Text>
         </View>

         </View>
         
        </View>
    )
}
export default StudentReport