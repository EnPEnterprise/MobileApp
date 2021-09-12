import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

import {MAX_WIDTH} from '../../constants/General'

export default StyleSheet.create({
    container:
    {
        flexGrow:1,
        alignItems:'center', 
        justifyContent:'center'
    },
    mainContainer:
    {
        width:MAX_WIDTH-10, 
        borderRadius:10,
        height:50, 
        backgroundColor:colors.lightMain,
        flexDirection:'row'
    },
    iconContainer:
    {
        width:50,
        height:50, 
        flex:0.5, 
        alignItems:'center', 
        justifyContent:'center'
    },
    iconImage:
    {
        width:40, 
        height:40
    },
    titleView:
    {
        flex:1.5,height:50,  
        justifyContent:'center', 
        alignItems:'flex-start', 
        marginLeft:5
    },
    titleText:
    {
        color:colors.main, 
        fontSize:25, 
        textAlign:'center'
    },
    dropDownView:
    {
        flex:1.5,
        height:50,
        width:60,
        justifyContent:'center',
        alignItems:'center'
    },
    dataView:
    { 
        backgroundColor:colors.lightBackground, 
        flexGrow:1, 
        width:MAX_WIDTH
    },
    dataText:
    {
        color:colors.linkBlue,
        fontSize:20, 
        marginLeft:10
    },
    image: 
    {
        width:35, 
        height: 35
    }

})