import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const getStyleObj = (theme) => {
  return StyleSheet.create({
    buttonContainer: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 5,
    },
    button: {
      borderRadius: 35,
      alignItems: "center",
      justifyContent: "center",
      width: "80%",
      paddingVertical: 4,
    },
    unselectedButton: {
      backgroundColor: colors.blue_secondary,
    },
    selectedButton: {
      backgroundColor: colors.pink,
      transform: [{ scaleX: 1.05 }],
    },
    text: {
      color: colors.white,
      fontSize: 16,
    },
    separator: {
      paddingVertical: 5,
      fontSize: 18,
    },
    flexOne: {
      flex: 1,
    },
    listContainer: {
      backgroundColor: colors.gray,
      marginTop: -20,
      paddingVertical: 5,
      marginHorizontal: 14,
      borderTopLeftRadius: 10,
      borderTopColor: "#fff",
    },
  });
};

export default getStyleObj;
