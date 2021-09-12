import React from 'react'
import {View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import ProfileBottomTabNavigator from './ProfileBottomTabNavigator'
import ShopNavigator from './ShopNavigator'
import MessageNavigator from './MessageNavigator'

import {MAX_WIDTH} from '../constants/General'
import colors from '../assets/theme/colors';

import DrawerContent from './DrawerContent'

import {
    ProfileScreen, 
    AccountsScreen, 
    ClassPageScreen,
    TrackScreen,
    ContactScreen,
    SchoolDocScreen,
    SettingsScreen,
    OnlineScreen,
    AboutScreen 
    } from '../screens'

    import 
    {
        PROFILE_BOTTOM_TAB, 
        ABOUT_US, 
        ACCOUNTS, 
        CLASS_PAGE, 
        TRACK, 
        SCHOOL_DOC, 
        SETTINGS, 
        ONLINE,
        SHOP_NAVIGATOR,
        
        } from '../constants/screenNames'

const ProfileDrawerNavigator = () => {
    const ProfileDrawer = createDrawerNavigator()
    return(
    <ProfileDrawer.Navigator 
    screenOptions={{
    drawerStyle: {
      backgroundColor:colors.lightMain,
      width: (MAX_WIDTH-75),
    },
    
        headerShown: false,
        
        }} 
    initialRouteName='Student Profile'
    drawerContent={(props) => <DrawerContent {...props} />}
    
            
    >
        <ProfileDrawer.Screen name={PROFILE_BOTTOM_TAB} component={ProfileBottomTabNavigator} />
        <ProfileDrawer.Screen 
        name={ACCOUNTS} 
        component={AccountsScreen} 
        />
        <ProfileDrawer.Screen name={CLASS_PAGE} component={ClassPageScreen} />
        <ProfileDrawer.Screen name={TRACK} component={TrackScreen} />
        <ProfileDrawer.Screen name={SCHOOL_DOC} component={SchoolDocScreen} />
        <ProfileDrawer.Screen name={SETTINGS} component={SettingsScreen} />
        <ProfileDrawer.Screen name={ONLINE} component={OnlineScreen} />
        <ProfileDrawer.Screen name={ABOUT_US} component={AboutScreen} />
      </ProfileDrawer.Navigator>
    )
}
export default ProfileDrawerNavigator