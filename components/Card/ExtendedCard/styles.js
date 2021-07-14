
import { StyleSheet } from "react-native";
import colors from "../../../constants/colors"

const getStyleObj = (theme) => {
    return StyleSheet.create({
        buttonContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        button: {
            borderRadius: 35,
            alignItems: 'center',
            justifyContent: 'center',
            width: '80%',
            paddingVertical: 10,
        },
        unselectedButton: {
            backgroundColor: colors.blue_secondary,
        },
        selectedButton: {
            backgroundColor: colors.pink,
            transform: [{ scaleX: 1.15 }],
        },
        text: {
            color: colors.white,
            fontSize: 24,
        },
        separator: {
            paddingVertical: 5,
            fontSize: 18,
        }


    });
};

export default getStyleObj;
