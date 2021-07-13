import React, { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";
import { useEffect } from "react";

interface Props {
  progress: number;
  text: string;
}

const CircularAnimated = (props: Props) => {
  return (
    <View style={styles.container}>
      <CircularProgressbar value={props.progress} text={props.text} />
    </View>
  );
};

export default CircularAnimated;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: '50%',
    width: '50%',
    marginTop: 50
  },
});
