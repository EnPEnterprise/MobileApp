import React, {useContext} from 'react'
import {Text,View,ImageBackground,Image,TouchableOpacity,Alert  } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import { StatusBar} from 'react-native'

import {GlobalContext} from '../../context/Provider'

import {Container,HomeHeader,ProfileHeader,Carousel,ClickableBoxContainer} from '../../components'

import {
  HOME,
  TUCK_SHOP,
  UNIFORM_SHOP,
  PRACTICALS_SHOP,
  SPORTS_SHOP,
  BOOK_SHOP,
  GENERAL_STORE,
    } from '../../constants/screenNames'
import {SHOP_SCREEN_TITLE} from '../../constants/titles'

import colors from '../../assets/theme/colors';

import { CarouselShopImages} from '../../data'

import {ICON} from '../../constants/images'

import styles from './styles'

import {MAX_WIDTH, MAX_HEIGHT} from '../../constants/General'


const ShopMenuScreen =({navigation})=>{
     const {user, adminAccess} =useContext(GlobalContext)
      const {navigate} = useNavigation()
      const onBackPress = () => {navigate(HOME)}
      const onHumburgerPress = () => {navigation.toggleDrawer()}
      const onLockPress = () =>{Alert.alert('login','to access tuck shop please log in')}
      const onTuckShopPress = () => {navigate(TUCK_SHOP)}
      const onUniformShopPress = () => {navigate(UNIFORM_SHOP)}
      const onPracticalsShopPress = () => {navigate(PRACTICALS_SHOP)}
      const onSportsShopPress = () => {navigate(SPORTS_SHOP)}
      const onBookShopPress= () => {navigate(BOOK_SHOP)}
      const onGeneralStorePress = () => {navigate(GENERAL_STORE)}
    return(
        <Container>
             <StatusBar
              currentHeight={10}
              backgroundColor={colors.main}
      />
         {
         (user|| adminAccess)?
         <ProfileHeader title={SHOP_SCREEN_TITLE} onHumburgerPress={onHumburgerPress} />
         :
         <HomeHeader title={SHOP_SCREEN_TITLE} onBackPress={onBackPress} 
         />
         }
         <Carousel  images={CarouselShopImages}/>
      <View style={styles.clickableView}>
       <View style={{width:MAX_WIDTH/2,height:MAX_WIDTH/2,}}>
        {
        (user|| adminAccess)?
        <ClickableBoxContainer
        title='Tuck Shop'
        source={ICON.TUCK_SHOP_ICON}
        onPress={onTuckShopPress}
        />:
        <TouchableOpacity onPress={onLockPress}>
        <View style={{width:MAX_WIDTH/2,height:MAX_WIDTH/2}}>
        <View style={{flex:2, justifyContent:'center', alignItems:'center'}}>

        <ImageBackground 
         source={ICON.TUCK_SHOP_ICON}
         resizeMode='contain'
         style={{width:150, height:150}}
        >
        <View style={{justifyContent:'center', alignItems:'center', padding:5, opacity:0.8 }}>
        <Image
         source={ICON.LOCK_ICON}
         resizeMode='contain'
         style={{width:150, height:150}}
        />
        </View>
        </ImageBackground>
        </View>
        <View style={{flex:0.5, justifyContent:'center', alignItems:'center'}}>
         <Text style={{color:colors.main, textAlign:'center',fontSize:20}}>Tuck Shop</Text>
        </View>
        </View>
        </TouchableOpacity>
        }
        
        </View>
        <View style={styles.verticalSeparator}/>
        <ClickableBoxContainer
        title='Uniforms Shop'
        source={ICON.UNIFORM_SHOP_ICON}
        onPress={onUniformShopPress}
        />
       </View>
       <View style={styles.horizontalSeparator}/>
              <View style={styles.clickableView}>
        <ClickableBoxContainer
        title='Practicals Shop'
        source={ICON.PRACTICALS_SHOP_ICON}
        onPress={onPracticalsShopPress}
        />
        <View style={styles.verticalSeparator}/>
        <ClickableBoxContainer
        title='Sports Shop'
        source={ICON.SPORTS_SHOP_ICON}
        onPress={onSportsShopPress}
        />
       </View>
     <View style={styles.horizontalSeparator}/>
              <View style={styles.clickableView}>
        <ClickableBoxContainer
        title='Book Shop'
        source={ICON.BOOK_SHOP_ICON}
        onPress={onBookShopPress}
        />
        <View style={styles.verticalSeparator}/>
        <ClickableBoxContainer
        title='General Store'
        source={ICON.GENERAL_SHOP_ICON}
        onPress={onGeneralStorePress}
        />
       </View>
       
        </Container>
    )
}
export default ShopMenuScreen