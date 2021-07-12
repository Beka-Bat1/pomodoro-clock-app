import "react-native-gesture-handler";
import React, {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { StyleSheet, View, Button } from "react-native";
import { useRoute } from "@react-navigation/native";

import CircularAnimated from "../../components/CircularAnimated";
import PauseButton from "../../components/PauseButton";
import LinearBackground from "../../components/LinearBackground";
import GlobalOptionsContext from "../../context";

const TimerScreen = () => {
  const [totalTime, setTotalTime] = useState(0);
  const [playMode, setPlayMode] = useState(false);
  const [progress, setProgress] = useState(100);

  const [second, setSec] = useState(0);
  const [minute, setMin] = useState(0);
  const [timeString, setTimeString] = useState("00 : 00");

  const globalOptions = useContext(GlobalOptionsContext);
  let myInterval: any;

  useEffect(() => {
    console.log(globalOptions);
    let focusTime = globalOptions.focusTime;
    console.log(focusTime);
    focusTime = focusTime * 1000 * 60;
    setTotalTime(focusTime);
  }, [globalOptions]);

  useEffect(() => {
    if (playMode && totalTime > 0) {
      myInterval = setInterval(() => {
        countDown();
        console.log("countdown");
      }, 1000);
    }
    return () => {
      console.log("clearing interval");

      clearInterval(myInterval);
    };
  }, [playMode]);

  useEffect(() => {
    setTimeString(
      `${minute < 10 ? "0" + minute : minute} : ${
        second < 10 ? "0" + second : second
      }`
    );
  }, [minute, second]);

  useEffect(() => {
    setProgress((prevProgress) => {
      if (prevProgress == 0) {
        return 100;
      }
      let x = 100 / totalTime;
      return progress - x;
    });
  }, [totalTime]);

  const countDown = useCallback(() => {
    setTotalTime((prevState) => prevState - 1000);

    let [sec, min] = [second, minute];
    sec = sec - 1;
    setSec((prevState) => prevState - 1);

    if (sec == 0 && min >= 1) {
      min = min - 1;
      setMin((prevState) => prevState - 1);
      setSec((prevState) => prevState + 60);
    }

    if (min == 0 && sec == 0) {
      // coundown finished
      console.warn("counter must stop");
    }
  }, [second]);

  const convertTotalTime = () => {
    let timeToConvert = totalTime;

    let min = +Math.floor(timeToConvert / 60 / 1000);
    timeToConvert -= Math.floor(timeToConvert / 1000);
    setMin((prevState) => prevState + min);

    let sec = +Math.floor((timeToConvert / 1000) % 60);
    timeToConvert -= Math.floor(timeToConvert);
    setSec((prevState) => prevState + sec);
  };

  const toggleTimerHandler = () => {
    console.log(playMode);

    if (!playMode && totalTime == 0) {
      convertTotalTime();
    }
    setPlayMode((prevState) => !prevState);
  };

  return (
    <View style={styles.container}>
      <LinearBackground />
      <CircularAnimated progress={progress} text={timeString} />
      <PauseButton onPress={toggleTimerHandler} play={playMode} />
    </View>
  );
};

export default TimerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
