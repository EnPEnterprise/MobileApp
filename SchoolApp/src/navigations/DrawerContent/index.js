import React from 'react'
import {View, Image} from 'react-native'
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'
import {
    DrawerItem
} from '@react-navigation/drawer'

import colors from '../../assets/theme/colors';
import {ICON,LOGO} from '../../constants/images'
import {CLASS_PAGE,PROFILE_BOTTOM_TAB,ACCOUNTS,TRACK,SCHOOL_DOC,ABOUT_US,ONLINE,SETTINGS} from '../../constants/screenNames'

import {MAX_WIDTH, MAX_HEIGHT} from '../../constants/General'
import {DRAWER_LOGO}from '../../constants/titles'

import {CircleContainer, Container} from '../../components'

import styles from './styles'

const DrawerContent = (props)=>{
    return(
        <Container>
        <View style={styles.headerImage}>
          <CircleContainer 
          source={LOGO.SCHOOL_LOGO} 
          title={DRAWER_LOGO}
          />
        </View>
          <Drawer.Section  
          
          >
            <DrawerItem
             icon={()=>(
             <Image 
             source={ICON.ACCOUNTS_ICON} 
             style={styles.iconImage}  
             resizeMode='contain' 
             />
             )
             } 
             labelStyle={{color:colors.main,fontSize:18}}
              label='Student Accounts'
              onPress={()=>{props.navigation.navigate(ACCOUNTS)}}
            />
             <DrawerItem
             icon={()=>(
             <Image 
             source={ICON.CLASS_PAGE_ICON} 
             style={styles.iconImage} 
             resizeMode='contain' 
             />
             )
             } 
              label='Class Page'
              labelStyle={{color:colors.main,fontSize:18}}
              onPress={()=>{props.navigation.navigate(CLASS_PAGE )}}
            />
             <DrawerItem
             icon={()=>(
             <Image 
             source={ICON.TRACK_ICON} 
             style={styles.iconImage}  
             resizeMode='contain' 
             />
             )
             } 
              label='Track Your Child'
              labelStyle={{color:colors.main,fontSize:18}}
              onPress={()=>{props.navigation.navigate(TRACK)}}
            />
             <DrawerItem
             icon={()=>(
             <Image 
             source={ICON.SCHOOL_DOC_ICON} 
             style={styles.iconImage} 
             resizeMode='contain' 
             />
             )
             } 
              label='School Doctor'
              labelStyle={{color:colors.main,fontSize:18}}
              onPress={()=>{props.navigation.navigate(SCHOOL_DOC)}}
            />
             <DrawerItem
             icon={()=>(
             <Image 
             source={ICON.SETTINGS_ICON} 
             style={styles.iconImage}  
             resizeMode='contain' 
             />
             )
             } 
              label='Settings'
              labelStyle={{color:colors.main,fontSize:18}}
              onPress={()=>{props.navigation.navigate(SETTINGS)}}
            />
             <DrawerItem
             icon={()=>(
             <Image 
             source={ICON.ONLINE_ICON} 
             style={styles.iconImage} 
             resizeMode='contain' 
             />
             )
             } 
              label='Online Facilities'
              labelStyle={{color:colors.main,fontSize:18}}
              onPress={()=>{props.navigation.navigate(ONLINE)}}
            />
             <DrawerItem
             icon={()=>(
             <Image 
             source={ICON.ACTIVE_ABOUT_ICON} 
             style={styles.iconImage} 
             resizeMode='contain' 
             />
             )
             } 
              label='About Us'
              labelStyle={{color:colors.main,fontSize:18}}
              onPress={()=>{props.navigation.navigate(ABOUT_US)}}
            />
          </Drawer.Section>
        </Container>
    )
}
export default DrawerContent