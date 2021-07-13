import React, { useEffect } from "react";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  TouchableNativeFeedback,
  Dimensions,
} from "react-native";
import { IconButton, TouchableRipple } from "react-native-paper";

import colors from "../../constants/colors";
import { styles } from "./styles";

interface Props {
  onPress: Function;
  play: boolean;
}

const PauseButton = (props: any) => {
  return (
    <TouchableWithoutFeedback style={styles.container}>
      <IconButton
        onPress={props.onPress}
        animated={true}
        color={colors.blue_secondary}
        size={100}
        icon={props.play ? "pause-circle" : "play-circle"}
        style={styles.iconButton}
      />
    </TouchableWithoutFeedback>
  );
};

export default PauseButton;
