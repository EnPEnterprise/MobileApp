import React from 'react'
import {View,Text,StatusBar } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import styles from './styles'
import {SHOP_MENU } from '../../constants/screenNames'

import {Container,HomeHeader} from '../../components'
import colors from '../../assets/theme/colors';

const GeneralStoreScreen = ()=>{
    const {navigate} = useNavigation()
  const onBackPress = () => {navigate(SHOP_MENU)}
    return (
        <Container>
               <StatusBar
              currentHeight={10}
              backgroundColor={colors.main}
      />
          <HomeHeader onBackPress={onBackPress}  title='General Store'/>
        </Container>
    )
}

export default GeneralStoreScreen