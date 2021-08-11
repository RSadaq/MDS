import React, { useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import { backgrounds } from '../constants';

export default function FAQsScreen() {
    return (  
    <ImageBackground source={backgrounds.soccer} resizeMode='cover' style={{ flex:1, justifyContent:'center' }} imageStyle={{ top:-80 }}>
              
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>FAQs!</Text>
                

            </View>
    </ImageBackground>
     
    );
  }