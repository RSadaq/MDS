import React from "react";
import { View, StyleSheet, Text, Image, ScrollView, Linking } from "react-native";
import { Paragraph } from "react-native-paper";

const AthletesAndPoker = () => {
  return (
    <ScrollView>
      <View style={styles.center}>
        <Image source={require('../assets/images/blog-images/poker-and-athletes.jpeg')} style={{ width: 360, height: 200 }} />
        <Text style={{ color: 'black', fontSize: 30, fontWeight: "bold", textAlign: 'center', marginBottom: 20, marginTop: 20 }}>Why Many Athletes Make Great Poker Players (And Vice Versa)</Text>
        <Text style={{ color: 'black', fontSize: 15, marginBottom: 20 }}>By Julie J. McCubbin, Jul 20</Text>
        <Text style={styles.subtitle}>Is Poker a Sport or a Game? </Text>
        <Paragraph style={styles.paragraph}>
          This question has boggled minds for decades, and the debate continues. In 2008, for instance, Baseball Fit founder Steve Zawrotny wrote that sports <Text style={styles.hyperlink}
            onPress={() => Linking.openURL('https://bleacherreport.com/articles/34697-golf-poker-etc-game-or-sport')}>have to have an athletic component</Text> — meaning games like poker, chess, and golf should remain just that: games.
        </Paragraph>
        <Paragraph style={styles.paragraph}>
          Meanwhile, others believe that poker is a sport; It's entertaining, competitive, and needs to be practiced for players to master it. That's why many believe that athletes make great poker players, and why many professional athletes love poker so much.
        </Paragraph>
        <Text style={styles.subtitle}>Poker is entertaining</Text>
        <Paragraph style={styles.paragraph}>
          Already popular in the US to begin with, the pandemic has aided the further boom of online casinos. In particular, New Jersey-based online poker companies <Text style={styles.hyperlink}
            onPress={() => Linking.openURL('https://www.marketwatch.com/story/online-poker-companies-continue-to-make-more-money-than-ever-during-the-pandemic-11607090841')}>saw revenues increase</Text> by 106.7% between October 2019 and October 2020.
        </Paragraph>
        <Paragraph style={styles.paragraph}>
          One thing that makes poker so entertaining is the social component. Like in other sports, poker strategies need to take into account the attitudes of other players and how that affects the game.
        </Paragraph>
        <Paragraph style={styles.paragraph}>
          That's why athletes who know how to weaponize their opponents' abilities are so good at poker. UFC star Martin Kampmann, for instance, has had years of experience with the psychological component of mixed martial arts (MMA) -- where mind games are the norm between opponents. Also, in 2014, he even won over $52,000 at the Nevada Poker Challenge.
        </Paragraph>
        <Paragraph style={styles.paragraph}>
          Not knowing what your opponents will do next helps to keep you on the edge of your seat. If you happen to lose by a whisker, you'll want a rematch. Even poker films like <Text style={{ fontWeight: 'bold' }}>Rounders</Text> and <Text style={{ fontWeight: 'bold' }}>Molly's Game</Text> have proven to be wildly successful because they are highly entertaining.
        </Paragraph>
        <Text style={styles.subtitle}>Poker is competitive</Text>
        <Paragraph style={styles.paragraph}>
          Competition is another thing that makes poker so likeable for athletes and sports fans alike. Each game has a winning hand, and players literally have to compete to succeed. Field hockey player and Olympic gold medalist Fatima Moreira de Melo in particular is one athlete who's breaking barriers in a game where the average player is male. De Melo is known to be fiercely competitive both on the field and at the poker table, and at one point she even brought home $540,000.
        </Paragraph>
        <Paragraph style={styles.paragraph}>
          Furthermore, much like esports, poker usually doesn't require a high level of physical exertion to make for a compelling tournament. Consequently, hundreds of thousands of people tune in to watch the World Series of Poker (WSOP) and the World Poker Tour (WPT) Championships, where rings, bracelets, and trophies are handed out to the victors.
        </Paragraph>
        <Text style={styles.subtitle}>Poker needs practice</Text>
        <Paragraph style={styles.paragraph}>
          Finally, as with most sports, practice makes perfect in poker, especially since a lot of strategy is involved in the game. At first, <Text style={styles.hyperlink}
            onPress={() => Linking.openURL('https://www.poker.org/beginners-guide-to-the-rules-of-poker/')}>the rules of poker </Text>will be easy to learn, but they'll be hard to master. What matters the most is how dedicated you are to perfecting your skills.
        </Paragraph>
        <Paragraph style={styles.paragraph}>
          Any athlete that's taken the time to master their own sport will have the discipline to master others, too. Famed German tennis star Boris Becker exemplifies this: after becoming a tennis pro at 17, he went on to win 6 Grand Slam trophies. He then retired and brought the same work ethic to poker, winning over $40,000 at the 2009 Diamond World Poker Championship.
        </Paragraph>
        <Paragraph style={styles.paragraph}>
          "I like to win. I don't like to lose. But most of all, I love to play," Becker said. Clearly, his motivations and love for the two sports have driven him to where he is today.
        </Paragraph>
        <Text style={styles.subtitle}>Wrapping up</Text>
        <Paragraph style={styles.paragraph}>
          By now, it's clear that poker is not just a game but a sport that one needs to train in to excel at. More than anything else, though, poker is a game that requires great mental skill and strategizing to hone your cognitive abilities. So if you're an athlete, poker is a great way for you to help your mind keep up with your body, making you holistically fit in a way you've never been before.
        </Paragraph>
        <Paragraph style={styles.paragraph}>
          Want the best of the best to mentor the next generation of athletes at your local school? Check out Mind-Design Sports' Athlete Connection Program <Text style={styles.hyperlink}
            onPress={() => Linking.openURL('https://www.mind-designsports.org/connection-program')}>here!</Text>
        </Paragraph>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20
  },
  paragraph: {
    textAlign: 'justify',
    marginBottom: 20
  },
  subtitle: {
    color: 'firebrick',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  hyperlink: {
    color: 'blue',
    fontWeight: 'bold',
    textDecorationLine: 'underline'

  }
});

export default AthletesAndPoker;