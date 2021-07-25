import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { IconButton } from "react-native-paper";
import getStyleObj from "./styles";
import GlobalOptionsContext from "../../context";

interface Props {
  textLeft: string;
  textRight: string;
  isOpened: boolean;
  onButtonPress: (identifier: string) => void;
}

const Card = (props: Props) => {
  const styles = getStyleObj();

  const { textLeft, textRight, isOpened, onButtonPress } = props;

  const onPressHandler = () => {
    console.log("onPresshandler", isOpened);
    onButtonPress(textLeft);
  };

  return (
    <TouchableOpacity
      style={[styles.container, styles.button]}
      onPress={onPressHandler}
      activeOpacity={0.7}
    >
      <View style={styles.textContainer}>
        <Text style={styles.text}> {textLeft} </Text>
        <Text style={styles.text}> {textRight} </Text>
        <IconButton
          icon={isOpened ? "chevron-up" : "chevron-down"}
          color="gray"
          size={50}
          animated={true}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Card;
