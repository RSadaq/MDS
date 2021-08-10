import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
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
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'black',
          })}
        >
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
              <Ionicons name="home" color={color} size={size} />
            ),
          }} />
          <Tab.Screen name="Blogs" component={BlogsScreen} options={{
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
      </NavigationContainer>
    );
  };

  const styles = StyleSheet.create({
    logo: {
      width: 100, 
      height: 55, 
      marginLeft: 5

    }
  })