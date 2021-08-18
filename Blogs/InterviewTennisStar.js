import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { Paragraph } from "react-native-paper";

const InterviewTennisStar = () => {
  return (
    <ScrollView>
      <View style={styles.center}>
        <Text style={{ color: 'steelblue', fontSize: 30, fontWeight: "bold" }}>What Sets The Elite From The Rest: An Interview with a Tennis Star</Text>
        <Text style={{ color: 'black', fontSize: 15 }}>By Priyaanka Sarkar, Aug 13</Text>
        <Image source={require('../assets/images/blog-images/tennis-rackets.jpeg')} style={{ width: 320, height: 200, marginTop: 20 }} />
        <Paragraph style={{ textAlign: 'justify' }}>
          Niki Kaliyanda Poonacha is an Indian professional tennis player. He is a right-handed tennis player currently ranked 760th in the world.
          His best singles ranking came in 2019 placing  605th. He famously defeated Lucas and is also the national champion and
          South Asian Federation Games gold medalist. He is currently a panel member with the International Tennis Federation. {'\n'}{'\n'}
          One of Niki's greatest achievements was defeating Lucas Rosol -- ranked 26th in the world -- in the Bengaluru Open back in 2020.
          Lucas Rosol gained recognition when he defeated Rafael Nadal in the 2nd round of Wimbledon Singles back in 2012. {'\n'}{'\n'}
          Currently, he is practicing at Rohan Bopanna Tennis Academy, Bengaluru. He will be representing Mumbai Leon Army in the
          Tennis Premier League scheduled for December 2021. Niki’s hobbies are reading books and watching movies. We sat with Niki
          and asked him few questions and here they are:
        </Paragraph>
        <Text style={styles.questions}>
          1 -  How much information did you have about COVID-19 initially and how did you manage to keep yourself physically fit during the lockdown?
        </Text>
        <Text style={styles.answers}>
          Niki: “I had enough information regarding COVID-19. Knowing that it spreads quickly, with symptoms showing up after 3-4 days was scary.”
          So I was careful. I had a routine and my coaches sent me the fitness plan but I had no one to check if I was following the routine.
          I know it is hard to motivate yourself for a period of six months without stepping outside.
          I invited my tennis friends for a group workout session and we worked out twice every day.
          That way, we pushed each other and stayed motivated too.”
        </Text>
        <Text style={styles.questions}>
          2 - Can you walk us through how you start your days right now, compared to before the pandemic?
        </Text>
        <Text style={styles.answers}>
          Niki: “To be honest, as a sportsperson, you are accustomed to a schedule and you follow that to keep yourself fit. I did the same.
          I now wake at 5.30 in the morning and get ready to do some exercises. I then meditate for a few minutes, eat breakfast, and go to practice.
          It was a little different from before lockdown since we had a group fitness session at nine in the morning during the lockdown.
          The only change was that I woke up a little later during the lockdown.”
        </Text>
        <Text style={styles.questions}>
          3 - With the pandemic hitting all aspects of our lives, how important was it to be mentally strong and
          how did you manage to keep yourself "In the Zone"?
        </Text>
        <Text style={styles.answers}>
          Niki: “We all know how hard it was mentally. We lived in a period of uncertainty.
          As the saying goes, "An idle mind is the devil’s workshop", the main challenge was to stay mentally strong.  I knew I had to stay strong and the answer was not to stay idle.
          I had a routine at 9 in the morning at four in the evening group fitness workout. I also picked up meditation and followed it twice a day. To satisfy my passion for business,
          I entered the entrepreneurial world and kept myself busy throughout the day. Exploring different options and picking up business ideas kept me busy and
          focused on the present allowing me to not think about the future.”


        </Text>
        <Text style={styles.questions}>
          4 - Have you had to adjust your goals due to the pandemic?  How did you do that?
        </Text>
        <Text style={styles.answers}>
          Niki: “I am a professional tennis player and I knew tennis would resume once the period of the lockdown was over.
          Fortunately, the Association of Tennis Professionals (ATP) and ITF did a good job freezing everyone’s ranking till 2022.
          I didn’t have to change my goals entirely, but “I did change them a little to suit the current circumstances.
          My main goal was to train harder and get back to playing as many tournaments as possible.”
        </Text>
        <Text style={styles.questions}>
          5 -  What were the major emotional/mental issues you had to face during the pandemic and how did you deal with them?
        </Text>
        <Text style={styles.answers}>
          Niki: “Major emotions were boredom and uncertainty of the future. “For someone who played tournaments and kept myself engaged,
          it was boring to be idle - at least during the first few days.” So, I made sure I was doing something and kept myself engaged.
          I wrote a routine at first and followed it religiously. Because tennis was my main source of income. Not knowing how long this would continue was scary.
          Never had I once imagined that I would be sitting at home not playing tennis for at least 6 months. Then I realized that it was out of my hands and nothing could be done.
          I told myself that it is important to have the same willpower and the desire to win matches while staying mentally healthy so that once I start playing I can do better than before.”


        </Text>
        <Text style={styles.questions}>
          6 - Did you follow any strategy to keep yourself away from the anxieties and frustrations of not being able to play the sport?
        </Text>
        <Text style={styles.answers}>
          Niki: “At first, it was tough since nobody had any answers and everything was blank. But later, I realized that I can
          control the controllable and stop worrying about what is beyond my control. I put all of my focus on keeping myself fit.
          As I said, I had a routine for every day. I kept myself busy with exercises and business.  I also learned how to develop a website,
          attended an online class on Finance and I joined as a volunteer for an NGO.”
        </Text>
        <Text style={styles.questions}>
          7 - Knowing what you know now, what advice would you have given yourself when the pandemic started?
        </Text>
        <Text style={styles.answers}>
          Niki: “I would assure myself, and my family that “this is temporary and there is nothing to worry about
          if you follow the safety guidelines. I would probably do everything the same and focus more on fitness.”
        </Text>
        <Text style={styles.questions}>
          8 - How did you manage the stress of returning to sports after a year of COVID-19?
        </Text>
        <Text style={styles.answers}>
          Niki: “At first, excitement took over the stress. The excitement of being able to play the sport again took away any stress that I had.
          Unfortunately, I got injured and that was stressful.  It was disheartening to stay at home and recover while the rest of the players were traveling and playing in the tournaments.
          As a professional player, I have been in the Injury zone a couple of times and so it didn't disturb me to the extent that I was unhappy.
          My immediate goals were to become healthy and start playing tournaments.”

        </Text>
        <Text style={styles.questions}>
          9 - As a sportsperson yourself, is there anything that you want to advise the younger generation who are taking up sports during these uncertain times?
        </Text>
        <Text style={styles.answers}>
          Niki: “Just play the sport and have a good time while playing it. Don’t go looking into the future already, be in the present and enjoy the competition.
          This goes for everything. No one can play any sport by forcing themselves.  It is not a job. Only if a player truly enjoys the sport, he or she can play and win.
          That’s why professional players are still playing even during these uncertain times. It’s due to the sheer passion for the sport.”
        </Text>
        <Text style={styles.questions}>
          10- What is your take on mental health and its importance in sports personnel?
        </Text>
        <Text style={styles.answers}>
          Niki: “Mental health is the key for every sport. A person must have the motivation, desire, fire, and will to compete and give 100%.
          It is important to train physically and more important to train mentally as well.  We live in a world full of distractions. Being a sportsperson is a 24/7 job.
          What we do outside the playing field determines what we will do on the playing field. So every activity, every decision, every criticism, every support,
          and many more factors determine how well a sports person performs on their playing field. Sportspeople need a lot of mental strength to do the same things every day.”
          Staying motivated and ignoring the negativity to perform well on game day.”
        </Text>



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
  questions: {
    color: 'steelblue',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'justify',
    marginBottom: 20
  },
  answers: {
    color: 'black',
    marginBottom: 20,
    textAlign: 'justify',
    fontSize: 15
  }
});

export default InterviewTennisStar;