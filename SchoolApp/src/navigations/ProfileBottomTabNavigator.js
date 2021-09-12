import React, {useContext,useState, useEffect} from 'react'
import {Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {getFocusedRouteNameFromRoute } from '@react-navigation/native'
import {ProfileScreen,ShopMenuScreen, CalendarScreen,NewsScreen,ContactScreen,MessageMenuScreen } from '../screens'
import { ICON } from '../constants/images'
import {
  PROFILE, 
  MESSAGE, 
  SHOP, 
  NEWS, 
  CALENDAR,
  TUCK_SHOP,
  UNIFORM_SHOP,
  PRACTICALS_SHOP,
  SPORTS_SHOP,
  BOOK_SHOP,
  GENERAL_STORE,
  ADMIN_CHAT,
  ACCOUNTS_CHAT,
  CLASS_GROUP_CHAT,
  TEACHER_CHAT
  } from '../constants/screenNames'

  import {GlobalContext} from '../context/Provider'


import colors from '../assets/theme/colors'

import ShopNavigator from './ShopNavigator'

import MessageNavigator from './MessageNavigator'

const ProfileBottomTabNavigator = () => {
   const { userPresent,loading } =useContext(GlobalContext)
    const ProfileBottomTab = createBottomTabNavigator()

   return(
     <ProfileBottomTab.Navigator 
          screenOptions={ ({ route }) => ({
          tabBarStyle: { backgroundColor: colors.main },
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === PROFILE) {
              iconName = focused
                ? ICON.ACTIVE_PROFILE_ICON
                : ICON.INACTIVE_PROFILE_ICON
            } else if (route.name === SHOP) {
              iconName = focused 
                ? ICON.ACTIVE_SHOP_ICON
                : ICON.INACTIVE_SHOP_ICON
            }
            else if (route.name === CALENDAR) {
              iconName = focused 
           ? ICON.ACTIVE_CALENDAR_ICON
          : ICON.INACTIVE_CALENDAR_ICON
            }
        else if (route.name === NEWS) {
              iconName = focused 
            ? ICON.ACTIVE_NEWS_ICON
            : ICON.INACTIVE_NEWS_ICON
            }
        else if (route.name === MESSAGE) {
              iconName = focused 
           ? ICON.ACTIVE_CONTACT_ICON
           : ICON.INACTIVE_CONTACT_ICON
            }
            return <Image source={iconName} style={{width: 30, height: 30}} resizeMode='contain'/>;
          },
          tabBarActiveTintColor: colors.background,
          tabBarInactiveTintColor: 'black',
        })}
     >
     <ProfileBottomTab.Screen  
     name={PROFILE} 
     component={ProfileScreen} 
     options={() => ({
        tabBarStyle:(() => {
            if (
              userPresent===false || loading===true
              ) {
               return { display: 'none' }
            }
            return {backgroundColor: colors.main }
        })(),
    })}
     />
     <ProfileBottomTab.Screen  
     name={SHOP} 
     component={ShopNavigator}
    options={({ route }) => ({
        tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? ''
            if (
              routeName ===  TUCK_SHOP
              ||
              routeName ===  SPORTS_SHOP
              ||
              routeName ===  UNIFORM_SHOP
              ||
              routeName ===  PRACTICALS_SHOP
              ||
              routeName ===  BOOK_SHOP
              ||
              routeName ===  GENERAL_STORE
              ) {
               return { display: 'none' }
            }
            return { backgroundColor: colors.main }
        })(route),
    })}
     />
     <ProfileBottomTab.Screen name={CALENDAR} component={CalendarScreen} />
     <ProfileBottomTab.Screen  name={NEWS} component={NewsScreen} />
     <ProfileBottomTab.Screen  
     name={MESSAGE} 
     component={MessageNavigator} 
     options={({ route }) => ({
        tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? ''
            if (
              routeName ===  ADMIN_CHAT
              ||
              routeName ===  ACCOUNTS_CHAT
              ||
              routeName ===  CLASS_GROUP_CHAT
              ||
              routeName ===  TEACHER_CHAT
              ) {
               return { display: 'none' }
            }
            return { backgroundColor: colors.main }
        })(route),
    })}
     />
     </ProfileBottomTab.Navigator>
 )
}
export default ProfileBottomTabNavigator