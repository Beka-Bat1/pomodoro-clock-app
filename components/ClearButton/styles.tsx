import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const getStyleObj = () => {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      height: "20%",
      width: "100%",
    },
    iconButton: {
      // backgroundColor: colors.blue_secondary,
      // textShadowColor: "transparent",
      // textShadowOffset: { width: -2, height: 2 },
      // textShadowRadius: 4,
      // elevation: 5,
    },
  });
};

export default getStyleObj;
