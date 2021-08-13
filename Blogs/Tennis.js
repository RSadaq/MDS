import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Tennis = () => {
  return (
    <View style={styles.center}>
      <Text>This is the tennis blog!</Text>
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

export default Tennis;