import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Homescreen from "../screens/homescreen";

const HomeTab = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Homescreen} />
    </Stack.Navigator>
  );
};

export default HomeTab;
