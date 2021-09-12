import React, {useContext,useState, useEffect} from 'react'
import { View, Text, ScrollView,SafeAreaView, StatusBar} from 'react-native';

import styles from './styles'
import colors from '../../assets/theme/colors';

import {GlobalContext} from '../../context/Provider'

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const Container =({children}) =>{

  const {loading} =useContext(GlobalContext)


        return (
        <>
        {
                 loading===true?(
                                 <StatusBar
                                currentHeight={10}
                                backgroundColor={colors.background}
                                />
                 ):
                         <StatusBar
                        currentHeight={10}
                        backgroundColor={colors.main}
                        />
         }

        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView} >
        {children}
        </ScrollView>
        </SafeAreaView >
        </>
        )

}

export default Container;