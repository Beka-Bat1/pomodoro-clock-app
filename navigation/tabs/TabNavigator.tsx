import React, { useEffect, useReducer } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import OptionsScreen from "../../screens/OptionsScreen";
import TimerScreen from "../../screens/TimerScreen";
import colors from "../../constants/colors";

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="TimerScreen"
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "transparent",
          borderTopWidth: 0,
          position: "absolute",
          left: 50,
          right: 50,
          bottom: 20,
          height: 100,
          padding: 50,
        },
      }}
    >
      <Tab.Screen
        name="TimerScreen"
        component={TimerScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialIcons
                name="timer"
                size={40}
                color={focused ? color : colors.gray}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="OptionsScreen"
        component={OptionsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name="options-sharp"
                size={40}
                color={focused ? color : colors.gray}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
