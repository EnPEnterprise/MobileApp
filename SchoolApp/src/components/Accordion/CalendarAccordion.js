import React,{useState,useRef} from 'react'
import {View, Text,TouchableOpacity,Image} from 'react-native'
import {Transition, Transitioning} from 'react-native-reanimated'

import styles from './styles'

import colors from '../../assets/theme/colors';

import {MAX_WIDTH} from '../../constants/General'

import {ICON} from '../../constants/images'

const transition=(
  <Transition.Together>
   <Transition.In type='fade' durarionMs={200} />
   <Transition.Change />
   <Transition.Out type='fade' durarionMs={200} />
  </Transition.Together>
)


const CalendarAccordion = ({CalendarData}) =>{
  const [currentIndex, setCurrentIndex]=useState(null)
  const ref = useRef()
 
    return(
    <Transitioning.View
        ref={ref}
        transition={transition}      
        style={{width: MAX_WIDTH-10,  flex:1, paddingTop:5,marginLeft:5 }}
        >

         {
              CalendarData.map(({id,upcoming,heading,subheading,image,date,data},index)=>{
                  
                  return(
                    <View style={{borderColor:colors.lightMain, borderWidth:1,borderRadius:5}}>
                    
                            
                            <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center',backgroundColor:colors.lightMain, width:'100%',height:50, borderRadius:5}}>
                            
                                    <View key={id} style={{flex:2,height:50}}>
                                        <Text  style={{marginLeft:10,color:colors.main, fontSize:25, fontWeight:'bold'}}>
                                            {upcoming===true?<Text>Next Event</Text>:heading}
                                        </Text>
                                    </View>

                                    <View style={{flex:1.5, justifyContent:'center', alignItems:'flex-start'}}>
                                    <Text style={{fontSize:15, fontWeight:'bold', color:colors.main}}>{date}</Text>
                                    </View>
                                
                                    <TouchableOpacity onPress={()=>{
                                        [
                                            ref.current.animateNextTransition(),
                                            setCurrentIndex(index===currentIndex?null:index),
                                        ]

                                    }}>
                                    <View  style={{justifyContent:'center', alignItems:'center', height:50, flex:1,width:50}}>
                                             {
                                               upcoming===true?null:
                                              index===currentIndex?
                                              <Image
                                                  source={ICON.DROP_UP_ICON}
                                                  resizeMode='contain'
                                                  style={styles.image}  
                                              />
                                            :
                                            <Image
                                                  source={ICON.DROP_DOWN_ICON}
                                                  resizeMode='contain'
                                                  style={styles.image}
                                            />
                                            }
                                    </View>
                                    </TouchableOpacity>
                            
                            
                            </View>
                            {
                              
                              
                                (index === currentIndex || upcoming===true)
                                 &&
                                (
                                
                                <View>
                                  <View style={{flexDirection:'row'}}>

                                                    <View style={{flex:0.5, justifyContent:'center',alignItems:'center'}}>
                                                            <Image
                                                                key={image}
                                                                source={image}
                                                                resizeMode='contain'
                                                                style={{width:100, height:100}}
                                                            />
                                                    </View>
                                                    
                                                    <View style={{flex:1}}>
                                                            <Text style={{marginLeft:10, fontSize:25, fontWeight:'bold', color:colors.main}}>{heading}</Text>
                                                            <Text  style={{marginLeft:10, fontSize:20,fontWeight:'bold', color:colors.main}}>{subheading}</Text>
                                                            <Text  style={{marginLeft:10,fontSize:15,fontWeight:'bold', color:colors.main}}>{date}</Text>
                                                    </View>

                                            </View>
                                            <View style={{flexGrow:1, width:'100%', backgroundColor:colors.lightBackground}}>
                                                    <Text key={id} style={{margin:10,fontSize:18, color:colors.main, textAlign:'center'}}>
                                                   {data}
                                                    </Text>
                                                    </View>
                                    </View>
                                )

                             }
                            

                                                            
                        <View style={{width:'100%', height:1, backgroundColor:colors.lightBackground}} />   
                    </View>
                  )
              })
         }
         <View style={{width:'100%', height:50}}/>
        </Transitioning.View>
    )
}

export default CalendarAccordion