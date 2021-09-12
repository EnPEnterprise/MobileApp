import React,{useEffect} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {LoginScreen, ProfileScreen,AdminChatScreen} from '../screens'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import ProfileNavigator from './ProfileNavigator'

import {LOGIN, PROFILE_NAVIGATOR, ADMIN_CHAT } from '../constants/screenNames'

const AuthNavigator = () => {
    const AuthStack = createStackNavigator()

useEffect(()=> {
  GoogleSignin.configure({
  webClientId: '981443997715-7se0q73rnkdgrchf2bn01l6esppn7p0t.apps.googleusercontent.com',
});

},[])
return(
    <AuthStack.Navigator initialRouteName={LoginScreen} screenOptions={{headerShown: false}} >
      <AuthStack.Screen name={LOGIN} component={LoginScreen} />
      <AuthStack.Screen name={PROFILE_NAVIGATOR} component={ProfileNavigator} />
      <AuthStack.Screen name={ADMIN_CHAT} component={AdminChatScreen} />
    </AuthStack.Navigator> 

    )


}

export default AuthNavigator