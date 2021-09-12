import React from 'react'
import {Text, View, Image} from 'react-native'

import {Container,ProfileHeader, AccountsAccordion} from '../../components'
import {ACCOUNTS_SCREEN_TITLE} from '../../constants/titles'

import {MAX_WIDTH} from '../../constants/General'

import {ICON, LOGO} from '../../constants/images'

import colors from '../../assets/theme/colors';

import { AccountsData,StudentDetailsData} from '../../data'

const AccountsScreen =({navigation})=>{
      const onHumburgerPress = () => {navigation.toggleDrawer()}
    return( 
      <View style={{flex:1}}>
      <ProfileHeader onHumburgerPress={onHumburgerPress} title={ACCOUNTS_SCREEN_TITLE}/>
      <Container>
      <View style={{width:'100%', height:5}}/>
      <View style={{marginLeft:5,width:MAX_WIDTH-10, justifyContent:'center', alignItems:'center'}}>
     
      
       {
         StudentDetailsData.map(({name,id,level,},index)=>{
           return(
              <View style={{height:MAX_WIDTH/3, alignItems:'center', justifyContent:'center', width:MAX_WIDTH-10, backgroundColor:colors.lightMain,borderRadius:10}}>
                       <View style={{flexDirection:'row',padding:2.5}}>
              <View style={{flex:1, alignItems:'flex-end'}}>
                <Text style={{marginRight:20, fontSize:18,fontWeight:'bold', color:colors.main}}>Student Name :</Text>
              </View>
              <View style={{flex:1, alignItems:'flex-start'}}>
                <Text key={id} style={{textAlign:'center', fontSize:18, fontWeight:'bold', color:colors.main}}>{name}</Text>
              </View>
          </View>

       <View style={{flexDirection:'row', padding:2.5}}>
          <View style={{flex:1, alignItems:'flex-end'}}>
            <Text style={{marginRight:20, fontSize:15, fontWeight:'bold', color:colors.main}}>Student ID :</Text>
          </View>
       <View style={{flex:1, alignItems:'flex-start'}}>
          <Text key={id} style={{marginLeft:5, fontSize:15, fontWeight:'bold', color:colors.main}}>{id}</Text>
       </View>
      </View>

      <View style={{flexDirection:'row',padding:2.5}}>
          <View style={{flex:1,alignItems:'flex-end'}}>
             <Text style={{marginRight:10, color:colors.main, fontSize:15}}>Level :</Text>
          </View>
       <View style={{flex:1,alignItems:'flex-start'}}>
           <Text key={id} style={{marginLeft:10, color:colors.main, fontSize:15}}>{level}</Text>
       </View> 
      </View>
      </View>
           )
         })
       }
 
      <View style={{height:10, width:MAX_WIDTH}}/>
      </View>
      <AccountsAccordion 
      AccountsData={AccountsData}
      />
      <View style={{width:MAX_WIDTH, height:200}}/>
      <View 
      style={{
        width:MAX_WIDTH, height:50,flexDirection:'row',justifyContent: 'center', alignItems:'center'}}>
         <Image
          source={LOGO.ECO_CASH_LOGO}
          resizeMode='contain'
          style={{width:50, height:50}}
          />
          <View style={{width:10, height:50}}/>
          <Image
          source={LOGO.MASTER_CARD_LOGO}
          resizeMode='contain'
          style={{width:50, height:50}}
          />
          <View style={{width:10, height:50}}/>
          <Image
          source={LOGO.PAYPAL_LOGO}
          resizeMode='contain'
          style={{width:50, height:50}}
          />
          <View style={{width:10, height:50}}/>
          <Image
          source={LOGO.TELECASH_LOGO}
          resizeMode='contain'
          style={{width:50, height:50}}
          />
          <View style={{width:10, height:50}}/>
          <Image
          source={LOGO.VISA_LOGO}
          resizeMode='contain'
          style={{width:50, height:50}}
          />
          <View style={{width:10, height:50}}/>
          <Image
          source={LOGO.ZIM_SWITCH_LOGO}
          resizeMode='contain'
          style={{width:50, height:50}}
          />
      </View>
      </Container>
      </View>
    )
}
export default AccountsScreen 