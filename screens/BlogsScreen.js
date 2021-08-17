import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function BlogsScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.pageStyling}>

        <TouchableOpacity onPress={() => navigation.navigate("InterviewTennisStar")}>
          <Card>
            <Card.Cover source={require('../assets/images/blog-images/tennis-rackets.jpeg')} style={styles.cardCoverStyling} />
            <Card.Content style={styles.cardContentStyling}>
              <Title style={styles.titleText}>What Sets The Elite From The Rest : An Interview with a Tennis Star</Title>
            </Card.Content>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Tennis")}>
          <Card>
            <Card.Cover source={require('../assets/images/blog-images/tennis-player.jpeg')} style={styles.cardCoverStyling} />
            <Card.Content style={styles.cardContentStyling}>
              <Title style={styles.titleText}>Becoming a Champion of the Court (but without the racket)</Title>
            </Card.Content>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("AthletesAndPoker")}>
          <Card>
            <Card.Cover source={require('../assets/images/blog-images/poker-and-athletes.jpeg')} style={styles.cardCoverStyling} />
            <Card.Content style={styles.cardContentStyling}>
              <Title style={styles.titleText}>Why Many Athletes Make Great Poker Players (And Vice Versa)</Title>
            </Card.Content>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("BreakingOutOfSlump")}>
          <Card>
            <Card.Cover source={require('../assets/images/blog-images/running.jpeg')} style={styles.cardCoverStyling} />
            <Card.Content style={styles.cardContentStyling}>
              <Title style={styles.titleText}>Need to Break Out of Your Slump?</Title>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>
    </ScrollView>

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
    marginTop: 10,
    flexWrap: 'wrap'
  },

  cardContentStyling: {
    width: 170,
    height: 110,
    backgroundColor: 'firebrick',
    marginBottom: 10
  },

  cardCoverStyling: {
    position: 'relative',
    height: 180,
    width: 170,
  }
})