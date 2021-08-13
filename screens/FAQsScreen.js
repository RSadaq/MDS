import React, { useState } from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import { backgrounds } from '../constants';
import { List } from 'react-native-paper';


//---ACCORDION FUNCTION---//
function Accordion() {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const theme = {
      roundness: 2,
      colors: {
        background: '#b84949',
        text: 'white'
      },
      
    };

  return (
    <List.Section style={{marginLeft:10, marginRight:10}}>

      <List.Section/>

      <List.Accordion
          theme={theme}
          style={{borderWidth:2.3, borderColor: '#8B0000'}}
          titleNumberOfLines={3}
          title="My organization wants to partner with MDS. How can I do that?"
        >

        <List.Item
          style={{borderWidth:2, marginLeft: 15, marginRight: 15, borderColor: 'grey'}}
          titleNumberOfLines={70} title='Please email us at info@mind-designsports.org for any requests or questions about partnerships, speaking engagements, guest blog posts, podcast participants, interviews, and media inquiries.' 
        />
 
      </List.Accordion>
     

      <List.Section style={{marginBottom:5}}/>
     
      <List.Accordion
          theme={theme}
          titleNumberOfLines={3}
          style={{borderWidth:2.3, borderColor: '#8B0000'}}
          title="How can I get involved in MDS’s mission?"
      >
        <List.Item 
          style={{borderWidth:2, marginLeft: 15, marginRight: 15, borderColor: 'grey'}}

          titleNumberOfLines={50}
          title="Reshare our posts/videos on social media, write a guest blog post, and spread the word about our organization. Share the organization and our website with your friends as well. If you are a high school or college level athlete, become a mentor and volunteer :)" 
        />
      
      </List.Accordion>

      <List.Section style={{marginBottom:5}}/>

      <List.Accordion
          theme={theme}
          titleNumberOfLines={3}
         style={{borderWidth:2.3, borderColor: '#8B0000'}}
          title="What if I have a specific topic that I want to be addressed?"
      >
        <List.Item 
          style={{borderWidth:2, marginLeft: 15, marginRight: 15, borderColor: 'grey'}}
         
          titleNumberOfLines={50}
          title="If there’s a specific blog/podcast topic you’d like to learn about, let us know by filling out this quick form!" 
        />
      
      </List.Accordion>

      <List.Section style={{marginBottom:5}}/>

      <List.Accordion
          theme={theme}
          titleNumberOfLines={3}
         style={{borderWidth:2.3, borderColor: '#8B0000'}}
          title="Why should I utilize the content on MDS versus a professional sports psychology website?"
      >
        <List.Item 
          style={{borderWidth:2, marginLeft: 15, marginRight: 15, borderColor: 'grey'}}
          titleNumberOfLines={50}
          title="We are the only sports psychology organization governed by students that play sports so we have a perspective that is directly applicable to younger athletes. The writing in the blogs and the questions asked in the podcasts will reflect that and allow younger athletes to take away the most applicable information to help them perform their best . The majority of other sports psychology websites use extremely sophisticated language without taking into account how younger athletes will utilize the information and some are also targeted towards parents for their kids rather than directly to the kids." 
        />
      
      </List.Accordion>

      <List.Section style={{marginBottom:5}}/>
      
      <List.Accordion
          theme={theme}
          titleNumberOfLines={3}
         style={{borderWidth:2.3, borderColor: '#8B0000'}}
          title="I want more one-on-one guidance. What should I do?"
      >
        <List.Item 
          style={{borderWidth:2, marginLeft: 15, marginRight: 15, borderColor: 'grey'}}
          titleNumberOfLines={50}
          title="You can email us at info@mind-designsports.org if you have specific questions and we will respond as soon as possible. However, we do not provide paid one-on-one consulting." 
        />
      
      </List.Accordion>

    </List.Section>
  );
};

//---END OF ACCORDION FUNCTION---//

export default function FAQsScreen() {

    return (  
        <ScrollView>  
              <Accordion/>
        </ScrollView>     

    );
  }