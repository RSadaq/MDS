import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BreakingOutOfSlump = () => {
  return (
    <View style={styles.center}>
      <Text>This is the blog about breaking out of your slump!</Text>
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

export default BreakingOutOfSlump;