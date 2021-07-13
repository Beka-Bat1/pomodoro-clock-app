import React from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
  Text,
} from "react-native";
import { styles } from "./styles";

interface Props {
  onPress: Function;
  title: string;
  style?: Object;
}

const PrimaryButton = (props: Props) => {
  const Touchable: any =
    Platform.OS === "android" && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;
  return (
    <View style={styles.container}>
      {/* TOFINDOUT    {{ ...styles.button, props.style }}  VS   [styles.button, props.style]   */}
      <Touchable style={[styles.button, props.style]} onPress={props.onPress}>
        <Text style={styles.text}> {props.title} </Text>
      </Touchable>
    </View>
  );
};

export default PrimaryButton;
