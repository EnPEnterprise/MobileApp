import React from 'react'
import {View,Text,TouchableOpacity, Image} from 'react-native'

import styles from './styles'

import {ICON} from '../../constants/images'

const ReportCardRow =({subject,onIconPress, classAverage, studentMark, symbol, iconSource})=>{
    return(
        <View style={styles.tableHeaderCotainer}>

        <View style={styles.tablecolumn}>
        <Text style={styles.columnText}>{subject}</Text>
        </View>

        <View style={styles.tablecolumn}>
        <Text style={styles.columnText}>{classAverage}</Text>
        </View>

        <View style={styles.tablecolumn}>
        <Text style={styles.columnText}>{studentMark}</Text>
        </View>
        

        <View style={styles.tablecolumn}>
        <Text style={styles.columnText}>{symbol}</Text>
        </View>
        
        <View style={styles.iconView}>
        <TouchableOpacity onPress={onIconPress}>
           <Image
           source={iconSource}
           resizeMode='contain'
           style={styles.image}
           />
        </TouchableOpacity>
        </View>
        </View>
    )

}

export default ReportCardRow


