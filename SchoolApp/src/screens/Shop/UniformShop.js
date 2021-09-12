import React from 'react'
import {View,Text, StatusBar } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import styles from './styles'
import {SHOP_MENU } from '../../constants/screenNames'
import {IMAGE, ICON,LOGO} from '../../constants/images'

import {Container,HomeHeader,ShopBoxContainer} from '../../components'
import colors from '../../assets/theme/colors';

const UniformShopScreen = ()=>{
    const {navigate} = useNavigation()
  const onBackPress = () => {navigate(SHOP_MENU)}
    return (
        <Container>
               <StatusBar
              currentHeight={10}
              backgroundColor={colors.main}
      />
          <HomeHeader onBackPress={onBackPress}  title='Uniform Shop'/>
          <View style={{width:'100%', height:50}}/>
          <View style={{flexDirection:'row'}}>
          <ShopBoxContainer
          name='blazer'
          price='US $60'
          source={ICON.UNIFORM_SHOP_ICON}
          count='0'
          />
          <ShopBoxContainer
          name='tie'
          price='US $10'
          source={ICON.UNIFORM_SHOP_ICON}
          count='2'
          />
          </View>
          <View style={{flexDirection:'row'}}>
          <ShopBoxContainer
          name='jersey'
          price='US $30'
          source={ICON.UNIFORM_SHOP_ICON}
          count='1'
          />
          <ShopBoxContainer
          name='socks'
          price='US $2'
          source={ICON.UNIFORM_SHOP_ICON}
          count='15'
          />
          </View>
        </Container>
    )
}

export default UniformShopScreen