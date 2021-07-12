import React, { createContext } from "react";
import { View, Text } from "react-native";

const GlobalOptionsContext = createContext({
  focusTime: 0,
  shortBreak: 0,
  longBreak: 0,
  sessions: 0,
  updateFocusTime: (time: any) => {},
  updateShortBreak: (time: any) => {},
  updateLongBreak: (time: any) => {},
  updateSessions: (time: any) => {},
});

export const GlobalOptionsProvider = GlobalOptionsContext.Provider;

export default GlobalOptionsContext;
