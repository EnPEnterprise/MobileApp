import React,{useState,useRef} from 'react'
import {View, Text, TouchableOpacity,Image} from 'react-native'

import styles from './styles'

import {MAX_WIDTH} from '../../constants/General'

import {CustomButton} from '../Button'

import {IMAGE} from '../../constants/images'

import colors from '../../assets/theme/colors';

const AccountsAccordion =({AccountsData})=>{
  const [currentIndex, setCurrentIndex]=useState(null)
  const ref = useRef()
    return(
        <View>
        {
        AccountsData.map(({id,term,fees,transport,current},index)=>{
            return(
                <View 
                style={{width:MAX_WIDTH-10,marginLeft:5,justifyContent:'center', alignItems:'center', borderRadius:10}}
                >
                    
                    <View style={{flex:1,justifyContent:'center', alignItems:'flex-start'}}>
                        <View 
                        style={{flexDirection:'row',height:50, width:MAX_WIDTH-10,backgroundColor:colors.main, borderRadius:10}}>

                        <Text key={id} style={{fontSize:25, fontWeight:'bold', color:colors.lightBackground, marginLeft:10}}>
                        {term}
                        </Text>

                        <View style={{flex:1,height:50}} />

                        <TouchableOpacity onPress={()=>{
                             [
                                            
                                            setCurrentIndex(index===currentIndex?null:index),
                             ]
                        }}>
                        <View style={{flex:1,borderRadius:10, alignItems:'center',justifyContent:'center',width:50, height:50}}>
                         {
                                               current===true?null:
                                              index===currentIndex?
                                              <Image
                                                  source={IMAGE.WHITE_DROP_DOWN}
                                                  resizeMode='contain'
                                                  style={styles.image}  
                                              />
                                            :
                                            <Image
                                                  source={IMAGE.WHITE_UP_ICON}
                                                  resizeMode='contain'
                                                  style={styles.image}
                                            />
                                            }
                        </View>
                        </TouchableOpacity>

                        </View>
                        
                    </View>

                     {
                              
                              
                        (index === currentIndex || current===true)
                                 &&
                                (
                                    <View style={{flexGrow:1,width:MAX_WIDTH-10, borderRadius:10, borderWidth:1, backgroundColor:colors.lightBackground}}>
                      
                      <View style={{flexDirection:'row', flexGrow:1}}>

                        <View style={{ justifyContent:'center', alignItems:'flex-start', flexGrow:1}}>
                            <Text style={{fontSize:15, fontWeight:'bold', padding: 10, color:colors.main}}>
                               Fees
                            </Text>
                        </View>


                        <View style={{flexGrow:1, justifyContent:'center', alignItems:'flex-end'}}>
                            <Text style={{fontSize:15, fontWeight:'bold', padding: 10, color:colors.main}}>
                               {fees}
                            </Text>
                        </View>

                      </View>
                      
                      <View style={{flexDirection:'row', flexGrow:1}}>

                        <View style={{ justifyContent:'center', alignItems:'flex-start', flexGrow:1}}>
                        <Text style={{fontSize:15, fontWeight:'bold', padding: 10, color:colors.main}}>
                            Transport
                        </Text>
                        </View>

                        <View style={{ justifyContent:'center', alignItems:'flex-end', flexGrow:1}}>
                        <Text key={id} style={{fontSize:15, fontWeight:'bold', padding: 10, color:colors.main}}>
                            {transport}
                        </Text>
                        </View>

                      </View>

                      <View style={{width:'100%', justifyContent:'center', alignItems:'center',flexGrow:1}}>
                    <CustomButton title='Pay' />
                    </View>
                     <View style={{height:10, width:'100%'}}/>
                    </View>
                                )
                     }

                    
                 
                    

                    <View style={{width:MAX_WIDTH-10, height:1, backgroundColor:colors.lightBackground} }/>
                    
                </View>

            )
        })
        }
        </View>
    )
}
export default AccountsAccordion