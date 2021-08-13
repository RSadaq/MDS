import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BlogsScreen from "../screens/BlogsScreen";
import Tennis from "../Blogs/Tennis";

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
    </Stack.Navigator>
  );
}

export { MainStackNavigator};