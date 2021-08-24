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
          { title: 'The Sport-Mind Avenue Episode 14: USA is #1, NFL Vaccine Talk, and Field of Dreams Game', image: field, symbol: podcast, text: 'Listen', url: 'https://open.spotify.com/episode/3iFPCmofS7plcqxNmrayj1', key: '1' },
          { title: 'Tactics to Secure Sports Scholarships - EP18 w/Tessa Berger', image: scholarships, symbol: podcast, text: 'Listen', url: 'https://open.spotify.com/episode/2aAQlMyXZJRHEY5xN7Yhq1', key: '2' },
          { title: 'The Sport-Mind Avenue Episode 13: Simone Biles Discussion, MLB Trade Deadline, and NBA Free', image: simone, symbol: podcast, text: 'Listen', url: 'https://open.spotify.com/episode/1yUgIFCcLREo9y5qwVv21G', key: '3' },
          { title: 'The Sport-Mind Avenue Episode 12: Bucks Win NBA Finals, Unruly MLB Fans, and NHL Expansion', image: nba, symbol: podcast, text: 'Listen', url: 'https://open.spotify.com/episode/3TY7vb8EhczhBwXkzFyddD', key: '4' },
          { title: 'Episode 11: Call of Duty League Executive Producer Michael Berger, Ohtani Talk, and Playoff', image: callOfDuty, symbol: podcast, text: 'Listen', url: 'https://open.spotify.com/episode/1dNEO16nYhULdcII5MJ0NB', key: '5' },
          { title: 'The Mindset to The Olympics - EP17 w/George Steffey', image: mindset, symbol: podcast, text: 'Listen', url: 'https://open.spotify.com/episode/6uB1CvME17Yr6cSL086R2I', key: '6'},

        ]}
        renderItem={({ item }) =>
          <View style={styles.container}>
            <Image style={styles.image} source={item.image} />
            <Text style={styles.title}>{item.title}</Text>
            <View style={{ flexDirection: 'column'}}>
            <Image style={styles.clipart} source={item.symbol} />
            <Text style={styles.text}  onPress={() => Linking.openURL(item.url)}>{item.text}</Text>
            </View>
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
    borderWidth: 6, 
    borderColor: 'firebrick', 
    marginTop: 2, 
    marginLeft: 5, 
    marginRight: 5, 
    paddingVertical: 5, 
    borderRadius: 20, 
    height: 110,
    backgroundColor: 'mintcream'
  },
  image: {
    height: 50, 
    width: 50, 
    marginTop: 7, 
    marginLeft: 5, 
    borderRadius: 50
  }, 
  title: {
    marginLeft: 10, 
    width: 150, 
    marginTop: 4 
  }, 
  clipart: {
    height: 30, 
    width: 30, 
    marginBottom: 5, 
    marginLeft: 60, 
    marginTop: 5, 
  }, 
  text: {
    fontSize: 15,
    marginLeft: 57, 
    color: 'midnightblue', 
    fontWeight: 'bold'
  }

  
});