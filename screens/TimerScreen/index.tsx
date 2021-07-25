import "react-native-gesture-handler";
import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import { StyleSheet, View, Animated, Text } from "react-native";

import CircularAnimated from "../../components/CircularAnimated/CircularAnimated";
import PauseButton from "../../components/PauseButton";
import LinearBackground from "../../components/LinearBackground";
import GlobalOptionsContext from "../../context";
import ClearButton from "../../components/ClearButton";

const TimerScreen = () => {
  const [totalTime, setTotalTime] = useState(0);
  const [isPlayMode, setIsPlayMode] = useState(false);
  const [progress, setProgress] = useState(100);
  const [isBreak, setIsBreak] = useState(false);

  const [currentSession, setCurrentSession] = useState(0);
  const [second, setSec] = useState(0);
  const [minute, setMin] = useState(0);
  const [timeString, setTimeString] = useState("00 : 00");

  const globalOptions = useContext(GlobalOptionsContext);

  useEffect(() => {
    console.log("settings updated or it's first time on screen");

    let focusTime = globalOptions.focusTime * 60 * 1000;
    setCurrentSession(1);

    setTotalTime(focusTime);
  }, [globalOptions]);

  useEffect(() => {
    if (isPlayMode && totalTime > 0) {
      let myInterval = setInterval(() => {
        console.log(second, "inside set interval");
        if (second > 0) {
          console.log("sec");
          setSec(second - 1);
        }
        if (second === 0) {
          console.log("second is 0");

          if (minute === 0) {
            console.log(minute, second, "00: 00 ... clearing interval");
            clearTimer();
            clearInterval(myInterval);
          } else {
            setMin(minute - 1);
            setSec(59);
          }
        }
      }, 1000);
      return () => {
        console.log("clearing interval");
        clearInterval(myInterval);
      };
    }
  }, [second, isPlayMode]);

  useEffect(() => {
    setTimeString(
      `${minute < 10 ? "0" + minute : minute} : ${
        second < 10 ? "0" + second : second
      }`
    );

    if (!isPlayMode) return;
    console.log("setting progress");

    setProgress((prevProgress) => {
      if (prevProgress == 0) {
        return 100;
      }

      return ((second * 1000 + minute * 60 * 1000) / totalTime) * 100;
    });
  }, [second, minute]);

  const convertTotalTime = useCallback(() => {
    console.log(totalTime, "minutes and seconds are set ...");
    let milliseconds = Math.floor((totalTime % 1000) / 100);

    let seconds = Math.floor((totalTime / 1000) % 60);
    setSec(seconds);
    let minutes = Math.floor((totalTime / (1000 * 60)) % 60);
    setMin(minutes);
  }, [totalTime]);

  const toggleTimerHandler = () => {
    console.log(isPlayMode, "playMode");

    if (!isPlayMode && totalTime > 0 && progress == 100) {
      console.log("converting totaltime");
      setIsPlayMode(true);
      convertTotalTime();
      return;
    }

    setIsPlayMode((prevState) => !prevState);
  };

  const clearTimer = () => {
    setProgress(100);
    setTotalTime(0);

    if (currentSession == globalOptions.sessions) {
      console.log("it's last session ");
      setCurrentSession(0);
      setIsBreak(false);
      setIsPlayMode(false);
      return;
    }

    if (isBreak) {
      setIsBreak((prevState) => !prevState);

      if (currentSession % 3 > 1) {
        console.log("it's third session take a long break");
        setTotalTime(globalOptions.longBreak * 60 * 1000);
      } else if (currentSession >= 1 && isPlayMode) {
        console.log(
          `it is short break take a break now for ${
            globalOptions.shortBreak * 60 * 1000
          }`
        );
        setTotalTime(globalOptions.shortBreak * 60 * 1000);
      } else {
        console.warn(" somethign is  in clearTimer => isBreak");
      }
    } else {
      setTotalTime(globalOptions.focusTime * 60 * 1000);
    }

    setCurrentSession((prevSession) => prevSession + 1);
    // let
    setIsPlayMode(true);
    toggleTimerHandler();
  };

  const stopTimer = () => {
    setSec(0);
    setIsPlayMode(false);
    setMin(0);
    setTotalTime(globalOptions.focusTime * 60 * 1000);
    setProgress(100);
    setIsBreak(false);
    setCurrentSession(1);
    setTimeString("00 : 00");
  };

  const spinValue = useRef(new Animated.Value(0)).current;

  const spin = spinValue.interpolate({
    inputRange: [0, 100],
    outputRange: ["0deg", "360deg"],
  });

  useEffect(() => {
    if (!isPlayMode) {
      return;
    }
    Animated.timing(spinValue, {
      toValue: 100,
      duration: 60000,
      useNativeDriver: true,
    }).start();
  }, [isPlayMode]);

  return (
    <>
      <LinearBackground />
      <View style={styles.container}>
        <View
          style={{
            flex: 3 / 4,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ zIndex: 1 }}>
            <CircularAnimated progress={progress} text={timeString} />
          </View>

          <Animated.View
            style={{
              position: "absolute",
              zIndex: -1,
              transform: [{ rotate: spin }],
            }}
          >
            <View style={styles.circleShadow} />
          </Animated.View>

          <Text></Text>
        </View>

        <View style={styles.buttonContainer}>
          {progress > 0 && progress < 100 && (
            <ClearButton onPress={stopTimer} />
          )}
          <PauseButton onPress={toggleTimerHandler} play={isPlayMode} />
        </View>
      </View>
    </>
  );
};

export default TimerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  circleShadow: {
    borderWidth: 40,
    borderColor: "hsla(244, 41%, 38%, 0.5)",
    // borderTopColor: "#332D64",
    // borderEndColor: "#332D64",
    // borderLeftColor: "#332D64",
    // borderRightColor: "#332D64",
    // borderStartColor: "#332D64",
    // borderBottomColor: "#332D64",
    height: 260,
    width: 260,
    borderRadius: 260,
    //   shadowColor: "#4749EF",
    //   shadowOffset: {
    //     width: 0,
    //     height: 0,
    //   },
    //   shadowOpacity: 0.7,
    //   shadowRadius: 30,

    //   elevation: 32,
    //
  },
});
