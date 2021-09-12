import {StyleSheet} from 'react-native';

import colors from '../../assets/theme/colors'
import {MAX_WIDTH,MAX_HEIGHT} from '../../constants/General'

export default StyleSheet.create({
    container:{
        backgroundColor:colors.lightMain,
        width:MAX_WIDTH,
        height:(MAX_HEIGHT/5),
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        padding:3
    },
    presentStatus:{
        position:'absolute', 
        top:0, 
        bottom:0, 
        right:0, 
        left:85,
        backgroundColor:colors.main, 
        width:30, 
        height:30, 
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center'
        },
    absentStatus:{
     position:'absolute', 
        top:0, 
        bottom:0, 
        right:0, 
        left:85,
        backgroundColor:colors.red, 
        width:30, 
        height:30, 
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center'
        
    },
    attendenceText:
    {
        fontSize:8, 
        color:colors.lightBackground,
        fontWeight:'bold'
        },
    textView:{
        flex:1, 
        padding: 5,
        },
    studentIdText:
    {
        color:colors.main, 
        fontWeight: '700', 
        fontSize:18
        },
    nameText:
        {
            color:colors.main, 
            fontSize:20, 
            fontWeight:'bold'
            },
    levelText:
    {
        fontSize:15, 
        color:colors.main, 
        fontWeight:'700'
    },
    rankText:{fontSize:15, color:colors.main,}

})