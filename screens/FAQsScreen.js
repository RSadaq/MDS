import React, { useState } from 'react';
import { Dimensions, ImageBackground, ScrollView, Text, View } from 'react-native';
import { backgrounds } from '../constants';

import Accordion from '../constants/Accordion'
export default function FAQsScreen() {

    return (  
        <ScrollView>  
              <Accordion/>
        </ScrollView>     

    );
  }