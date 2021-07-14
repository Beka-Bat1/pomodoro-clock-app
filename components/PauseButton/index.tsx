import React, { useEffect } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { IconButton, TouchableRipple } from "react-native-paper";

import colors from "../../constants/colors";
import { styles } from "./styles";

interface Props {
  onPress: Function;
  play: boolean;
}

const PauseButton = (props: any) => {
  return (
    <View style={styles.buttonContainer}>
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
    </View>
  );
};

export default PauseButton;
