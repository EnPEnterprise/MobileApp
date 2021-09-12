import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {
   MessageMenuScreen,
  AdminChatScreen,
  AccountsChatScreen,
  ClassGroupChatScreen,
  TeacherChatScreen
    } from '../screens'

import {
  MESSAGE_MENU,
  ADMIN_CHAT,
  ACCOUNTS_CHAT,
  CLASS_GROUP_CHAT,
  TEACHER_CHAT
  } from '../constants/screenNames'

const MessageNavigator =()=>{
    const MessageStack = createStackNavigator()
    return(
        <MessageStack.Navigator  initialRouteName={MessageMenuScreen} screenOptions={{headerShown: false}}> 
        <MessageStack.Screen name={MESSAGE_MENU} component={MessageMenuScreen} />
        <MessageStack.Screen name={CLASS_GROUP_CHAT} component={ClassGroupChatScreen} />
        <MessageStack.Screen name={TEACHER_CHAT} component={TeacherChatScreen} />
        <MessageStack.Screen name={ACCOUNTS_CHAT} component={AccountsChatScreen} />
        <MessageStack.Screen name={ADMIN_CHAT} component={AdminChatScreen} />
        </MessageStack.Navigator>
    )
}
export default MessageNavigator