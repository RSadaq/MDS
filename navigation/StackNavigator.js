import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BlogsScreen from "../screens/BlogsScreen";
import Tennis from "../blogs/Tennis";
import Running from "../blogs/Running";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "black",
  },
  headerTintColor: "white",
  headerBackTitle: "back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="BlogsStack" component={BlogsScreen}  options = {{headerShown: false}}/>
      <Stack.Screen name="Tennis" component={Tennis} />
      <Stack.Screen name="Running" component={Running} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator};