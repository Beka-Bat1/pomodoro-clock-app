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
  onPress: any;
  title: string;
  style?: Object;
}

const PrimaryButton = (props: Props) => {
  const Touchable: any =
    Platform.OS === "android" && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;
  return (
    <Touchable style={styles.container} onPress={props.onPress}>
      <View style={{ ...styles.button, ...props.style }}>
        <Text style={styles.text}> {props.title} </Text>
      </View>
    </Touchable>
  );
};

export default PrimaryButton;
