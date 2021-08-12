import React from 'react';
import { List } from 'react-native-paper';

export default function Accordion() {
    const [expanded, setExpanded] = React.useState(true);
  
    const handlePress = () => setExpanded(!expanded);

    return (
      <List.Section>
        <List.Accordion
            titleNumberOfLines={3}
            title="My organization wants to partner with MDS. How can I do that?"
          >

          <List.Item titleNumberOfLines={70} title='Please email us at info@mind-designsports.org for any requests or questions about partnerships, speaking engagements, guest blog posts, podcast participants, interviews, and media inquiries.' />
   
        </List.Accordion>
  
        <List.Accordion
            titleNumberOfLines={3}
            title="How can I get involved in MDS’s mission?"
        >
          <List.Item 
            titleNumberOfLines={50}
            title="Reshare our posts/videos on social media, write a guest blog post, and spread the word about our organization. Share the organization and our website with your friends as well. If you are a high school or college level athlete, become a mentor and volunteer :)" />
        
        </List.Accordion>

        <List.Accordion
            titleNumberOfLines={3}
            title="What if I have a specific topic that I want to be addressed?"
        >
          <List.Item 
            titleNumberOfLines={50}
            title="If there’s a specific blog/podcast topic you’d like to learn about, let us know by filling out this quick form!" />
        
        </List.Accordion>

        <List.Accordion
            titleNumberOfLines={3}
            title="Why should I utilize the content on MDS versus a professional sports psychology website?"
        >
          <List.Item 
            titleNumberOfLines={50}
            title="We are the only sports psychology organization governed by students that play sports so we have a perspective that is directly applicable to younger athletes. The writing in the blogs and the questions asked in the podcasts will reflect that and allow younger athletes to take away the most applicable information to help them perform their best . The majority of other sports psychology websites use extremely sophisticated language without taking into account how younger athletes will utilize the information and some are also targeted towards parents for their kids rather than directly to the kids." />
        
        </List.Accordion>

        <List.Accordion
            titleNumberOfLines={3}
            title="I want more one-on-one guidance. What should I do?"
        >
          <List.Item 
            titleNumberOfLines={50}
            title="You can email us at info@mind-designsports.org if you have specific questions and we will respond as soon as possible. However, we do not provide paid one on one consulting." />
        
        </List.Accordion>

       
      </List.Section>
    );
  };