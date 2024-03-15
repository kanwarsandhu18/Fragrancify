import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import confirmationScreen from "../screens/confirmationScreen";
import returnForm from "../screens/returnForm";

const ResellTab = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ReturnForm" component={returnForm} />
      <Stack.Screen name="ConfirmationScreen" component={confirmationScreen} />
    </Stack.Navigator>
  );
};

export default ResellTab;
