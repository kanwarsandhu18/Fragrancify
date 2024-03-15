import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SetPreferences from "../screens/setPreferences";
import stackScreen from "../screens/stackScreen";
import SelectedChoices from "../screens/selectedChoices";

const SearchTab = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SetPreferences" component={SetPreferences} />
      <Stack.Screen name="StackScreen" component={stackScreen} />
      <Stack.Screen name="SelectedChoices" component={SelectedChoices} />
    </Stack.Navigator>
  );
};

export default SearchTab;
