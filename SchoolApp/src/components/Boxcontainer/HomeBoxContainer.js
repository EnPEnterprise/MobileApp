import React from 'react';
import { View, Text, Image} from 'react-native';

import styles from './styles'
import {IMAGE} from '../../constants/images'
import {TIME, WEATHER} from '../../constants/titles'

const HomeBoxContainer =({reading, icon, comment, title}) => {
return (<View style= {[
    styles.weather,
    title===TIME? styles.time:undefined
    ]}> 
<Text style={styles.reading}>{reading}</Text>
<Image  source={
    title=== TIME? IMAGE.CLOCK_PIC:
    title=== WEATHER? IMAGE.WEATHER_PIC :
     undefined }
     style={styles.image}
     />
<Text style={styles.comment}>{comment}</Text>
</View>)
}

export default HomeBoxContainer