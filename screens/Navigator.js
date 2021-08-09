import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import BlogsScreen from './BlogsScreen';
import ContactScreen from './ContactScreen';
import Podcasts from './PodcastsScreen';
import FAQsScreen from './FAQsScreen';

HomeScreen();
BlogsScreen();
Podcasts();
ContactScreen();
FAQsScreen();

const Tab = createBottomTabNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
        <Tab.Navigator
          screenOptions={() => ({
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Blogs" component={BlogsScreen} />
          <Tab.Screen name="Podcasts" component={Podcasts} />
          <Tab.Screen name="FAQs" component={FAQsScreen} />
          <Tab.Screen name="Contact" component={ContactScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }