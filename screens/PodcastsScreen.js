import React, { useState } from 'react';
import { Stylesheet, Text, View, FlatList, StyleSheet, Linking, Image } from 'react-native';
import { call } from 'react-native-reanimated';

const field = require('../assets/images/podcast-images/field-of-dreams.jpeg');
const mindset = require('../assets/images/podcast-images/olympics-mindset.jpeg');
const scholarships = require('../assets/images/podcast-images/sports-scholarships.jpeg');
const simone = require('../assets/images/podcast-images/simone-biles.jpeg');
const nba = require('../assets/images/podcast-images/nba.jpeg');
const callOfDuty = require('../assets/images/podcast-images/call-of-duty.jpeg');
const podcast = require('../assets/images/podcast-images/podcast-clipart.png');


export default function Podcasts() {

  return (

    <View>
      <FlatList

        data={[
          { title: 'The Sport-Mind Avenue Episode 14: USA is #1, NFL Vaccine Talk, and Field of Dreams Game', image: field, symbol: podcast, key: '1' },
          { title: 'Tactics to Secure Sports Scholarships - EP18 w/Tessa Berger', image: scholarships, symbol: podcast, key: '2' },
          { title: 'The Sport-Mind Avenue Episode 13: Simone Biles Discussion, MLB Trade Deadline, and NBA Free', image: simone, symbol: podcast, key: '3' },
          { title: 'The Sport-Mind Avenue Episode 12: Bucks Win NBA Finals, Unruly MLB Fans, and NHL Expansion', image: nba, symbol: podcast, key: '4' },
          { title: 'Episode 11: Call of Duty League Executive Producer Michael Berger, Ohtani Talk, and Playoff', image: callOfDuty, symbol: podcast, key: '5' },
          { title: 'The Mindset to The Olympics - EP17 w/George Steffey', image: mindset, symbol: podcast, key: '6'},

        ]}
        renderItem={({ item }) =>
          <View style={styles.container}>
            <Image style={styles.image} source={item.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Image style={styles.clipart} source={item.symbol} />

          </View>

        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    borderStyle: 'solid', 
    borderWidth: 4, 
    borderColor: 'firebrick', 
    marginTop: 2, 
    marginLeft: 5, 
    marginRight: 5, 
    paddingVertical: 5, 
    borderRadius: 5
  },
  image: {
    height: 50, 
    width: 50, 
    marginTop: 5, 
    marginLeft: 5, 
    borderRadius: 50
  }, 
  title: {
    marginLeft: 10, 
    width: 200, 
    marginTop: 4 
  }, 
  clipart: {
    height: 45, 
    width: 45, 
    marginBottom: 20, 
    marginLeft: 30, 
    marginTop: 5

  }

  
});