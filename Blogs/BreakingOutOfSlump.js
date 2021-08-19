import React from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { Paragraph } from "react-native-paper";

const BreakingOutOfSlump = () => {
  return (
    <ScrollView>
      <View style={styles.center}>
        <Text style={{ color: 'olivedrab', fontSize: 30, fontWeight: "bold", marginBottom: 20, marginTop: 20, width: 300 }}>Need to Break Out of Your Slump?</Text>
        <Image source={require('../assets/images/blog-images/running.jpeg')} style={{ width: 200, height: 300, textAlign: 'center', marginBottom: 20 }} />
        <Text style={{ color: 'black', fontSize: 15, marginBottom: 20 }}>By Frank Stola, Jul 9</Text>
        <Paragraph style={styles.paragraph}>
          It happens to every athlete. For days, weeks, or what seems like an eternity, you haven’t been playing up to your standard. You’re struggling, and you can’t seem to figure out why. You start pressing, desperate for success, and lose confidence in yourself as you question what has gone wrong. The term “slump” gets thrown around often in baseball but applies to all sports as well. It’s when your performance has fallen off in a bad way for an extended period of time. There are many ways to get out of a slump, and athletes respond differently to the wide variety of techniques. But no matter who you are, the mental side of your game is crucial in getting out of your slump. Building confidence through repetition, visualizing success, and taking a step back are some of the best ways to get your head in the game.
        </Paragraph>
        <Paragraph style={styles.paragraph}>
          <Text style={styles.highlighted}>Reps, reps, reps!</Text> It sounds obvious, but practice really works! Not only will your skills improve, but you will build more confidence in yourself mentally. This is also an important strategy for athletes who are nervous before a game. The only way you know you’re prepared is through effective repetition. Feeling the ball launch off your bat in the batting cage or hearing the sound of the net when your shot goes in is important. Your body and mind are becoming more accustomed to succeeding. Whether you’re aware of it or not, that muscle memory in the heat of the moment will help you. This sort of confidence will have you swinging at more pitches in the zone and firing shots without hesitation when you’re open. Remaining confident and aggressive, within reason, will help.
        </Paragraph>
        <Paragraph style={styles.paragraph}>
          There is often a mechanical reason for your slump as well. This requires constructive practice to tweak form. However, there are ways to correct yourself mentally moving forward. Many athletes have a specific routine they apply in a game to keep their mechanics consistent. You see this often with basketball players at the free-throw line. Gilbert Arenas, who played for the Wizards, famously wrapped the ball around his waist three times before taking his free throw, and he shot 80% at the line. Professional baseball players are known for their elaborate routines when stepping into the box, doing things such as tapping home plate with their bat or adjusting their gloves.
        </Paragraph>
        <Paragraph style={styles.paragraph}>
          <Text style={styles.highlighted}>Imagine success!</Text> A strong mental game is crucial for athletes playing at a high level. It is necessary for aspiring players to understand its potential. An aspect of this is visualization. When an athlete pictures themselves in a realistic moment in a game, they are preparing their brain to respond in the same way in real life. A ball flies in the air towards you as you’re running, and you catch it in stride. Visualize your routine stepping into the batter’s box, and watch the ball as it meets your bat when you hit a line drive into right field. This preparation lowers any anxiety or nervousness come gameday because you are more acclimated to your environment. Consistent visualization is really just mental reps that your muscles will listen to when the moment arrives, translating into real success.
        </Paragraph>
        <Paragraph style={styles.paragraph}>
          <Text style={styles.highlighted}>Know this happens to EVERYONE.</Text> The greatest athletes in the world have off days! Even Mariano Rivera blew a few saves. Major League Baseball players in particular are known for having awful stretches of play. It’s the nature of sports. Chris Davis signed a deal with the Baltimore Orioles for $161 million in 2016. He had a poor season in 2018 and was hoping a fresh start in 2019 would do him good. Instead, he broke an MLB record by going 0-54. Not a single hit for weeks. As a high profile player for the Orioles, there was no avoiding the relentless booing for a while. Eventually, people came around and began to support him through his struggles. Davis tried everything. He practiced more, practiced less, and tested different approaches at the plate. His positive mentality and perseverance showed the world his strong character. Dealing with adversity is one of the great lessons sports can teach.
        </Paragraph>
        <Paragraph style={styles.paragraph}>
          When you’re in a slump, you have to keep your composure and stay motivated. Understand that this will pass, and continue to strive towards your goals. The key is to not dwell on the past. Every new day, new game, and new shot is a fresh start. The best players are able to wipe their minds clean and forget about recent failures because their team needs them in the present. How can you ever expect to play well when you’re focused on how bad you were last time?
        </Paragraph>
        <Paragraph style={styles.paragraph}>
          <Text style={styles.highlighted}>Remember why you started!</Text> Worrying about what coaches, scouts, players, or even your parents think about your play will only hold you back. In fact, you’re there for a reason. Your coach and teammates trust you enough to put you in a position to help the team. That isn’t why you started playing your sport. Simplify things and appreciate your participation. Remove the high expectations and live in the present. Play for the fun of it—laugh with your teammates and celebrate when they succeed. No athlete is able to play forever, so enjoy every practice and game because whether you play well or not, one day you won’t play at all.
        </Paragraph>

      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  paragraph: {
    textAlign: 'justify',
    marginBottom: 25
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20
  },
  highlighted: {
    fontWeight: 'bold',
    color: 'olivedrab',
    fontSize: 20
  }
});

export default BreakingOutOfSlump;