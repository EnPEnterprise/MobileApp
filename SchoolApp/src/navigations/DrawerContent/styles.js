import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

import {MAX_WIDTH, MAX_HEIGHT} from '../../constants/General'

export default StyleSheet.create({
    headerImage:
    {
        backgroundColor:colors.main,
        height:(MAX_HEIGHT/3.5),
        justifyContent:'center', 
        alignItems:'center'
        },
    iconImage:
    {
        width:40, 
        height:40, 
        borderRadius:20
    }
})