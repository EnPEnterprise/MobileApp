import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors'

export default StyleSheet.create({

container:{
    flexDirection: 'row', 
    height: 50,  
    backgroundColor:colors.main
    },
iconView:{
        flex:0.3,
        justifyContent: 'center', 
        alignItems: 'center'
        },
titleView:{
            flex:2, 
            justifyContent: 'center',
            },
titleText:{
    textAlign:'center', 
    color: colors.background, 
    fontSize: 25, 
    alignItems:'center' 
    },
screenIconView:{
    flex: 0.3, 
    justifyContent:'center'
    },
    iconImage:
    { 
        width:40, 
        height:40
    },
    onPressIconImage:{
       width:30, 
        height:30 
    }

});