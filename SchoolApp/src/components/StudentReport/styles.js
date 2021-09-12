import {StyleSheet} from 'react-native';

import colors from '../../assets/theme/colors'
import {MAX_WIDTH,MAX_HEIGHT} from '../../constants/General'

export default StyleSheet.create({
    container:{
        backgroundColor:colors.main,
        width:MAX_WIDTH,
        height:(MAX_HEIGHT/5),
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        padding:3
    },
    textView:{
        flex:1, 
        padding: 5,
        },
    studentIdText:
    {
        color:colors.lightBackground, 
        fontWeight: '700', 
        fontSize:18
        },
    nameText:
        {
            color:colors.lightBackground, 
            fontSize:20, 
            fontWeight:'bold'
            },
    levelText:
    {
        fontSize:15, 
        color:colors.lightBackground, 
        fontWeight:'700'
    },
    rankText:{fontSize:15, color:colors.lightBackground,}

})