import React, {useContext,useState, useEffect} from 'react'
import {
  View,
  Text,
  StatusBar, 
  Image , 
  ImageBackground,
  } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import LottieView from 'lottie-react-native';

import colors from '../../assets/theme/colors';

import {GlobalContext} from '../../context/Provider'

import styles from './styles'

import {CommunicationBookData,StudentDetailsData} from '../../data'

import {
  Container, 
  ProfileHeader,
  HomeHeader,
  AnimatedText,
  StudentDetails,
  Homework, 
  ClickableBoxContainer,
  ShopBoxContainer,
  NoticeBoard,
  CustomButton
  } from '../../components'

import {
  HOME,
  REPORT,
  TIME_TABLE,
  SUBJECTS,
  SPORTS,
  PRACTICALS_AND_PROJECTS,
  CALA,
  CLUBS,
  HOMEWORK,
  CLASS_REQUIREMENTS,
  ADMIN_CHAT
  } from '../../constants/screenNames'
import {PROFILE_SCREEN_TITLE,COMMUNICATION_BOOK} from '../../constants/titles'
import { LOGOUT_USER } from '../../constants/actionTypes'
import {IMAGE, ICON,LOGO} from '../../constants/images'

import {MAX_WIDTH, MAX_HEIGHT} from '../../constants/General'

const ProfileScreen =({navigation})=>{  
  const [dets, setDets] = useState([])                      
  const {navigate} = useNavigation()
  const {
    adminOfflineAccess,
    loading, 
    userPresent, 
    setUserPresent,
    user, 
    details, 
    logout,
    studentDetails
    } =useContext(GlobalContext)
  const onProfilePress = () => {logout() }
  const onReportPress = () => {navigate(REPORT)}
  const onHumburgerPress = () => {navigation.toggleDrawer()}
  const onTimetablePress = () => {navigate(TIME_TABLE)}
  const onSubjectPress = () => {navigate(SUBJECTS)}
  const onPracticalsPress = () => {navigate(PRACTICALS_AND_PROJECTS)}
  const onSportsPress = () => {navigate(SPORTS)}
  const onClubsPress = () => {navigate(CLUBS)}
  const onCalaPress = () => {navigate(CALA)}
  const onHomeworkPress = () => {navigate(HOMEWORK)}
  const onRequirementsPress = () => {navigate(CLASS_REQUIREMENTS)}
  const onAdminPress = () => {navigate(ADMIN_CHAT)}
   

useEffect(()=>{
  console.log(user)
  console.log('details are :',details)
  let isMounted = true;
  if(!adminOfflineAccess){
    if (isMounted){
    const subscriber = studentDetails()
     }
    return () => { isMounted = false };  
  }
}, [])

if (loading){
  return (
    <View 
    style={{
      width:MAX_WIDTH, 
      height:MAX_HEIGHT, 
      justifyContent:'center',
      backgroundColor:colors.background ,
      alignItems:'center'
      }}
    >
     <View style={{flex:1, width:MAX_WIDTH, height:MAX_HEIGHT/2,justifyContent:'center', alignItems:'center'}}>
        <Image
        source={LOGO.SCHOOL_LOGO}
        resizeMode='contain'
        style={{width:MAX_WIDTH-30, height:MAX_WIDTH-30}}
        />
        </View>
    <View style={{width:MAX_WIDTH, height:MAX_WIDTH}}>
    <LottieView source={require('../../assets/animatedLoader/AnimatedLoader.json')} autoPlay loop />
    </View>
    </View>

  )
}
if(adminOfflineAccess){
  return(
    <Container>
   {
     StudentDetailsData.map(({id,name, level, rank,attendence},index)=>{
       return( 
         <View>
         < ProfileHeader title={PROFILE_SCREEN_TITLE} onHumburgerPress={onHumburgerPress}/>
         <View>
         <Text style={{textAlign:'center', fontSize:20, color:colors.main, fontWeight:'bold'}}>admin Offline Mode</Text>
          </View>
         <Container>
         <AnimatedText content='To access full privileges please login with adminOnline' />
         <StudentDetails
            avatar={IMAGE.STUDENT_PIC}
            onReportPress={onReportPress}
            name={name}
            key={id}
            studentID={id}
            level={level}
            rank={rank}
          />
           <Homework onPress={onHomeworkPress} />

        <View style={{flexDirection:'row'}}>
        <ClickableBoxContainer
        title='TimeTable'
        source={ICON.TIME_TABLE_ICON}
        onPress={onTimetablePress}
        />
        <View style={styles.verticalSeparator} />
        <ClickableBoxContainer
        title='Subjects'
        source={ICON.SUBJECTS_ICON}
        onPress={onSubjectPress}
        />
       </View>

        <View style={styles.horizontalSeparator}/>

       <View style={{flexDirection:'row'}}>
        <ClickableBoxContainer
        title='Projects And Practicals'
        source={ICON.PRACTICALS_AND_PROJECTS_ICON}
        onPress={onPracticalsPress}
        />
        <View style={styles.verticalSeparator}/>
        <ClickableBoxContainer
        title='Sports'
        source={ICON.SPORTS_ICON}
        onPress={onSportsPress}
        />
       </View>

       <View style={styles.horizontalSeparator}/>

       <View style={{flexDirection:'row'}}>
        <ClickableBoxContainer
        title='Clubs'
        source={ICON.CLUBS_ICON}
        onPress={onClubsPress}
        />

        <View style={styles.verticalSeparator} />

        <ClickableBoxContainer
        title='CALA'
        source={ICON.CALA_ICON}
        onPress={onCalaPress}
        />
        
       </View>
       <NoticeBoard 
       title={COMMUNICATION_BOOK} 
      notice={CommunicationBookData}
      onPress={onRequirementsPress}
       />
  </Container>
  </View>
          
        
       )
        
       
     })
   }
    </Container>
  )
}
if (!user) {
   <View 
    style={{
      width:MAX_WIDTH, 
      height:MAX_HEIGHT, 
      justifyContent:'center',
      backgroundColor:colors.background ,
      alignItems:'center'
      }}
    >
    <Text>Error Retriving User</Text>
    </View>
   }
 return(
      <Container>
    {
        details.length>0?(
          details.map((user)=>
          <View>
                   {

                     setUserPresent(true),
                     <>
                     < ProfileHeader title={PROFILE_SCREEN_TITLE} onHumburgerPress={onHumburgerPress} onProfilePress={onProfilePress}/>
                     <AnimatedText content='Covid 19 Protocols to be adhered to' />
                     <StudentDetails
                          avatar={{uri:user.avatar}}
                          key={user.uid}
                          onReportPress={onReportPress}
                          name={user.name}
                          studentID={user.studentID}
                          level={user.level}
                          rank={user.rank}
                            />
                        </>
                   }
        <Homework onPress={onHomeworkPress} />
       <View style={{flexDirection:'row'}}>
        <ClickableBoxContainer
        title='TimeTable'
        source={ICON.TIME_TABLE_ICON}
        onPress={onTimetablePress}
        />
        <View style={styles.verticalSeparator} />
        <ClickableBoxContainer
        title='Subjects'
        source={ICON.SUBJECTS_ICON}
        onPress={onSubjectPress}
        />
       </View>

        <View style={styles.horizontalSeparator}/>

       <View style={{flexDirection:'row'}}>
        <ClickableBoxContainer
        title='Projects And Practicals'
        source={ICON.PRACTICALS_AND_PROJECTS_ICON}
        onPress={onPracticalsPress}
        />
        <View style={styles.verticalSeparator}/>
        <ClickableBoxContainer
        title='Sports'
        source={ICON.SPORTS_ICON}
        onPress={onSportsPress}
        />
       </View>

       <View style={styles.horizontalSeparator}/>

       <View style={{flexDirection:'row'}}>
        <ClickableBoxContainer
        title='Clubs'
        source={ICON.CLUBS_ICON}
        onPress={onClubsPress}
        />

        <View style={styles.verticalSeparator} />

        <ClickableBoxContainer
        title='CALA'
        source={ICON.CALA_ICON}
        onPress={onCalaPress}
        />
        
       </View>
       <NoticeBoard 
       title={COMMUNICATION_BOOK} 
      notice={CommunicationBookData}
      onPress={onRequirementsPress}
       />
                  
          </View>
                )
        ):
        <View style={{width:MAX_WIDTH, height:MAX_HEIGHT-49}}>
         <StatusBar
          backgroundColor={colors.background}
         />
          < ProfileHeader title={PROFILE_SCREEN_TITLE} onHumburgerPress={onHumburgerPress} onProfilePress={onProfilePress}/>

        <View style={{flex:1, width:MAX_WIDTH, height:MAX_HEIGHT/2,justifyContent:'center', alignItems:'center'}}>
        <Image
        source={LOGO.SCHOOL_LOGO}
        resizeMode='contain'
        style={{width:MAX_WIDTH-30, height:MAX_WIDTH-30}}
        />
        </View>
         
         <View style={{flex:1,justifyContent:'flex-start', alignItems:'center', padding:10}}>
          <Text 
        style={{fontSize:25, textAlign:'center', fontWeight:'bold', color:colors.main}}>
        Sorry!!!!
        </Text>
        <Text 
        style={{fontSize:25, textAlign:'center', fontWeight:'bold',color:colors.main,}}>
        Your Account must have been suspended or does not exit, please contact admin
        </Text>
        <View style={{justifyContent:'center', alignItems:'center', width:MAX_WIDTH, height:75}}>
        <CustomButton title='Contact Admin' onPress={onAdminPress}/>
        </View>
        </View>
        </View>
        
        
      }
      </Container>
    ) 
    
}

export default ProfileScreen 

  