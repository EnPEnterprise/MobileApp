import React, {createContext, useReducer, useState,useEffect} from 'react'
import {Alert} from 'react-native'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth';

import {PROFILE_NAVIGATOR} from '../constants/screenNames'

export const GlobalContext = createContext({})

const GlobalProvider = ({children}) => {
    const [details, setDetails] = useState([]);
    const [userPresent, setUserPresent] = useState(false);
    const [loading, setLoading]=useState(true)
    const [user, setUser] = useState(null)
    const [userId, setUserId] = useState(null);
    const [adminOfflineAccess, setAdminOfflineAccess]=useState(false)
    const [adminOnlineAccess, setAdminOnlineAccess]=useState(false)
    const [adminEmail, setAdminEmail]=useState('')
    const [adminPassword, setAdminPassword]=useState('')

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        userId, 
        adminOfflineAccess,
        setAdminOfflineAccess,
        setUserId,
        adminOnlineLogIn:async(email,password)=>{
           Alert.alert('Admin Offline login',
          'You are now enterin the online admin mode'
          )
          setAdminEmail('admin@enp.com')
          setAdminPassword('EnPadmin')
          try{
          //await auth().createUserWithEmailAndPassword('admin@enp.com', 'EnPadmin')
          await auth().signInWithEmailAndPassword('admin@enp.com', 'EnPadmin')
          setAdminOnlineAccess(true)
          setLoading(false)
          setUserPresent(true)
          }catch (er){
            console.log(er)
          }
        },
        adminOfflineLogIn:()=>{
          Alert.alert('Admin Offline login',
          'You are now enterin the Offline admin mode'
          )
          setAdminOfflineAccess(true)
          setLoading(false)
          setUserPresent(true)
        },
        studentDetails: async()=>{
          try{ 
            const studentDetailsfromFirestore=[]
            await firestore()
                     .collection('users')
                     .doc(user.uid)
                     .get()
                     .then(documentSnapshot => {
                        if (documentSnapshot.exists) {
                          studentDetailsfromFirestore.push({
                            ...documentSnapshot.data(),
                            key:documentSnapshot.id
                          })
                          setDetails(studentDetailsfromFirestore)
                        }
                     })
                     setLoading(false)
          }catch(err){
            console.log(err)
          }
        },
        logout: async()=>{
              try{
                await auth().signOut()
              } catch(e) {
                  console.log(e)
              }
          },
          googleLogin: async()=>{
            try{
              const { idToken } = await GoogleSignin.signIn();
              const googleCredential = auth.GoogleAuthProvider.credential(idToken);
              await auth().signInWithCredential(googleCredential);  
            }
            catch(error){
              console.log({error})

            }
          },
        details, 
        setDetails,
        userPresent, 
        setUserPresent,
        loading, 
        setLoading
        }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;


