import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors'

import {MAX_WIDTH} from '../../constants/General'

export default StyleSheet.create({
    imagebackground:{
        width: MAX_WIDTH,
        height: 200,
    },
    title:{
        fontSize: 25,
        flex:1,
        fontWeight: 'bold',
        marginLeft: (MAX_WIDTH/4),
        color: colors.background,
    },
    notice:{
        fontSize: 20,
        color: colors.background,
    },
    container:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
        paddingBottom:45,  

    },
    viewBox:{
        width:MAX_WIDTH,
        alignItems: 'center',
        justifyContent: 'center',
    }
})