import React, {useContext,useState, useEffect} from 'react'
import {useNavigation} from '@react-navigation/native'
import {View,Text,TouchableOpacity,Image,StatusBar,TouchableWithoutFeedback} from 'react-native'

import {GlobalContext} from '../../context/Provider'

import styles from './styles'
import colors from '../../assets/theme/colors';

import {LOGO} from '../../constants/images'
import {LOGIN, PROFILE_NAVIGATOR, ADMIN_CHAT } from '../../constants/screenNames'
import {SCHOOL_LOGO} from '../../constants/titles'
import {ProfileScreen } from '../Profile'
import {Container,CustomButton,CircleContainer,InputField} from '../../components'

const LoginScreen =()=>{

     const { adminOfflineLogIn, adminOnlineLogIn, googleLogin} =useContext(GlobalContext)
  
      const {navigate} = useNavigation()
      const onProceedPress = () => { googleLogin()}
      const onContactPress = () => {navigate(ADMIN_CHAT)}
      const onAdminOfflineLoginPress = () => { 
          adminOfflineLogIn(),
           navigate(PROFILE_NAVIGATOR)
          }
      const onAdminOnlineLoginPress = () => { 
            adminOnlineLogIn(),
           navigate(PROFILE_NAVIGATOR)
          }

    return (
        <Container>
         <StatusBar
        backgroundColor={colors.background}
         />
        <View style={styles.container}>
        <CircleContainer 
        title={SCHOOL_LOGO}
        source={LOGO.SCHOOL_LOGO} 
        />
        </View>
        <View style={styles.inputContainer}>
        <View style={styles.inputView}>
        <InputField placeholder='Student ID' />
        </View>
        <View style={styles.inputView}>
        <InputField placeholder='Password' />
        </View>
        <View style={styles.textView}> 
        <Text style={styles.textTrouble}>
        Having Troubles Logging In? 
        </Text>
        <TouchableOpacity onPress={onContactPress}>
        <Text style={styles.textLink}> 
        Contact Admin
        </Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonView}>
        <CustomButton 
        title='Proceed' 
        onPress={onProceedPress}
        />
        </View>
        </View>
        <View style={styles.separator} />
         <View style={styles.footerView}>

        
            <View style={styles.ministryLogoView}>
                    <Image 
                    source={LOGO.MINISTRY_LOGO} 
                    resizeMode='contain' 
                    style={styles.ministryLogoImage}
                    />
            </View>
        

         <View style={styles.textFooterView}>
            <TouchableWithoutFeedback onPress={onAdminOfflineLoginPress}>
                    <Text style={styles.footerText}>
                    Powered by The Ministry of Primary
                    </Text>
            </TouchableWithoutFeedback>
         <TouchableWithoutFeedback onPress={onAdminOnlineLoginPress}>
                <Text style={styles.footerTextBottom}>
                and Secondary Education
                </Text>
         </TouchableWithoutFeedback>
         </View>
         
        </View>
        </Container>
    )   
}
export default LoginScreen



