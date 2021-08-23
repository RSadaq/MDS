import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  ImageBackground,
} from 'react-native';
// import TextTicker from 'react-native-text-ticker'
import { FontAwesome5 } from '@expo/vector-icons';

import { COLORS, SIZES, backgrounds } from '../constants';
import Quiz from '../components/home/Quiz';
import Gallery from '../components/home/Gallery';
import HOME_DATA from '../constants/home/HomeData';


const Item = ({ title, content, img, Textcolor }) => {
  const isBG = img ? true : false;  

  return(
    isBG 
      ? <ImageBackground source={img} style={{ paddingVertical: 20, paddingBottom: 40}} imageStyle={{ opacity: .3}} > 
          <View style={{ padding: SIZES.padding }} >
            <Text style={{
              color: Textcolor,
              alignSelf:'center',
              fontSize: SIZES.large,
              fontWeight: 'bold',
              lineHeight: 50,
              paddingBottom: 10,
            }}>
              {title}
            </Text>
            {
              content && (
                content.map((string) => 
                <Text key={string.substring(0,3)}
                style={{
                  color: Textcolor,
                  textAlign:'center',
                  fontSize: SIZES.p,
                  paddingHorizontal: 20,
                  lineHeight: 25,
                  paddingBottom: 10,
                }}>
                  {string}
                </Text>)
              )
            }
          </View>
        </ImageBackground>
      : <View style={{ paddingVertical: 20, paddingBottom: 40}} >
          <View style={{ padding: SIZES.padding }} >
            <Text style={{
              color: Textcolor,
              alignSelf:'center',
              fontSize: SIZES.large,
              fontWeight: 'bold',
              lineHeight: 50,
            }}>
              {title}
            </Text>
            {
              content && (
                content.map((string) => 
                <Text key={string.substring(0,3)}
                style={{
                  color: Textcolor,
                  textAlign:'center',
                  fontSize: SIZES.p,
                  paddingHorizontal: 20,
                  lineHeight: 25,
                }}>
                  {string}
                </Text>)
              )
            }
          </View>
        </View>
)};

export default function HomeScreen() {
  return (
    <View>
      <View style={{ backgroundColor:'firebrick', height:35, paddingTop:5}}>
        <View style={{flexDirection:'row', paddingHorizontal: 8, justifyContent:'space-around'}}>
          <Text style={{color:COLORS.white, fontSize:SIZES.small, fontStyle:'italic', fontWeight:'bold'}}>Improving bodies and minds in sport. By teens, for teens   </Text>
          <FontAwesome5 name="running" size={20} color="white" />
        </View>
      </View>
      <ScrollView
        keyboardShouldPersistTaps='never'
      >
        <Gallery />
        {
          HOME_DATA.map(function(item){
            return (
              <View key={item.id}>
                <Item title={item.title} content={item.content} img={item.image} key={item.id} Textcolor={item.color}/>
              </View>
            )
          })
        }
        <ImageBackground source={backgrounds.library} style={{ width: SIZES.width, marginBottom: 140}} key="quiz1">
          <Quiz/>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}
