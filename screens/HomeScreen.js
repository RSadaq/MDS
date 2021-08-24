import React from 'react';
import {
  ScrollView,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { COLORS, SIZES, backgrounds } from '../constants';
import Quiz from '../home/Quiz';
import Gallery from '../home/Gallery';
import HOME_DATA from '../home/HomeData';

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
                  textAlign:'justify',
                  fontSize: SIZES.p,
                  fontWeight: 'bold',
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
                  textAlign:'justify',
                  fontWeight: 'bold',
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
      <View style={{ backgroundColor:'firebrick', height:60, paddingTop:5}}>
        <View style={{flexDirection:'row', paddingHorizontal: 8, justifyContent:'space-around'}}>
        <FontAwesome5 name="running" size={30} color="white" style={{ marginTop: 10}} />
          <Text style={{color:COLORS.white, fontSize:SIZES.medium, fontStyle:'italic', fontWeight:'bold', textAlign: 'center'}}>Improving Bodies and Minds in Sport. {'\n'}BY teens, FOR teens! </Text>
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