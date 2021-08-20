import React from "react";
import { View, StyleSheet, Text, Image, ScrollView, Linking } from "react-native";
import { Paragraph } from "react-native-paper";

const DealingWithFans = () => {
    return (
        <ScrollView>
            <View style={styles.center}>
                <Image source={require('../assets/images/blog-images/cycling.jpeg')} style={{ width: 360, height: 230 }} />
                <Text style={{ color: 'green', fontSize: 30, fontWeight: "bold", textAlign: 'center', marginBottom: 20, marginTop: 20 }}>Dealing With Fans For the First Time?</Text>
                <Text style={{ color: 'black', fontSize: 15, marginBottom: 20 }}>By Frank Stola, Jul 2</Text>
                <Paragraph style={styles.paragraph}>
                    The transition from middle school and/or travel ball into the world of high school sports is a big step in your career. Athletes become bigger, stronger, and faster, and a higher level of commitment is often expected. But, maybe the most significant change is the crowd. For most athletes, the first time playing in front of a lot of people will be in varsity sports. This is also when local newspapers will start to cover teams and their players. There is a sense that the game “matters” more than it did in the past while becoming more intense. Some athletes will flourish under this pressure, and some will not. A sports psychologist helps athletes with various mental or emotional concerns relating to their sport. They can increase your ability to hone in and focus on the game, rather than the audience. This focus is critical to dealing with the fan environment. Otherwise, you may be distracted by the crowd or fall victim to pressure.
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                    It is common knowledge that fans can have both positive and negative effects on your game. Through booing, cheering, or taunting, they can insert themselves into a match. The absence of fans during Covid-19 in 2020 was a clear reminder of how different a game is without them. Most athletes play with a level of motivation that they would not have without a crowd because sports are meant to entertain an audience. There was no home crowd to play for and no jeering crowd to ignore on the road. When people watch athletes play, athletes feel the urge to perform at a higher level. It is a human instinct that affects people in different ways. This is a phenomenon known as “social facilitation” that occurs in musicians, athletes, and other kinds of performers. Through this transition into packed high school stadiums, you will inevitably learn a little more about how you react to a bigger stage.
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                    The key to playing to your expectations, or better in front of people, is to simply focus. Pressure is nothing more than a perception. The desire to win is overtaken by a fear of losing while your heart beat rises and anxiety sets in as you find a way to avoid this. Athletes who struggle with pressure overthink their actions or play with extreme caution, in order to not make a mistake. If you let pressure get to you, there are a lot of ways that things can go wrong. A ball could take an unexpected bounce, the rain could impact your ability to catch a ball, or your teammates could make mistakes. All of these things, to an extent, are out of your control. So, the goal is to stop putting mental energy towards what you can’t change.
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                    Jeff Locke, a punter for the Minnesota Vikings, worked with a sports psychologist to improve his mental approach to the game after coming off a season in which his stats were not as impressive as usual. Instead of worrying about having a perfect game, he began to take it one punt at a time. Every athlete has a routine. When you practice it enough, concentrating on the routine will guarantee your best effort in that moment. This concentration will also filter out all the noise that doesn’t matter from the crowd. Jeff Locke found success through concentrating on the right things. This is sound advice for any athlete wondering how they can handle a crazier environment.
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                    One way to take advantage of a crowd is through excitement. Imagine how awesome having a good performance and winning would be. The fact that pressure can be a good or bad thing means that it is only what you make it out to be. So, embrace it and use it as motivation to practice harder and visualize positive results. This visualization can be worked on at any time. Imagine yourself in your sport, going through the motions you practice every day, and succeeding in front of a huge stadium of fans. Visualizing yourself in specific game-related situations, like these, actually prepares your mind to not be overwhelmed when the moment comes because it has been practicing.
                </Paragraph>
                <Image source={require('../assets/images/blog-images/lungs.jpeg')} style={{ width: 300, height: 200, marginBottom: 30, marginTop: 10 }} />
                <Paragraph style={styles.paragraph}>
                    Another quick tip is to breathe. Anxious situations make your breath short and not as effective. Focusing on your breathing can take you back to a feeling of comfort where you can have a personal moment to remind yourself to be confident. Slowly breathe in for about four seconds, hold it for another four, and then slowly let air out again for four seconds. These are tactics used by public speakers, soldiers, and performers of all kinds. Breathing like this for a few seconds will inevitably relieve some tension.
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                    If you’re worried about how you’ll perform on a bigger stage, your mindset needs to change. Focus on the moment, not the outcome. Play to win, don’t play to not lose. Embrace the challenge rather than being scared of it. And know that no result means the end of the world. Life will go on no matter how important a game is to you. And have fun! No performer gets to be on a stage forever; the days of playing in front of a crowd will end no matter how good you are. This is one fleeting moment in your life where you will be able to show how good you and your team are. You cannot control the past, so don’t think about it. Focus on the present moment to shape a future you’re excited about.
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
    }
});

export default DealingWithFans;