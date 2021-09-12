import {StyleSheet} from 'react-native';

import colors from '../../assets/theme/colors'
import {MAX_WIDTH} from '../../constants/General'

export default StyleSheet.create({
    container:{
        backgroundColor:colors.lightBackground,
        width:MAX_WIDTH,
        height:25,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        flexWrap:'wrap',
    },
    text:{
        color:colors.red,
        textAlign:'center',
        fontSize: 15,
        fontWeight:'bold',
    }

})