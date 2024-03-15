import { View, Text } from "react-native";
import React from "react";

const confirmationScreen = () => {
  return (
    <View>
      <Text
        style={{
          marginTop: 100,
          textAlign: "center",
          fontSize: 30,
          fontWeight: "bold",
          color: "gray",
        }}
      >
        Thank You !
      </Text>
      <Text
        style={{
          marginTop: 100,
          textAlign: "center",
          fontSize: 30,
          fontWeight: "bold",
          color: "gray",
        }}
      >
        Your request is being processed.
      </Text>
    </View>
  );
};

export default confirmationScreen;
