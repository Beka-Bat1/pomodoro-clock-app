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
    <Tab.Navigator initialRouteName="TimerScreen">
      <Tab.Screen
        name="TimerScreen"
        component={TimerScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialIcons
                name="timer"
                size={size}
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
                size={size}
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
