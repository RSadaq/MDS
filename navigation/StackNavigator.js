import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BlogsScreen from "../screens/BlogsScreen";
import InterviewTennisStar from "../Blogs/InterviewTennisStar";
import AthletesAndPoker from "../Blogs/AthletesAndPoker";
import BreakingOutOfSlump from "../Blogs/BreakingOutOfSlump";
import ChampionOfTheCourt from "../Blogs/ChampionOfTheCourt";
import DealingWithFans from "../Blogs/DealingWithFans";
import ConsciousVsUnconscious from "../Blogs/ConsciousVsUnconscious";

const Stack = createStackNavigator();
const title = 'Back to Blogs';

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "firebrick",
  },
  headerTintColor: "white",
  headerBackTitle: "back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="BlogsStack" component={BlogsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ChampionOfTheCourt" component={ChampionOfTheCourt} options={{ title: title }} />
      <Stack.Screen name="BreakingOutOfSlump" component={BreakingOutOfSlump} options={{ title: title }}/>
      <Stack.Screen name="InterviewTennisStar" component={InterviewTennisStar} options={{ title: title }} />
      <Stack.Screen name="AthletesAndPoker" component={AthletesAndPoker} options={{ title: title }}/>
      <Stack.Screen name="DealingWithFans" component={DealingWithFans} options={{ title: title }}/>
      <Stack.Screen name="ConsciousVsUnconscious" component={ConsciousVsUnconscious} options={{ title: title }}/>
  
    </Stack.Navigator>
  );
}

export { MainStackNavigator };