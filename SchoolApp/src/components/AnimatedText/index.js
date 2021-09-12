import * as React from 'react'
import {View,Text, Animated} from 'react-native'

import styles from './styles'
import colors from '../../assets/theme/colors'

class AnimatedText extends React.Component{
animatedValues=[];
constructor(props){  
     super(props);

     const textArr = props.content.trim().split(' ');
     textArr.forEach((_,i)=>{
         this.animatedValues[i]= new Animated.Value(0);
     })
     this.textArr=textArr;
 }

componentDidMount(){
    this.animated();
}
 animated = (toValue = 1)=>{
     const animations = this.textArr.map((_,i)=>{
         return Animated.timing(this.animatedValues[i],{
             toValue,
             duration:this.props.duration,
             useNativeDriver: true,
         })
     });
    Animated.stagger(this.props.duration/5,
    toValue ===0 ? animations.reverse():animations).start(()=>{
     setTimeout(() => {
this.animated(toValue === 0 ? 1 : 0);
}, 1000)
        
    })
 }
render(){
       return(
        <View style={styles.container}>
        {this.textArr.map((word,index)=>
            (
            <Animated.Text 
            key={`${word}-${index}`}
            style={[
                styles.text,
                {
                    opacity:this.animatedValues[index],
                    transform:[{
                        translateX:Animated.multiply(
                            this.animatedValues[index],
                            new Animated.Value(-6)
                        )
                    }]
                }
                ]}>
            {word}
            {`${index < this.textArr.length ? ' ':''}`}  
            </Animated.Text>
            ))}
         
        </View>
    )
}
 
}
export default AnimatedText