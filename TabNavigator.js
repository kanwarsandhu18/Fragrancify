import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import HomeTab from "./tabs/home";
import SearchTab from "./tabs/search";
import BuyTab from "./tabs/buy";
import ResellTab from "./tabs/resell";
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchTab}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="magnifying-glass" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Buy"
        component={BuyTab}
        options={{
          tabBarLabel: "Buy",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="shopping-cart" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Resell"
        component={ResellTab}
        options={{
          tabBarLabel: "Resell",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="level-up" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
