import React, {useContext,useState, useEffect, useCallback} from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { GiftedChat } from 'react-native-gifted-chat'
import {View, Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'

import {GlobalContext} from '../../context/Provider'


import {MESSAGE_MENU} from '../../constants/screenNames'
import {TEACHER_CHAT_SCREEN_TITLE} from '../../constants/titles'

import {Container,HomeHeader} from '../../components'


const TeacherChatScreen =()=>{
    const[chatName, setChatName]=useState('')
    const[chatUser, setChatUser]=useState(null)
    const[chatId, setChatId]=useState('')
    const [messages, setMessages]=useState([])

    const db = firestore()
    const chatsRef = db.collection('chats')

    const { authState,authDispatch,initializing, setInitializing,user, setUser} =useContext(GlobalContext)
    const {navigate} = useNavigation()
    const onBackPress = () => {navigate(MESSAGE_MENU)}


    useEffect(()=>{
    setChatId(user.email)
    setChatName(user.displayName)
    initializeChat()
    readUser()  
    
    const unsubscribe = chatsRef.onSnapshot(querySnapshot =>{
        const messageFirestore = querySnapshot
                                        .docChanges()
                                        .filter(({type})=> type=== 'added')
                                        .map(({ doc })=>{
                                                const message =doc.data()
                                                return{...message,createdAt: message.createdAt.toDate()}
                                            }).sort((a,b) => b.createdAt.getTime()- a.createdAt.getTime())
                                            appendMessages(messageFirestore )
    })

   return()=> unsubscribe()
    },[])

    const appendMessages = useCallback((messages)=>{
        setMessages((previousMessages)=>GiftedChat.append(previousMessages,messages))
    },[messages])

    async function readUser(){
     const chatUser = await AsyncStorage.getItem('chatUser')
     if(chatUser) {
         setUser(JSON.parse(chatUser))
     }
    }
   async function initializeChat(){
       const _id = Math.random().toString(36).substring(7)
       const chatUser={_id,chatName}
       await AsyncStorage.setItem('chatUser',JSON.stringify(chatUser))
       setChatUser(chatUser)
   }
   async function handleSend(messages){
       const writes = messages.map(m => chatsRef.add(m))
       await Promise.all(writes)

   }
     return(     
     <GiftedChat 
        messages={messages}
        user={chatUser}
        onSend={handleSend}
        />
    )
     if(!chatUser) 
    {
        return
        (
        <View>
        <Text>Error no username found</Text>
        </View> 
        ) 
    }
  
}
export default TeacherChatScreen

