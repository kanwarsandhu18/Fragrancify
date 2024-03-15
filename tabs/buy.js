import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import buyForm from "../screens/buyForm";
import confirmationScreen from "../screens/confirmationScreen";

const BuyTab = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BuyForm" component={buyForm} />
      <Stack.Screen name="ConfirmationScreen" component={confirmationScreen} />
    </Stack.Navigator>
  );
};

export default BuyTab;
