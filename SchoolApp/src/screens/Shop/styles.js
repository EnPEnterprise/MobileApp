import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

import {MAX_WIDTH, MAX_HEIGHT} from '../../constants/General'

export default StyleSheet.create({
    verticalSeparator:
    {
        width:2, 
        height:MAX_WIDTH/2, 
        backgroundColor:colors.lightMain
        },
    horizontalSeparator:
    {
        width:MAX_WIDTH, 
        height:2, 
        backgroundColor:colors.lightMain
    },
    clickableView:{
        flexDirection:'row'
        }

})