import React, {useContext} from 'react'
import {Text ,View} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import {GlobalContext} from '../../context/Provider'

import {NewsData} from '../../data'

import {Container,HomeHeader,ProfileHeader} from '../../components'

import {HOME} from '../../constants/screenNames'
import {NEWS_SCREEN_TITLE} from '../../constants/titles'

const NewsScreen =({navigation})=>{ 
     const {user, adminAccess} =useContext(GlobalContext)
      const {navigate} = useNavigation()
      const onBackPress = () => {navigate(HOME)}
      const onHumburgerPress = () => {navigation.toggleDrawer()}
    return(
        <Container>
        {
         (user|| adminAccess)?
         <ProfileHeader title={NEWS_SCREEN_TITLE} onHumburgerPress={onHumburgerPress} />
         :
         <HomeHeader title={NEWS_SCREEN_TITLE} onBackPress={onBackPress} 
         />
         }

      {
          NewsData.map(({id,topstory,heading,subheading,image,date,data}, index)=>{
              return(
                  <View style={{flexGrow:1, width:'100%'}}>
                  <Text>{heading}</Text>
                  </View>
              )

          })
      }
        </Container>
    )
}
export default NewsScreen