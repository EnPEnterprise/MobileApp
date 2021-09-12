import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import ProfileDrawerNavigator from './ProfileDrawerNavigator'
import ProfileBottomTabNavigator from './ProfileBottomTabNavigator'
import ShopNavigator from './ShopNavigator'
import MessageNavigator from './MessageNavigator'

import {
    ProfileScreen, 
    ReportScreen, 
    TimeTableScreen,
    SubjectsScreen,
    PracticalsAndProjectsScreen,
    ClubsScreen,
    SportsScreen,
    CALAScreen,
    ClassRequirementsScreen,
    HomeworkScreen,
    AdminChatScreen 
    } from '../screens'

import {
  PROFILE_DRAWER, 
  PROFILE_BOTTOM_TAB,
  MESSAGE_NAVIGATOR,
  SHOP_NAVIGATOR,
  REPORT, 
  TIME_TABLE,
  SUBJECTS,
  PRACTICALS_AND_PROJECTS,
  CLUBS,
  SPORTS,
  CALA,
  CLASS_REQUIREMENTS,
  HOMEWORK,
  ADMIN_CHAT
  } from '../constants/screenNames'


const ProfileNavigator = () => {
    const ProfileStack = createStackNavigator()
    return(
    <ProfileStack.Navigator initialRouteName={ProfileScreen} screenOptions={{headerShown: false}} >
      <ProfileStack.Screen name={PROFILE_DRAWER} component={ProfileDrawerNavigator} />
      <ProfileStack.Screen name={REPORT} component={ReportScreen} />
      <ProfileStack.Screen name={TIME_TABLE} component={TimeTableScreen} />
      <ProfileStack.Screen name={SUBJECTS} component={SubjectsScreen} />
      <ProfileStack.Screen name={PRACTICALS_AND_PROJECTS} component={PracticalsAndProjectsScreen} />
      <ProfileStack.Screen name={CLUBS} component={ClubsScreen} />
      <ProfileStack.Screen name={SPORTS} component={SportsScreen} />
      <ProfileStack.Screen name={CALA} component={CALAScreen} />
      <ProfileStack.Screen name={CLASS_REQUIREMENTS} component={ClassRequirementsScreen} />
      <ProfileStack.Screen name={HOMEWORK} component={HomeworkScreen} />
      <ProfileStack.Screen name={ADMIN_CHAT} component={AdminChatScreen} />
    </ProfileStack.Navigator> 

    )
}
export default ProfileNavigator