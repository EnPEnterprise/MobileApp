import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import {HomeScreen, LoginScreen, StaffOnDutyScreen } from '../screens'
import HomeBottomTabNavigator from './HomeBottomTab'
import AuthNavigator from './AuthNavigator'

import {HOME_BOTTOM_TAB, LOGIN_STACK, STAFF } from '../constants/screenNames'


const HomeNavigator = () => {
    const HomeStack = createStackNavigator()
    return(
    <HomeStack.Navigator initialRouteName={HomeScreen} screenOptions={{headerShown: false}} >
      <HomeStack.Screen name={HOME_BOTTOM_TAB} component={HomeBottomTabNavigator} />
      <HomeStack.Screen name={LOGIN_STACK} component={AuthNavigator} />
      <HomeStack.Screen name={STAFF} component={StaffOnDutyScreen} />
    </HomeStack.Navigator> 

    )
}
export default HomeNavigator