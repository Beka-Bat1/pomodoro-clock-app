import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '20%',
        width: '100%',
    },
    iconButton: {
        // backgroundColor: colors.blue_secondary,
        // textShadowColor: 'red',
        // textShadowOffset: { width: -4, height: 2 },
        // textShadowRadius: 20,
        // elevation: 8,
        // lineHeight: 15
    },

    buttonContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    }
})