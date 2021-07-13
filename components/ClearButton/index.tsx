import React, { useEffect } from "react";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import { IconButton, TouchableRipple } from "react-native-paper";

import colors from "../../constants/colors";
import getStyleObj from "./styles";

interface Props {
  onPress: Function;
}

const ClearButton = (props: Props) => {
  const styles = getStyleObj();

  return (
    <TouchableWithoutFeedback style={styles.container}>
      <IconButton
        onPress={() => props.onPress()}
        animated={true}
        color={colors.blue_secondary}
        size={100}
        icon={"stop-circle-outline"}
        style={styles.iconButton}
      />
    </TouchableWithoutFeedback>
  );
};

export default ClearButton;
