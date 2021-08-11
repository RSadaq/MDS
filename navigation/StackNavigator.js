import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from '../screens/HomeScreen';
import BlogsScreen from '../screens/BlogsScreen';
import ContactScreen from '../screens/ContactScreen';
import PodcastsScreen from '../screens/PodcastsScreen';
import FAQsScreen from '../screens/FAQsScreen';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Blogs" component={BlogsScreen} />
<Stack.Screen name="Podcasts" component={PodcastsScreen} />
<Stack.Screen name="FAQs" component={FAQsScreen} />
<Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator};