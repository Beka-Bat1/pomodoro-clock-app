import React from "react";
import { StyleSheet, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import colors from "../../constants/colors";

interface Props {
  progress: number;
  text: string;
}

const CircularAnimated = (props: Props) => {
  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={120}
        width={15}
        fill={props.progress}
        tintColor={colors.blue}
        onAnimationComplete={() => console.log("onAnimationComplete")}
        backgroundColor="#3d5875"
      ></AnimatedCircularProgress>
    </View>
  );
};

export default CircularAnimated;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    width: "50%",
    marginTop: 50,
  },
});
