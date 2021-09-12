import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/theme/colors';

import {MAX_WIDTH} from '../../constants/General'

export default StyleSheet.create({
    container:{
        width: (MAX_WIDTH/2),
        height: (MAX_WIDTH/2),
        justifyContent:'center',
        alignItems:'center',
    },
    clickableText:{
        color:colors.main, 
        textAlign:'center', 
        fontSize:20
        },
    clickableIcon:{
        width:150, 
        height:150
        },
    clickableUniformIcon:{
        width:190,
        height:190,
    },
    clickableProjectsIcon:{
         width:190,
        height:190,
    },
    textProjectView:{flex:1, width:'100%'},
    textView:{flex:0.5, width:'100%'},
    weather:{
        width: (MAX_WIDTH/2),
        height: (MAX_WIDTH/2),
        backgroundColor: colors.weather,
        opacity: 0.69
    },
    reading:{
        fontSize: 45,
        marginLeft: 80,
        color: colors.main  
    },
    time:{
        width: (MAX_WIDTH/2),
        height: (MAX_WIDTH/2),
        backgroundColor: colors.lightMain,
        opacity: 1

    },
    image:{
        resizeMode:'cover',
        width: 100,
        height: 100
    },
    comment:{
        fontSize: 25,
        paddingBottom: 15,
        marginLeft: 15,
        color: colors.main
    }
})