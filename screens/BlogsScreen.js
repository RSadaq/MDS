import React, { useState } from 'react';
import { Button, Stylesheet, Text, View } from 'react-native';

export default function BlogsScreen( { navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Blogs!</Text>
        <Button
        title="Go to Tennis blog!"
        onPress={() => navigation.navigate("Tennis")}
      />
      </View>
    );
  }