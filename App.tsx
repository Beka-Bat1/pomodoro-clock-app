import React, { useReducer, useState } from "react";
import CircularProgressBar from "./components/CircularProgressBar";
import { GlobalOptionsProvider } from "./context";
import {
  FOCUS_TIME,
  globalOptionReducer,
  LONG_BREAK,
  SHORT_BREAK,
  SESSIONS,
} from "./context/reducer";
import RootNavigator from "./navigation/RootNavigator";

const initialState = {
  focusTime: 0.5,
  shortBreak: 0.1,
  longBreak: 0.3,
  sessions: 3,
};

export default function App() {
  const [state, dispatch] = useReducer(globalOptionReducer, initialState);

  const updateFocusTime = (time: any) => {
    dispatch({ type: FOCUS_TIME, payload: time });
  };
  const updateShortBreak = (time: any) => {
    dispatch({ type: SHORT_BREAK, payload: time });
  };
  const updateLongBreak = (time: any) => {
    dispatch({ type: LONG_BREAK, payload: time });
  };
  const updateSessions = (time: any) => {
    dispatch({ type: SESSIONS, payload: time });
  };

  return (
    <GlobalOptionsProvider
      value={{
        focusTime: state.focusTime,
        shortBreak: state.shortBreak,
        longBreak: state.longBreak,
        sessions: state.sessions,
        updateFocusTime: updateFocusTime,
        updateShortBreak: updateShortBreak,
        updateLongBreak: updateLongBreak,
        updateSessions: updateSessions,
      }}
    >
      <RootNavigator />
    </GlobalOptionsProvider>
  );
}
