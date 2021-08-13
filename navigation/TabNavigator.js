import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, Image, StyleSheet } from 'react-native';
import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";
import { Ionicons, MaterialIcons, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import BlogsScreen from '../screens/BlogsScreen';
import ContactScreen from '../screens/ContactScreen';
import Podcasts from '../screens/PodcastsScreen';
import FAQsScreen from '../screens/FAQsScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={() => ({
        tabBarActiveTintColor: 'firebrick',
        tabBarInactiveTintColor: 'black',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
             headerRight: () => (
                <Image
                style={styles.logo}
                  source={require('../assets/images/MDS-logo.png')}
                  resizeMode='contain'
                />
             ),
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />),
          }} />
           <Tab.Screen name="Blogs" component={MainStackNavigator} options={{
              headerRight: () => (
                <Image
                style={styles.logo}
                  source={require('../assets/images/MDS-logo.png')}
                  resizeMode='contain'
                />
              ),
            tabBarLabel: 'Blogs',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="pencil-square-o" color={color} size={size}/>
            ),
          }}/>
          <Tab.Screen name="Podcasts" component={Podcasts} options={{
              headerRight: () => (
                <Image
                style={styles.logo}
                  source={require('../assets/images/MDS-logo.png')}
                  resizeMode='contain'
                />
              ),
            tabBarLabel: 'Podcasts',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="headphones-alt" color={color} size={size}/>
            ),
          }}/>
          <Tab.Screen name="FAQs" component={FAQsScreen} options={{
              headerRight: () => (
                <Image
                style={styles.logo}
                  source={require('../assets/images/MDS-logo.png')}
                  resizeMode='contain'
                />
              ),
            tabBarLabel: 'FAQs',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="frequently-asked-questions" color={color} size={size}/>
            ),
          }}/>
          <Tab.Screen name="Contact Us" component={ContactScreen} options={{
              headerRight: () => (
                <Image
                style={styles.logo}
                  source={require('../assets/images/MDS-logo.png')}
                  resizeMode='contain'
                />
              ),
            tabBarLabel: 'Contact',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="contact-mail" color={color} size={size}/>
            ), 
          }}/>

          </Tab.Navigator>
  );
        };

        const styles = StyleSheet.create({
            logo: {
              width: 100, 
              height: 55, 
              marginLeft: 5
            }
            })

        export default BottomTabNavigator;