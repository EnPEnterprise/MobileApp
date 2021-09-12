import React from 'react'
import {Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {HomeScreen,ShopMenuScreen, CalendarScreen,NewsScreen,AboutScreen } from '../screens'

import { ICON } from '../constants/images'
import {HOME, CALENDAR, NEWS, ABOUT_US, SHOP } from '../constants/screenNames'

import colors from '../assets/theme/colors'

import ShopNavigator from './ShopNavigator'

const HomeBottomTabNavigator = () => {
    const HomeBottomTab = createBottomTabNavigator()

 return(
     <HomeBottomTab.Navigator 
             screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: colors.main },
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === HOME) {
              iconName = focused
                ? ICON.ACTIVE_HOME_ICON
                : ICON.INACTIVE_HOME_ICON
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
        else if (route.name === ABOUT_US) {
              iconName = focused 
            ? ICON.ACTIVE_ABOUT_ICON
            : ICON.INACTIVE_ABOUT_ICON
            }
            return <Image source={iconName} style={{width: 30, height: 30}} resizeMode='contain'/>;
          },
          tabBarActiveTintColor: colors.background,
          tabBarInactiveTintColor: 'black',
        })}
     >
     <HomeBottomTab.Screen  name={HOME} component={HomeScreen} />
     <HomeBottomTab.Screen  name={SHOP} component={ShopNavigator} />
     <HomeBottomTab.Screen name={CALENDAR} component={CalendarScreen} />
     <HomeBottomTab.Screen  name={NEWS} component={NewsScreen} />
     <HomeBottomTab.Screen  name={ABOUT_US} component={AboutScreen} />
     </HomeBottomTab.Navigator>
 )
}
export default HomeBottomTabNavigator
