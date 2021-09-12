import {StyleSheet} from 'react-native';

import colors from '../../assets/theme/colors'
import {MAX_WIDTH,MAX_HEIGHT} from '../../constants/General'

export default StyleSheet.create({
    container:{
        height:(MAX_HEIGHT/5),
        width: MAX_WIDTH,
        },
    imagebackground:{
        width: MAX_WIDTH,
        height: 140,
        justifyContent:'center',
        alignItems:'center',
    },
})