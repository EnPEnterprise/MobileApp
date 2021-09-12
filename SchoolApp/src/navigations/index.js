import 'react-native-gesture-handler'
import React ,{useEffect,useState, useContext} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen'
import auth from '@react-native-firebase/auth'

import {GlobalContext} from '../context/Provider';

import HomeNavigator from './HomeNavigator'
import ProfileNavigator from './ProfileNavigator'

const AppNavContainer = () => {
const {user, setUser} = useContext(GlobalContext)
const [ initializing, setInitializing] =useState(true)

const onAuthStateChanged = (user) =>{
    setUser(user)
   if (initializing) setInitializing(false);
}

useEffect(()=> {
SplashScreen.hide()
const subscriber=auth().onAuthStateChanged(onAuthStateChanged)
return subscriber
},[])

if (initializing) return null;

    return(
        <NavigationContainer>
         {user? <ProfileNavigator /> : <HomeNavigator />}
        </NavigationContainer>

    )
}
export default AppNavContainer