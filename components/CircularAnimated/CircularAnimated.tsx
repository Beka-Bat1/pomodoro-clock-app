import React from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Text, View } from "react-native";
import colors from "../../constants/colors";

interface Props {
  progress: number;
  text: string;
}

const CircularAnimated = (props: Props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <AnimatedCircularProgress
        size={200}
        width={15}
        fill={props.progress}
        tintColor={colors.blue}
        onAnimationComplete={() => console.log("onAnimationComplete")}
        backgroundColor="#4F52FF"
        style={{ transform: [{ rotate: "-90deg" }] }}
      ></AnimatedCircularProgress>

      <View style={{ position: "absolute" }}>
        <Text style={{ color: "white", fontSize: 30 }}>{props.text}</Text>
      </View>
    </View>
  );
};

export default CircularAnimated;
