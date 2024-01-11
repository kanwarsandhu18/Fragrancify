import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import Header from "./components/header";

const Stack = createStackNavigator();
const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ header: Header }}>
      <Stack.Screen name="App" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
