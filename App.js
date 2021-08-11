import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./navigation/StackNavigator";
import BottomTabNavigator from "./navigation/TabNavigator";

 const App = () => {
  return (
    <NavigationContainer>
    <BottomTabNavigator />
    </NavigationContainer>
  );
}
export default App
