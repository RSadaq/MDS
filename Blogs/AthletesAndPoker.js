import React from "react";
import { View, StyleSheet, Text } from "react-native";

const AthletesAndPoker = () => {
  return (
    <View style={styles.center}>
      <Text>This is the blog about athletes and poker players!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default AthletesAndPoker;