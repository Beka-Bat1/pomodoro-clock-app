import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const getStyleObj = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 10,
      marginVertical: 20,
    },
    button: {
      backgroundColor: "#5D5D6A", ///colors.gray,
      color: colors.white,
      borderRadius: 35,
    },
    text: {
      color: colors.white,
      fontWeight: "500",
      fontSize: 16,
    },
    textContainer: {
      width: "80%",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      color: colors.white,
    },
    icon: {
      margin: 4,
    },
  });
};

export default getStyleObj;
