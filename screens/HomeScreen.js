import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { COLORS, SIZES, backgrounds } from '../constants/app';
import Quiz from '../components/home/Quiz';
import Gallery from '../components/home/Gallery';
import HOME_DATA from '../constants/home/HomeData';

const Item = ({ title, content, img, keyID }) => (
  <ImageBackground source={img} style={{ width: SIZES.width }} imageStyle={{ opacity: .3}} >
    <LinearGradient colors={[ COLORS.transparentdarkOrange, COLORS.transparentdarkPurple]}>
      <View style={{ padding: SIZES.padding }} key={keyID}>
        <Text style={{ color: COLORS.white, alignSelf:'center', fontSize: SIZES.medium, fontWeight: 'bold', lineHeight: 50 }}>{title}</Text>
        {
          content && (
            content.map((string) => <Text style={{ color: COLORS.white ,justifyContent:'space-between', fontSize: SIZES.small, paddingHorizontal: 20, lineHeight: 25 }}>{'\t'}{string}</Text>)
          )
          }
      </View>
    </LinearGradient>
  </ImageBackground>

);

export default function HomeScreen() {
  return (
    <View>
      <View>  
        <ScrollView>
          <View>
            <Gallery />

          </View>
          {
            HOME_DATA.map(function(item){
              return (
                <View>
                  <Item title={item.title} content={item.content} img={item.image} key={item.id}/>
                  <View style={{ borderBottomColor: COLORS.white, borderBottomWidth: 1 }}/>
                </View>
              )
            })
          }
          <ImageBackground source={backgrounds.library} style={{ width: SIZES.width }}>
            <Quiz/>
          </ImageBackground>
        </ScrollView>
      </View>
    </View>
  );
}