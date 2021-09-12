import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

import {MAX_WIDTH, MAX_HEIGHT} from '../../constants/General'

export default StyleSheet.create({
    inactiveView:
    {
        height:40,
        flex:1,
        backgroundColor:colors.lightBackground, 
        justifyContent:'center', 
        alignItems:'center'
    },
    activeView:{
        backgroundColor:colors.lightMain,
        flex:1,
        justifyContent:'center', 
        alignItems:'center'
        },
    activeText:
    {
        fontSize:20,
        fontWeight:'bold', 
        color:colors.main
    },
    inactiveText:{
        fontSize:20,
        fontWeight:'bold', 
        color:colors.lightMain  
    },
    separator:
    {
        width:'100%', 
        height:1,
        backgroundColor:colors.main
    },
    tableHeaderCotainer:
    {
        width:'100%',
        height:50,
        backgroundColor:colors.lightMain, 
        flexDirection:'row'
    },
    tablecolumn:
    {
        height:'100%', 
        width:MAX_WIDTH/4.5, 
        justifyContent:'center', 
        alignItems:'center'
    },
    columnText:
    {
        color:colors.main, 
        fontSize:15, 
        fontWeight:'bold',
        padding:5
    },
    iconView:{
        height:'100%', 
        width:MAX_WIDTH/9,
        justifyContent:'center', 
        alignItems:'center'
        }
})

