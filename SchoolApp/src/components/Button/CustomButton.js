import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

import {LOGIN,VIEW_REPORTS} from '../../constants/titles'

import styles from './styles'

const CustomButton =({title, onPress,Custom}) => {

        return (
 <TouchableOpacity onPress={onPress}>
   <View style={[
           styles.normalButton,
           title=== LOGIN ? styles.loginButton:
           title=== VIEW_REPORTS ? styles.reportButton:
           title=== 'Homework' ? styles.homeworkButton: 
           title=== 'View Class requirements' ? styles.requirementsButton:
           title=== 'Contact Admin' ? styles.homeworkButton:
           undefined

           ]}>
     <Text style={[
             styles.normalButtonText,
             title=== LOGIN ? styles.loginButtonText:undefined
             ]}>{title}</Text>
     </View>
 </TouchableOpacity>
        )
}

export default CustomButton;