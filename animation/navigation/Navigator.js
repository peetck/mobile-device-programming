import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import SpringScreen from "../screens/SpringScreen";
import SequenceScreen from "../screens/SequenceScreen";
import ParallelScreen from "../screens/ParallelScreen";

const Navigator = createBottomTabNavigator({
  Spring: {
    screen: SpringScreen,
    navigationOptions: {
      tabBarIcon: <Ionicons name="md-globe" size={24} color="black" />,
    },
  },
  Sequence: {
    screen: SequenceScreen,
    navigationOptions: {
      tabBarIcon: <Ionicons name="md-menu" size={24} color="black" />,
    },
  },
  Parallel: {
    screen: ParallelScreen,
    navigationOptions: {
      tabBarIcon: <Ionicons name="md-git-branch" size={24} color="black" />,
    },
  },
});

export default createAppContainer(Navigator);
