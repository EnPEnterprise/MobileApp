import React, { Component } from 'react'
import {useNavigation} from '@react-navigation/native'
import {StatusBar } from 'react-native'
import {
  Text, 
  View, 
  StyleSheet, 
  Button, 
  Alert, 
  TouchableOpacity
  } from 'react-native'

import {
  CustomButton,
  Container, 
  Carousel, 
  HomeBoxContainer, 
  NoticeBoard, 
  StaffOnDuty
  } from '../../components'
  
import colors from '../../assets/theme/colors'
import {LOGIN_STACK, STAFF} from '../../constants/screenNames'
import {WEATHER, LOGIN, TIME, ANNOUNCEMENTS, UPCOMING_EVENTS} from '../../constants/titles'

import {
      AnnouncementsData,
    CarouselHomeImages,
     UpcomingEventsData 
} from '../../data'

import {MAX_WIDTH} from '../../constants/General'

const HomeScreen =()=>{  
      const {navigate} = useNavigation()
      const onLoginPress = () => {navigate(LOGIN_STACK)}
      const onStaffPress = () => {navigate(STAFF)}
     return(
    <Container>
     <StatusBar
              currentHeight={10}
              backgroundColor={colors.main}
      />
    <View>
      <Carousel  images={CarouselHomeImages}/> 
      <View style={styles.staffView}>
      <StaffOnDuty onPress={onStaffPress} /> 
      </View> 
      <View style={styles.buttonView}>
      <CustomButton title={LOGIN} onPress={onLoginPress} />
      </View>
      </View>
      <View style={styles.boxView}>
      <HomeBoxContainer 
      style={styles.weather}
      reading='19°C' 
      icon='Clouds'
      comment='Chilly'
      title={WEATHER}
      />
      <View style={styles.separator} />
      <HomeBoxContainer 
      reading='10:00' 
      icon='Clock'
      comment='At Break'
      title={TIME}
      />
      </View>
      <View>
      <NoticeBoard  
      title={ANNOUNCEMENTS} 
      notice={AnnouncementsData}
      />
      <NoticeBoard  
      title={UPCOMING_EVENTS}
      notice={UpcomingEventsData}
      />
      </View>
    </Container>
         )
    
}

const styles = StyleSheet.create({
  buttonView:{
 elevation: 1, 
 position:'absolute',
 marginLeft: 330,
 marginTop: 10
  },
    staffView:{
 elevation: 1, 
 position:'absolute',
 marginLeft: 30,
 marginTop: 10
  },
  boxView:{
    flexDirection:'row',
    flex: 1
  },
  separator: {
    width: 1,
    height: (MAX_WIDTH/2),
    color: colors.background
  },

})

export default HomeScreen;
