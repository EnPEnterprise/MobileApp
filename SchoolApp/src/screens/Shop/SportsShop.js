import React from 'react'
import {View,Text } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import styles from './styles'
import {SHOP_MENU } from '../../constants/screenNames'

import {Container,HomeHeader} from '../../components'
import colors from '../../assets/theme/colors';

const SportsShopScreen = ()=>{
    const {navigate} = useNavigation()
  const onBackPress = () => {navigate(SHOP_MENU)}
    return (
        <Container>
          <HomeHeader onBackPress={onBackPress}  title='Sports Shop'/>
        </Container>
    )
}

export default SportsShopScreen