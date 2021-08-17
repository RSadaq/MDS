import React, { useState } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Card, Title } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function BlogsScreen({ navigation }) {
  return (

    <View style={styles.pageStyling}>
      <TouchableOpacity onPress={() => navigation.navigate("Tennis")}>
        <Card containerStyle={styles.cardStyling}>
          <Card.Cover source={require('../assets/images/blog-images/tennis-player.jpeg')} style={styles.cardCoverStyling} />
          <Card.Content style={styles.cardContentStyling}>
            <Title style={styles.titleText}>Becoming a Champion of the Court (but without the racket)</Title>
          </Card.Content>
        </Card>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Running")}>
        <Card containerStyle={styles.cardStyling}>
          <Card.Cover source={require('../assets/images/blog-images/running.jpeg')} style={styles.cardCoverStyling} />
          <Card.Content style={styles.cardContentStyling}>
            <Title style={styles.titleText}>Need to break out of your slump?</Title>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 12,
    fontStyle: 'italic',
    fontWeight: "bold",
    color: 'white'
  },

  pageStyling: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  },

  cardStyling: {
    marginLeft: 5, 
    marginRight: 5, 
    marginTop: 20, 
    height: 230, 
    width: 170
  }, 

  cardContentStyling: {
    width: 170, 
    height: 110,  
    backgroundColor: 'firebrick'
  }, 

  cardCoverStyling: {
    position: 'relative', 
    height: 180, 
    width: 170 
  }
})