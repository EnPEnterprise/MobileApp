import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

import {MAX_WIDTH, MAX_HEIGHT} from '../../constants/General'

export default StyleSheet.create({
    container:
    {
     flex: 1, 
     width:MAX_WIDTH, 
     height:(MAX_HEIGHT/3), 
     justifyContent: 'center', 
     alignItems: 'center'
     },
     inputContainer:
     {
         flex: 1, 
         width:MAX_WIDTH, 
         height:(MAX_HEIGHT/3), 
         justifyContent:'center', 
         alignItems:'center'
    },
 inputView:
 {
     flex:1,
      width: MAX_HEIGHT,
      height:(MAX_HEIGHT/6), 
      justifyContent:'center', 
      alignItems:'center'
 },
 textView:
 {
     flex:0.5,
     flexDirection:'row', 
     marginLeft:10
},
textTrouble:
{
color:colors.main,
fontWeight:'bold'
},
textLink:
{
color:colors.linkBlue, 
fontWeight:'bold'
},
buttonView:
{
  flex: 0.5,  
  width:MAX_WIDTH, 
  height:(MAX_HEIGHT/3), 
  justifyContent: 'center', 
  alignItems:'center'
  },
  separator:
  {
      height:(MAX_HEIGHT/4.2),
      width: MAX_WIDTH, flex:1
  },
  footerView:
  {
      flexDirection:'row'
  },
  ministryLogoView:
  {
      flex:0.1, 
      marginLeft:30 
 },
 ministryLogoImage:
 {
     width: 70, 
     height:70
 },
 footerText:
 {
     textAlign:'center', 
     marginTop:10, 
     color:colors.main
 },
 footerTextBottom:
 {
     textAlign:'center', 
     color:colors.main 
 },
 textFooterView:
 { 
     flex:2 
 }

})