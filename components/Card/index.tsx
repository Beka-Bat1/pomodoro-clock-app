import React, { useContext, useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Alert,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

import { IconButton } from "react-native-paper";
import colors from "../../constants/colors";
import getStyleObj from "./styles";
import ExtendedCard from "./ExtendedCard";
import GlobalOptionsContext from "../../context";

interface Props {
  textLeft: string;
  textRight: string;
  isOpened: boolean;
  dropDownValues: number[];
}

const Card = (props: Props) => {
  const styles = getStyleObj();
  const [pressed, setPressed] = useState(false);
  const globalOptions = useContext(GlobalOptionsContext);

  const pressHandler = () => {
    setPressed((prevState) => !prevState);
  };

  const Touchable: any =
    Platform.OS === "android" && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;

  return (
    <>
      <View style={{ ...styles.container, ...styles.button }}>
        <Touchable onPress={pressHandler}>
          <View style={styles.textContainer}>
            <Text style={styles.text}> {props.textLeft} </Text>
            <Text style={styles.text}> {props.textRight} </Text>
            <IconButton
              icon={pressed ? "chevron-up" : "chevron-down"}
              color="gray"
              size={50}
              animated={true}
              onPress={pressHandler}
            />
          </View>
        </Touchable>

        {pressed && (
          <ExtendedCard
            dropDownValues={props.dropDownValues}
            identifier={props.textLeft}
          />
        )}
      </View>
    </>
  );
};

export default Card;
