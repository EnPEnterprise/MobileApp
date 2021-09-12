import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

import {MAX_WIDTH} from '../../constants/General'

export default StyleSheet.create({
     textInput:{
         backgroundColor:colors.lightMain,
         width:(MAX_WIDTH-20),
         height:40,
         borderRadius: 10,
         textAlign: 'center',
         fontSize: 18

     }
})