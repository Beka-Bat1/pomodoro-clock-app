export const FOCUS_TIME = "FOCUS_TIME";
export const SHORT_BREAK = "SHORT_BREAK";
export const LONG_BREAK = "LONG_BREAK";
export const SESSIONS = "SESSIONS";

export const globalOptionReducer = (state: any, action: any) => {
  switch (action.type) {
    case FOCUS_TIME:
      console.log(action.payload, "dispatching");
      return {
        ...state,
        focusTime: action.payload,
      };

    case SHORT_BREAK:
      return {
        ...state,
        shortBreak: action.payload,
      };

    case LONG_BREAK:
      return {
        ...state,
        longBreak: action.payload,
      };

    case SESSIONS:
      return {
        ...state,
        sessions: action.payload,
      };
    default:
      throw new Error("something is wrong with globalReducer ");
  }
};
