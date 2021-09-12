import React, {useContext, useEffect,useState,useRef} from 'react'
import {View, Text,Animated,TouchableOpacity} from 'react-native'

import {useNavigation} from '@react-navigation/native'

import {Container, HomeHeader,StudentReport, ReportHeaderContainer, ReportCardRow,ProgressBar } from '../../components'

import {GlobalContext} from '../../context/Provider'
import colors from '../../assets/theme/colors'

import styles from './styles'

import {IMAGE,ICON} from '../../constants/images'

import {PROFILE} from '../../constants/screenNames'
import {REPORT_SCREEN_TITLE} from '../../constants/titles'

import {StudentDetailsData,ReportData,HeadmasterCommentData} from '../../data'

import {MAX_WIDTH,MAX_HEIGHT} from '../../constants/General'

const ReportScreen =()=>{
    const {adminOfflineAccess,details} =useContext(GlobalContext)
    const [exeat, setExeat]= useState(false)
    const [endOfTerm, setEndOfTerm]= useState(true)
    const [termOne, setTermOne]=useState(true)
    const [termTwo, setTermTwo]=useState(false)
    const [termThree, setTermThree]=useState(false)
    const [currentIndex, setCurrentIndex]=useState(null)

 
  const ref = useRef()
    

      const animatedValue =useRef(new Animated.Value(-1000)).current;
      const reactive = useRef(new Animated.Value(-1000)).current



    const onTermOnePress=()=>{
      setTermOne(true),
      setTermTwo(false),
      setTermThree(false)
    }
    const onTermTwoPress=()=>{
      setTermOne(false),
      setTermTwo(true),
      setTermThree(false)
    }
    const onTermThreePress=()=>{
      setTermOne(false),
      setTermTwo(false),
      setTermThree(true)
    }

    console.log('termOne', termOne)
    console.log('termTwo', termTwo)
    console.log('termThree', termThree)


    const {navigate} = useNavigation()
    const onBackPress = () => {navigate(PROFILE)}

    const onExeatPress = () => {
      setExeat(true),
      setEndOfTerm(false)
    }

    const onEndOfTermPress = () => {
      setExeat(false),
      setEndOfTerm(true)
    }



if(!adminOfflineAccess){
  return(
    <Container>
      <HomeHeader title={REPORT_SCREEN_TITLE} onBackPress={onBackPress} />
       {
        details.map((user)=>{
          return(
            <StudentReport
               avatar={{uri:user.avatar}}
               key={user.key}
               name={user.name}
               studentID={user.studentID}
               level={user.level}
               rank={user.rank}
            />
          )
        })
      }
    </Container>
  )
}
  return( 
      <Container>
      {
        StudentDetailsData.map(({id,name, level, rank,attendence},index)=>{
          return(
            <View>
              <HomeHeader title={REPORT_SCREEN_TITLE} onBackPress={onBackPress} />
              <StudentReport
                avatar={IMAGE.STUDENT_PIC}
                name={name}
                key={id}
                studentID={id}
                level={level}
                rank={rank}
                />
            </View>
          )
        })
      }
      <View style={{width:MAX_WIDTH, height:40, flexDirection:'row'}}>
         
        
          <View style={[
            exeat?styles.activeView:styles.inactiveView
          ]}>
            <TouchableOpacity onPress={onExeatPress}>
            
              <Text style={[
                exeat?styles.activeText: styles.inactiveText
              ]}>Exeat Weekend</Text>
             
            </TouchableOpacity>
          </View>
      

           <View style={[
             endOfTerm?styles.activeView: styles.inactiveView
             ]}>
            <TouchableOpacity onPress={onEndOfTermPress} >
            
              <Text style={[
                endOfTerm?styles.activeText: styles.inactiveText
              ]}>End Of Term</Text>
             
            </TouchableOpacity>
          </View>
      </View>
      {
        termOne?(
          <>      
      {
        exeat?
        <Container>
        <View style={styles.separator}/>
        <ReportHeaderContainer />
        <View style={styles.separator}/>
        {
          ReportData.map(({id,subject,classAverage,studentMark,symbol,subjectRank,attendance,teacherComment},index)=>{    
            return(
              <View>
              <View style={{flexDirection:'row'}}>
                <ReportCardRow 
               subject={subject}
               classAverage={classAverage}
               studentMark={studentMark}
               symbol= {
                                  (studentMark>=90 && studentMark<=100)?<Text>A*</Text>:
                                  (studentMark>=80 && studentMark<90)?<Text>A</Text>:
                                  (studentMark>=70 && studentMark<80)?<Text>B</Text>:
                                  (studentMark>=60 && studentMark<70)?<Text>C</Text>:
                                  (studentMark>=50 && studentMark<60)?<Text>D</Text>:
                                  (studentMark>=40 && studentMark<50)?<Text>E</Text>:
                                  (studentMark<40)?<Text>U</Text>:
                                  <Text>X</Text>
                    }
               iconSource={
                 index===currentIndex?ICON.DROP_UP_ICON:ICON.DROP_DOWN_ICON
               }
               onIconPress={()=>{
                  setCurrentIndex(index===currentIndex?null:index)
               }}
               />
                  
               </View>
               {
                 index === currentIndex &&(
                   <View style={{flexGrow:1, width:'100%', backgroundColor:colors.lightBackground}}>
                    <View style={{width:'100%', height:20}} />

                    <View style={{width:'100%', justifyContent:'center',marginLeft:10, marginBottom:20,  height:30}}>
                    <View style={{width:'100%', height:25, flexDirection:'row'}}>
                    <Text style={{color:colors.main, marginLeft:10, fontWeight:'bold'}}>Rank :</Text>
                    <Text style={{color:colors.main, marginLeft:2,fontWeight:'bold'}}>{subjectRank}</Text>
                    </View>
                     
                        <View style={{flexDirection:'row'}}>
                              <View style={{flex:1.5, width:'100%',justifyContent:'center',}}>
                             <ProgressBar studentMark={studentMark} step={studentMark} steps={100} height={12} />
                              </View>

                            
                              <View style={{justifyContent:'center',marginLeft:10, alignItems:'flex-start',marginBottom:5, flexGrow:0.3}}>
                               
                                {
                                  (studentMark>=90 && studentMark<=100)?<Text style={{padding:2,color:colors.main, fontWeight:'bold'}}>Excellent</Text>:
                                  (studentMark>=80 && studentMark<90)?<Text style={{padding:2,color:colors.main, fontWeight:'bold'}}>Great</Text>:
                                  (studentMark>=70 && studentMark<80)?<Text style={{padding:2,color:colors.main, fontWeight:'bold'}}>Very Good</Text>:
                                  (studentMark>=60 && studentMark<70)?<Text style={{padding:2,color:colors.main, fontWeight:'bold'}}>Good</Text>:
                                  (studentMark>=50 && studentMark<60)?<Text style={{padding:2,color:colors.main, fontWeight:'bold'}}>Satisfactory</Text>:
                                  (studentMark>=40 && studentMark<50)?<Text style={{padding:2,color:colors.main, fontWeight:'bold'}}>fail</Text>:
                                  (studentMark<40)?<Text style={{padding:2,color:colors.main, fontWeight:'bold'}}>ungraded</Text>:
                                  null
                                }
                              </View>

                        </View>
                        

                    </View>

                    <View style={{marginLeft:10}}>
                        <Text style={{color:colors.main, fontWeight:'bold'}}>Teacher's comment</Text>
                        <View style={{flexGrow:1, width:MAX_WIDTH/1.15, justifyContent:'center', alignItems:'flex-start', borderRadius:10,backgroundColor:colors.lightMain}}>
                        <Text style={{padding:10, color:colors.main}}>{teacherComment}</Text>
                        </View>
                    </View>
                 
                 <View style={{width:'100%', height:20}} />

                   </View>
                 )
               }
               <View style={styles.separator}/>
              </View>
            )
          })
        }
        <View style={{width:'100%', height:50}}/>
        <View style={{width:'100%', }}>
        
        
        
        <View style={{marginLeft: 10,backgroundColor:colors.lightBackground, width:MAX_WIDTH-20, flexGrow:1, borderRadius:10}}>
        <View style={{width:'100%', height:50, backgroundColor:colors.lightMain, justifyContent:'center'}}>
        <Text style={{marginLeft: 10,color:colors.main, fontWeight:'bold', fontSize:15 }}>Headmaster's Commment</Text>
        </View>
          {
             HeadmasterCommentData.map(({id,comment},index)=>{
               return(
                  <Text key={id} style={{ fontSize:15, padding:10, color:colors.main}}>{comment}</Text>
               )
             })
          }

        
        </View>
        </View>
        
        </Container>:
        endOfTerm?
        <Container>
        <View style={styles.separator}/>
        <ReportHeaderContainer />
        <View style={styles.separator}/>
      
         {
          ReportData.map(({id,subject,classAverage,studentMark,symbol,subjectRank,attendance,teacherComment},index)=>{
            return(
              <View>
             <ReportCardRow 
               subject={subject}
               classAverage={classAverage}
               studentMark={studentMark}
               symbol=
                  {
                                  (studentMark>=90 && studentMark<=100)?<Text>A*</Text>:
                                  (studentMark>=80 && studentMark<90)?<Text>A</Text>:
                                  (studentMark>=70 && studentMark<80)?<Text>B</Text>:
                                  (studentMark>=60 && studentMark<70)?<Text>C</Text>:
                                  (studentMark>=50 && studentMark<60)?<Text>D</Text>:
                                  (studentMark>=40 && studentMark<50)?<Text>E</Text>:
                                  (studentMark<40)?<Text>U</Text>:
                                  <Text>X</Text>
                    }
               
               />
               <View style={styles.separator}/>
              </View>
            )
          })
        }
        <Text>End Of Term </Text>
        </Container>:null
      }</>
        ):
        termTwo?(
          <>
        {
        exeat?
        <Container>
        <View style={styles.separator}/>
        <ReportHeaderContainer />
        <View style={styles.separator}/>
        {
          ReportData.map(({id,subject,classAverage,studentMark,symbol,subjectRank,attendance,teacherComment},index)=>{    
            return(
              <View>
              <View style={{flexDirection:'row'}}>
                <ReportCardRow 
               subject={subject}
               classAverage={classAverage}
               studentMark={studentMark}
               symbol= {
                                  (studentMark>=90 && studentMark<=100)?<Text>A*</Text>:
                                  (studentMark>=80 && studentMark<90)?<Text>A</Text>:
                                  (studentMark>=70 && studentMark<80)?<Text>B</Text>:
                                  (studentMark>=60 && studentMark<70)?<Text>C</Text>:
                                  (studentMark>=50 && studentMark<60)?<Text>D</Text>:
                                  (studentMark>=40 && studentMark<50)?<Text>E</Text>:
                                  (studentMark<40)?<Text>U</Text>:
                                  <Text>X</Text>
                    }
               iconSource={
                 index===currentIndex?ICON.DROP_UP_ICON:ICON.DROP_DOWN_ICON
               }
               onIconPress={()=>{
                  setCurrentIndex(index===currentIndex?null:index)
               }}
               />
                  
               </View>
               {
                 index === currentIndex &&(
                   <View style={{flexGrow:1, width:'100%', backgroundColor:colors.lightBackground}}>
                    <View style={{width:'100%', height:20}} />

                    <View style={{width:'100%', justifyContent:'center',marginLeft:10, marginBottom:20,  height:30}}>
                    <View style={{width:'100%', height:25, flexDirection:'row'}}>
                    <Text style={{color:colors.main, marginLeft:10, fontWeight:'bold'}}>Rank :</Text>
                    <Text style={{color:colors.main, marginLeft:2,fontWeight:'bold'}}>{subjectRank}</Text>
                    </View>
                     
                        <View style={{flexDirection:'row'}}>
                              <View 
                              style={{
                                flex:1.5, 
                                width:'100%',
                                justifyContent:'center', 
                              
                                }}
                                >
                              <ProgressBar studentMark={studentMark} step={studentMark} steps={100} height={12} />
                              </View>

                            
                              <View style={{justifyContent:'center',marginLeft:10, alignItems:'flex-start',marginBottom:5, flexGrow:0.3}}>
                               
                                 {
                                  (studentMark>=90 && studentMark<=100)?<Text style={{color:colors.main, fontWeight:'bold'}}>Excellent</Text>:
                                  (studentMark>=80 && studentMark<90)?<Text style={{color:colors.main, fontWeight:'bold'}}>Great</Text>:
                                  (studentMark>=70 && studentMark<80)?<Text style={{color:colors.main, fontWeight:'bold'}}>Very Good</Text>:
                                  (studentMark>=60 && studentMark<70)?<Text style={{color:colors.main, fontWeight:'bold'}}>Good</Text>:
                                  (studentMark>=50 && studentMark<60)?<Text style={{color:colors.main, fontWeight:'bold'}}>Satisfactory</Text>:
                                  (studentMark>=40 && studentMark<50)?<Text style={{color:colors.main, fontWeight:'bold'}}>fail</Text>:
                                  (studentMark<40)?<Text style={{color:colors.main, fontWeight:'bold'}}>ungraded</Text>:
                                  null
                                }
                              </View>

                        </View>
                        

                    </View>

                    <View style={{marginLeft:10}}>
                        <Text style={{color:colors.main, fontWeight:'bold'}}>Teacher's comment</Text>
                        <View style={{flexGrow:1, width:MAX_WIDTH/1.15, justifyContent:'center', alignItems:'flex-start', borderRadius:10,backgroundColor:colors.lightMain}}>
                        <Text style={{padding:10, color:colors.main}}>{teacherComment}</Text>
                        </View>
                    </View>
                 
                 <View style={{width:'100%', height:20}} />

                   </View>
                 )
               }
               <View style={styles.separator}/>
              </View>
            )
          })
        }
        <View style={{width:'100%', height:50}}/>
        <View style={{width:'100%', }}>
        
        
        
        <View style={{marginLeft: 10,backgroundColor:colors.lightBackground, width:MAX_WIDTH-20, flexGrow:1, borderRadius:10}}>
        <View style={{width:'100%', height:50, backgroundColor:colors.lightMain, justifyContent:'center'}}>
        <Text style={{marginLeft: 10,color:colors.main, fontWeight:'bold', fontSize:15 }}>Headmaster's Commment</Text>
        </View>
          {
             HeadmasterCommentData.map(({id,comment},index)=>{
               return(
                  <Text key={id} style={{ fontSize:15, padding:10, color:colors.main}}>{comment}</Text>
               )
             })
          }

        
        </View>
        </View>
        
        </Container>:
        endOfTerm?
        <Container>
        <View style={styles.separator}/>
        <ReportHeaderContainer />
        <View style={styles.separator}/>
      
         {
          ReportData.map(({id,subject,classAverage,studentMark,symbol,subjectRank,attendance,teacherComment},index)=>{
            return(
              <View>
             <ReportCardRow 
               subject={subject}
               classAverage={classAverage}
               studentMark={studentMark}
               symbol=
                  {
                                  (studentMark>=90 && studentMark<=100)?<Text>A*</Text>:
                                  (studentMark>=80 && studentMark<90)?<Text>A</Text>:
                                  (studentMark>=70 && studentMark<80)?<Text>B</Text>:
                                  (studentMark>=60 && studentMark<70)?<Text>C</Text>:
                                  (studentMark>=50 && studentMark<60)?<Text>D</Text>:
                                  (studentMark>=40 && studentMark<50)?<Text>E</Text>:
                                  (studentMark<40)?<Text>U</Text>:
                                  <Text>X</Text>
                    }
               
               />
               <View style={styles.separator}/>
              </View>
            )
          })
        }
        <Text>End Of Term </Text>
        </Container>:null
      }
          </>
        ):
        termThree?(
          <>
        {
        exeat?
        <Container>
        <View style={styles.separator}/>
        <ReportHeaderContainer />
        <View style={styles.separator}/>
        {
          ReportData.map(({id,subject,classAverage,studentMark,symbol,subjectRank,attendance,teacherComment},index)=>{    
            return(
              <View>
              <View style={{flexDirection:'row'}}>
                <ReportCardRow 
               subject={subject}
               classAverage={classAverage}
               studentMark={studentMark}
               symbol= {
                                  (studentMark>=90 && studentMark<=100)?<Text>A*</Text>:
                                  (studentMark>=80 && studentMark<90)?<Text>A</Text>:
                                  (studentMark>=70 && studentMark<80)?<Text>B</Text>:
                                  (studentMark>=60 && studentMark<70)?<Text>C</Text>:
                                  (studentMark>=50 && studentMark<60)?<Text>D</Text>:
                                  (studentMark>=40 && studentMark<50)?<Text>E</Text>:
                                  (studentMark<40)?<Text>U</Text>:
                                  <Text>X</Text>
                    }
               iconSource={
                 index===currentIndex?ICON.DROP_UP_ICON:ICON.DROP_DOWN_ICON
               }
               onIconPress={()=>{
                  setCurrentIndex(index===currentIndex?null:index)
               }}
               />
                  
               </View>
               {
                 index === currentIndex &&(
                   <View style={{flexGrow:1, width:'100%', backgroundColor:colors.lightBackground}}>
                    <View style={{width:'100%', height:20}} />

                    <View style={{width:'100%', justifyContent:'center',marginLeft:10, marginBottom:20,  height:30}}>
                    <View style={{width:'100%', height:25, flexDirection:'row'}}>
                    <Text style={{color:colors.main, marginLeft:10, fontWeight:'bold'}}>Rank :</Text>
                    <Text style={{color:colors.main, marginLeft:2,fontWeight:'bold'}}>{subjectRank}</Text>
                    </View>
                     
                        <View style={{flexDirection:'row'}}>

                              <View style={{flex:1.5, width:'100%',justifyContent:'center'}}>
                                 <ProgressBar studentMark={studentMark} step={studentMark} steps={100} height={12} />
                              </View>

                            
                              <View style={{justifyContent:'center',marginLeft:10, alignItems:'flex-start',marginBottom:5, flexGrow:0.3}}>
                               
                                {
                                  (studentMark>=90 && studentMark<=100)?<Text style={{color:colors.main, fontWeight:'bold'}}>Excellent</Text>:
                                  (studentMark>=80 && studentMark<90)?<Text style={{color:colors.main, fontWeight:'bold'}}>Great</Text>:
                                  (studentMark>=70 && studentMark<80)?<Text style={{color:colors.main, fontWeight:'bold'}}>Very Good</Text>:
                                  (studentMark>=60 && studentMark<70)?<Text style={{color:colors.main, fontWeight:'bold'}}>Good</Text>:
                                  (studentMark>=50 && studentMark<60)?<Text style={{color:colors.main, fontWeight:'bold'}}>Satisfactory</Text>:
                                  (studentMark>=40 && studentMark<50)?<Text style={{color:colors.main, fontWeight:'bold'}}>fail</Text>:
                                  (studentMark<40)?<Text style={{color:colors.main, fontWeight:'bold'}}>ungraded</Text>:
                                  null
                                }
                              </View>

                        </View>
                        

                    </View>

                    <View style={{marginLeft:10}}>
                        <Text style={{color:colors.main, fontWeight:'bold'}}>Teacher's comment</Text>
                        <View style={{flexGrow:1, width:MAX_WIDTH/1.15, justifyContent:'center', alignItems:'flex-start', borderRadius:10,backgroundColor:colors.lightMain}}>
                        <Text style={{padding:10, color:colors.main}}>{teacherComment}</Text>
                        </View>
                    </View>
                 
                 <View style={{width:'100%', height:20}} />

                   </View>
                 )
               }
               <View style={styles.separator}/>
              </View>
            )
          })
        }
        <View style={{width:'100%', height:50}}/>
        <View style={{width:'100%', }}>
        
        
        
        <View style={{marginLeft: 10,backgroundColor:colors.lightBackground, width:MAX_WIDTH-20, flexGrow:1, borderRadius:10}}>
        <View style={{width:'100%', height:50, backgroundColor:colors.lightMain, justifyContent:'center'}}>
        <Text style={{marginLeft: 10,color:colors.main, fontWeight:'bold', fontSize:15 }}>Headmaster's Commment</Text>
        </View>
          {
             HeadmasterCommentData.map(({id,comment},index)=>{
               return(
                  <Text key={id} style={{ fontSize:15, padding:10, color:colors.main}}>{comment}</Text>
               )
             })
          }

        
        </View>
        </View>
        
        </Container>:
        endOfTerm?
        <Container>
        <View style={styles.separator}/>
        <ReportHeaderContainer />
        <View style={styles.separator}/>
      
         {
          ReportData.map(({id,subject,classAverage,studentMark,symbol,subjectRank,attendance,teacherComment},index)=>{
            return(
              <View>
             <ReportCardRow 
               subject={subject}
               classAverage={classAverage}
               studentMark={studentMark}
               symbol=
                  {
                                  (studentMark>=90 && studentMark<=100)?<Text>A*</Text>:
                                  (studentMark>=80 && studentMark<90)?<Text>A</Text>:
                                  (studentMark>=70 && studentMark<80)?<Text>B</Text>:
                                  (studentMark>=60 && studentMark<70)?<Text>C</Text>:
                                  (studentMark>=50 && studentMark<60)?<Text>D</Text>:
                                  (studentMark>=40 && studentMark<50)?<Text>E</Text>:
                                  (studentMark<40)?<Text>U</Text>:
                                  <Text>X</Text>
                    }
               
               />
               <View style={styles.separator}/>
              </View>
            )
          })
        }
        <Text>End Of Term </Text>
        </Container>:null
      }
          </>
        ):null
      }
    

    <View style={{width:'100%', height:50}}/>
        <View style={{backgroundColor:colors.main,flexDirection:'row', height:50, width:'100%'}}> 

            <View style={{height:'100%', flex:1,justifyContent:'center', alignItems:'center'}}>

            <TouchableOpacity onPress={onTermOnePress}>
            <Text 
            style={
              termOne?{fontSize:20, color:colors.lightBackground,fontWeight:'bold'}:
              {fontSize:20, color:'black',fontWeight:'bold'}
            }
            >Term 1</Text>
            </TouchableOpacity>

            </View>

        <View style={{height:'100%', width:1, backgroundColor:colors.lightBackground}}/>
        
        <View style={{height:'100%', flex:1,justifyContent:'center', alignItems:'center'}}>
        
         <TouchableOpacity onPress={onTermTwoPress}>
            <Text 
            style={
              termTwo?{fontSize:20, color:colors.lightBackground,fontWeight:'bold'}:
              {fontSize:20, color:'black',fontWeight:'bold'}
            }
            >Term 2</Text>
          </TouchableOpacity>
      
        </View>
        
        <View style={{height:'100%', width:1, backgroundColor:colors.lightBackground}}/>
        
        <View style={{height:'100%', flex:1,justifyContent:'center', alignItems:'center'}}>
         <TouchableOpacity onPress={onTermThreePress}>
            <Text 
            style={
              termThree?{fontSize:20, color:colors.lightBackground,fontWeight:'bold'}:
              {fontSize:20, color:'black',fontWeight:'bold'}
            }
            >Term 3</Text>
          </TouchableOpacity>
        </View>
    </View>
    </Container>
    )
}
export default ReportScreen 