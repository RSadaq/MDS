import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import CardsScreen from './CardsScreen';
import ContactScreen from './ContactScreen';
import Podcasts from './PodcastsScreen';

HomeScreen();
CardsScreen();
Podcasts();
ContactScreen();

const Tab = createBottomTabNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Cards" component={CardsScreen} />
          <Tab.Screen name="Podcasts" component={Podcasts} />
          <Tab.Screen name="Contact" component={ContactScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }