import React, { useEffect } from "react";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  TouchableNativeFeedback,
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
        size={60}
        icon={props.play ? "pause-circle" : "play-circle"}
        style={styles.IconButton}
      />
    </TouchableWithoutFeedback>
  );
};

export default PauseButton;
