import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

import {MAX_WIDTH, MAX_HEIGHT} from '../../constants/General'

export default StyleSheet.create({
text:{
    fontSize: 15,
    textAlign:'center'
},
iconButtonMainContainer:{height:MAX_HEIGHT/6, justifyContent:'center', alignItems:'center'},
iconButtonContainer:
{
  width:MAX_WIDTH-20, 
  height:50, 
  backgroundColor:colors.lightMain, 
  borderRadius:15, 
  justifyContent:'center', 
  alignItems:'center',
  flexDirection:'row'
  },
  iconImage:
  {
    width:50, 
    height:50
    },
  iconImageView:
  {
    flex:0.5, 
    height:50, 
    justifyContent:'center',
    alignItems:'center', 
    flexDirection:'row'
    },
  messageIndicatorCircle:
  {
    marginTop:5,
    marginLeft:40,
    width:22, 
    height:22, 
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colors.background,
    borderRadius:11
    },
  messageIndicatorText:
  {
  color:'green', 
  fontWeight:'bold',
  fontSize:12
  },
  iconTitle:
  {
    flex:1.5, 
    height:50,
    justifyContent:'center',
    alignItems:'flex-start',
    marginLeft:5
    },
iconButtonText:
{
  color:colors.main, 
  fontSize:22, 
  textAlign:'center'
  },
loginButton:{
  width: 60, 
  height: 30, 
  backgroundColor:colors.main,
  borderRadius:10,
  fontSize:15
},
normalButton:{
  width: 100, 
  height: 40, 
  backgroundColor:colors.main,
  borderRadius:10,
  justifyContent:'center',
  alignItems:'center'
},
normalButtonText:{
  textAlign:'center',
    fontSize: 20,
  color: colors.background,
},
loginButtonText:{
  textAlign:'center',
    fontSize: 15,
  color: colors.background,
},
body:{
    alignItems:'center',
},
font:{
fontSize:15,
color: colors.background,
},
reportButton:{
  width: 150, 
  height: 30, 
  backgroundColor:colors.main,
  borderRadius:9,
  fontSize:11

},
  homeworkButton:{
  width: 150, 
  height: 30, 
  backgroundColor:colors.main,
  borderRadius:10,
  fontSize:11
},
requirementsButton:{
  width: 250, 
  height: 30, 
  backgroundColor:colors.main,
  borderRadius:10,
  fontSize:8
}

});