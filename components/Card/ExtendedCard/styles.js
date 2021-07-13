
import { StyleSheet } from "react-native";
import colors from "../../../constants/colors"

const getStyleObj = (theme) => {
    return StyleSheet.create({
        container: {
            borderRadius: 35,
            backgroundColor: colors.blue_secondary,
            width: "80%",
            alignItems: 'center',
            justifyContent: 'center',
        },
        innerContainer: {
            backgroundColor: colors.pink,
            height: 50,
            width: 300,
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{ scaleX: 2 }]
        },
        text: {
            color: colors.white,
            fontSize: 16,
        },
        separator: {
            paddingVertical: 10,
            fontSize: 18,


        }


    });
};

export default getStyleObj;
