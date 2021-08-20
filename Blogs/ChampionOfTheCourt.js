import React from "react";
import { View, StyleSheet, Text, Image, ScrollView, } from "react-native";
import { Paragraph } from "react-native-paper";

const ChampionOfTheCourt = () => {
  return (
    <ScrollView>
      <View style={styles.center}>
      <Image source={require('../assets/images/blog-images/tennis-player.jpeg')} style={{ width: 360, height: 200 }} />
      <Text style={{ color: 'darkblue', fontSize: 30, fontWeight: "bold", textAlign: 'center', marginBottom: 20, marginTop: 20 }}>Becoming a Champion of the Court {'\n'}(but without the racket)</Text>
        <Text style={{ color: 'black', fontSize: 15, marginBottom: 20 }}>By Claire Chin, Aug 6</Text>
        <Paragraph style={styles.paragraph}>

        </Paragraph>
        <Paragraph style={styles.paragraph}>
        When watching tennis from a screen, or maybe in the stands of a stadium, tennis may seem like a heavily physical sport—full of agility and endurance. The back-to-back shuffle, with a combination of forward and backward sprints, prove to be a testament of their physical strength. However, while the physical training helps with ball precision and court movement, it actually comes down to the mental toughness that ultimately helps the player win.
          </Paragraph>
          <Paragraph style={styles.paragraph}>
          When I started tennis, I thought that the sport was centered around chasing a neon green ball and playing to see who could hit the ball over the net in one bounce. Through practices, matchplays, and tournaments, I discovered that tennis was not something that you could just physically train for. Compared to other sports, tennis can be very lonely and more stressful. For hours you stand alone on one side of the court trying to motivate yourself to win. Being alone is hard, and having a 1 to 1 match garners more eyes and more pressure. Even on TV, you can often see  professionals raging or smashing rackets due to their weakening mentality. This is partly because of the scoring and length of this sport. It is super easy to spiral down from one mistake. The game itself has quite a lot of time to reflect which can lead to emotions of self-hatred and anger.
          </Paragraph>
          <Text style={styles.subtitle}>Rules of Tennis</Text>
          <Paragraph style={styles.paragraph}>
          To win a match in tennis, you have to win 2 out of 3 sets (at Grand Slams the males play 3 out of 5 sets), with each set consisting of 6 games. In the case of a set with 6-6 games, a tiebreaker is played and the number of points varies depending on the level you play at. The point system of games follows with 0 points = love, 1 points = 15, 2 points = 30, 3 points = 40, and 4 points to win the game. In the case of a tie at 40-40, also known as deuce, a player must win two more points in a row to win the game. The fastest way to win a match would be to win 48 points straight without making any mistakes; the longest professional match recorded had 980 points. Furthermore, just one point in a match could take as little as one minute to as much as twenty minutes. 
          </Paragraph>
          <Text style={styles.subtitle}>Approaching a match</Text>
          <Paragraph style={styles.paragraph}>
          Every match will put you in the center of attention. Like any other competition, there are always people better and worse than you. In tennis, the different levels of players can vary drastically because local tournaments are usually divided by age and not by ability. Therefore, there are so many mentalities a player can have going into their match. As an unseeded player— matched up against the first seed in the first round—they could go into the match thinking that they will be absolutely demolished. On the flip side, the first seed player could also go into the match thinking that everyone will be expecting them to not lose a single point. Following these mentalities, it would seem like the fate of the match is already determined. However, the outcome could drastically change and the unseeded player could go on winning—if they went for every single point during the entire match. In fact, so many matches like this have resulted in major upsets of every level. When approaching a match, no one should ever go into it thinking that they will come out as the victor. Instead, you should approach it with a mindset of going for every single point. If you go for every point, not only will you gain confidence that you played your best—no matter the outcome—but you will also decrease the chances of breaking down your mental toughness.
          </Paragraph>
          <Text style={styles.subtitle}>Playing Strategy</Text>
          <Paragraph style={styles.paragraph}>
          Many junior, or even professional, players often view mistakes as something wrong with them. Why couldn’t they run fast enough or why couldn’t they have hit a better shot? All players, despite their level, need to keep in mind that everyone makes mistakes. The best strategy should be to treat each point as a new starting point—regardless of the situation and score. Just because you are down by a few games or a set does not mean that there are no opportunities to win back the match. For other players trying to combat performance anxiety or practice mental toughness, they should try arranging more matchplays so they can understand how they respond to different levels of stress and pressure. Then through their own self growth, little mental adjustments can be made that can then be transferred physically. Mental toughness is different for everyone and it can only be learned and taught by yourself. Suggestions from coaches or fellow teammates can always be made, but when you are playing that match alone (or even with a doubles partner), you must remember little tips and tricks that keep your mind cool. A clear mind will help lead to more controlled and precise shots.
          </Paragraph> 
          <Text style={styles.subtitle}>Tiebreakers</Text>  
          <Paragraph style={styles.paragraph}>
          Tiebreakers in tennis are undoubtedly the most intense and stressful strings of points you play. After fighting for an hour or two, the end result of just that one set is up to 7 or 10 points. On top of that, crowds are attracted to watching tiebreakers and you might feel more eyes and pressure. In these kinds of situations, it’s best to block out all the distractions and focus on playing the great gameplay you were doing earlier. Great players, like Novak Djokovic, have admitted, 
          </Paragraph>
          <Paragraph style={styles.paragraph}>
          “I guess the more tiebreakers you win the more confidence you have. Coming into the tiebreak I think that mental edge and optimistic approach, knowing that you have a great record, helps.” To have gotten to the tiebreaker, you must have been doing something right up to this point. Try channeling whatever mindset you had before, even if you were just spiralling down. Like I’ve said before, playing every point like it’s a new point will refresh your mind and give you a calm appearance compared to your opponents.
          </Paragraph>
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
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
    color: 'darkblue',
    fontSize: 25,
    fontStyle: 'italic', 
    marginBottom: 20, 
    fontWeight: 'bold'
  }
});

export default ChampionOfTheCourt;