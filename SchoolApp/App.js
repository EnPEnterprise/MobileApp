import React, {useState } from 'react';
import {LogBox } from 'react-native';

import AppNavContainer from './src/navigations'
import GlobalProvider from './src/context/Provider';


const App = () => {
    LogBox.ignoreLogs(['Reanimated 2']);
    return (
            <GlobalProvider>
            <AppNavContainer />
            </GlobalProvider> 
    )
  
}

export default App;
