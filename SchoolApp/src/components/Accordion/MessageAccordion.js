import React, {useState,useRef} from 'react'
import {View, Text, Image,TouchableOpacity, Animated}from 'react-native'
import {Transition, Transitioning} from 'react-native-reanimated'

import colors from '../../assets/theme/colors';

import styles from './styles'
import {ICON} from '../../constants/images'
import {MAX_WIDTH,MAX_HEIGHT} from '../../constants/General'

const transition=(
  <Transition.Together>
   <Transition.In type='fade' durarionMs={200} />
   <Transition.Change />
   <Transition.Out type='fade' durarionMs={200} />
  </Transition.Together>
)

const MessageAccordion =({title,MessageAccordionData,index})=> {

const [currentIndex, setCurrentIndex]=useState(null)
const ref = useRef()

    return(
        <Transitioning.View
        ref={ref}
        transition={transition}
        >
         {
         MessageAccordionData.map(({id,title,data,image},index)=>
           {
             return(
                 <View style={styles.container}>
                    <View style={styles.mainContainer}>
                      
                      <View style={styles.iconContainer}>
                          <Image 
                            key={image}
                            source={image}
                            resizeMode='contain'
                            style={styles.iconImage}
                          />
                      </View>


                 <View  style={styles.titleView} >
                    <Text 
                        key={title} 
                        style={styles.titleText}
                      >
                       {title} 
                    </Text>
                 </View>
                 
                 <TouchableOpacity 
                    onPress={()=>{
                        [
                        ref.current.animateNextTransition(),
                        setCurrentIndex(index===currentIndex?null:index),
                        ]
                        }
                      }
                  >

                 <View style={styles.dropDownView}>
                   {
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
                    index === currentIndex && 
                      (
                        <View style={styles.dataView}>
                            {
                            data.map(
                              data=>
                                (
                                    <Text key={data} style={styles.dataText}>
                                       {data}
                                    </Text>
                                )
                              )
                            }
                        </View>
                    )
               }
                  
                 </View>
             )
         })}
   
        </Transitioning.View>
    )
}

export default MessageAccordion

