import React from "react";
import { View, StyleSheet, Text } from "react-native";

const InterviewTennisStar= () => {
  return (
    <View style={styles.center}>
      <Text>This is the interview with a Tennis Star blog!</Text>
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

export default InterviewTennisStar;