import React, { useState } from 'react';
import { Card, Title } from 'react-native-paper';
import { ScrollView, Stylesheet, Text, View, Linking } from 'react-native';
import { WebView} from 'react-native-webview';

export default function Podcasts() {
 
  
    return (

      <WebView
       
        source={{ uri: 
          'https://open.spotify.com/show/68Vu1ivMbFDM0567vnRP88?http=1'
        }}
       
       
      
      />

 
  
    );
  }