import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'

import styles from './styles'

const ReportHeaderContainer =()=>{
    return(
        <View style={styles.tableHeaderCotainer}>

        <View style={styles.tablecolumn}>
        <Text style={styles.columnText}>subject</Text>
        </View>

        <View style={styles.tablecolumn}>
        <Text style={styles.columnText}>class Average</Text>
        </View>

        <View style={styles.tablecolumn}>
        <Text style={styles.columnText}>Student Mark</Text>
        </View>
        

        <View style={styles.tablecolumn}>
        <Text style={styles.columnText}>Student Symbol</Text>
        </View>
        

        </View>
    )

}

export default ReportHeaderContainer


