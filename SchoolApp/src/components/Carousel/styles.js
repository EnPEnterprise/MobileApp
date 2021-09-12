import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

import {MAX_WIDTH} from '../../constants/General'

export default StyleSheet.create({
    image:{
        resizeMode:'cover',
        height: 240,
        width: MAX_WIDTH,
        opacity: 0.6
    },
    container:{
        flexDirection:'row'
    },
    indicatorContainer:{
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        bottom:10,
        width: MAX_WIDTH,
        zIndex: 2
    },
    indicator:{
        width: 10,
        height:10,
        borderRadius:5,
        borderColor: colors.main,
        borderWidth: 1,
        marginHorizontal: 10,
        marginBottom:10,
    },
    activeIndicator:{
        backgroundColor: colors.main
    }


})