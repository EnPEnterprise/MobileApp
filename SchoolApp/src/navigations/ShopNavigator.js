import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {
    ShopMenuScreen,
    BookShopScreen,
    GeneralStoreScreen,
    PracticalsShopScreen,
    SportsShopScreen,
    TuckShopScreen,
    UniformShopScreen
    } from '../screens'

import {
  TUCK_SHOP,
  UNIFORM_SHOP,
  PRACTICALS_SHOP,
  SPORTS_SHOP,
  BOOK_SHOP,
  GENERAL_STORE,
  SHOP_MENU
  } from '../constants/screenNames'

const ShopNavigator =()=>{
    const ShopStack = createStackNavigator()
    
    return(
        <ShopStack.Navigator  
        initialRouteName={ShopMenuScreen} 
        screenOptions={{headerShown: false}}
        > 
        <ShopStack.Screen name={SHOP_MENU} component={ShopMenuScreen} />
        <ShopStack.Screen name={TUCK_SHOP} component={TuckShopScreen} />
        <ShopStack.Screen name={UNIFORM_SHOP} component={UniformShopScreen} />
        <ShopStack.Screen name={PRACTICALS_SHOP} component={PracticalsShopScreen} />
        <ShopStack.Screen name={SPORTS_SHOP} component={SportsShopScreen} />
        <ShopStack.Screen name={BOOK_SHOP} component={BookShopScreen} />
        <ShopStack.Screen name={GENERAL_STORE} component={GeneralStoreScreen} />
        </ShopStack.Navigator> 

    )
}

export default ShopNavigator