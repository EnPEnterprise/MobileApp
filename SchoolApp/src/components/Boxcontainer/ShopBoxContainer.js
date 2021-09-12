import React from 'react'
import {View, Text, Image,TouchableOpacity } from 'react-native'

import styles from './styles'
import {MAX_WIDTH} from '../../constants/General'
import colors from '../../assets/theme/colors';
import {IMAGE, ICON,LOGO} from '../../constants/images'

const ShopBoxContainer =({name, price, source,count})=>{
    return(
        <View style={[styles.container, {borderRadius:2,borderWidth:1, borderColor:colors.lightMain,}]}>

          <View style={{flex:0.5,elevation:1, width:'100%', justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:20, color:colors.main,fontWeight:'bold'}}>{name}</Text>
          </View>

          <View style={{flex:1.5, width:'100%', alignItems:'center',justifyContent:'center'}}>
          
          <View style={{width:MAX_WIDTH/2.5,height:MAX_WIDTH/2.5, alignItems:'center',justifyContent:'center'}}>
          <Image 
          source={source}
          style={{width:MAX_WIDTH/2.5, height:MAX_WIDTH/2.5}}
          resizeMode='contain'
          />
          </View>
          
          </View>
          <View style={{flex:0.6, backgroundColor:colors.lightMain,width:'100%', flexDirection:'row'}}>

          <View style={{flex:1, borderWidth:1, borderColor:colors.background,  justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:20, fontWeight:'bold', color:colors.main}}>{price}</Text>
          </View>

          <View style={{flex:1.5,flexDirection:'row', }}>

            <View style={{flex:1,borderWidth:1, borderColor:colors.background,  justifyContent:'center', alignItems:'center'}}>
             <TouchableOpacity>
             <Text style={{fontSize:30, fontWeight:'bold', color:colors.main}}>-</Text>
             </TouchableOpacity>
            </View>

            <View style={{flex:2,justifyContent:'center', alignItems:'center'}}>
              <View style={{flex:1.2, width:'100%', borderWidth:1, borderColor:colors.background, justifyContent:'center', alignItems:'center'}}>
              <Text style={{fontWeight:'bold', color:colors.main}}>QTY</Text>
              </View>
              <View style={{ flex:1.5,borderWidth:1,backgroundColor:colors.background, borderColor:colors.background,  width:'100%', justifyContent:'center', alignItems:'center'}}>
              <Text style={{color:colors.main, fontSize:20, fontWeight:'bold'}}>{count}</Text>
              </View>    
            </View>

            <View style={{flex:1,borderWidth:1, borderColor:colors.background,  justifyContent:'center', alignItems:'center'}}>
             <TouchableOpacity>
             <Text style={{fontSize:30, fontWeight:'bold', color:colors.main}}>+</Text>
             </TouchableOpacity>
            </View>

          </View>

          </View>
        </View>
    )
}
 export default ShopBoxContainer