import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    IconButton: {
        // backgroundColor: colors.blue_secondary,
        textShadowColor: 'transparent',
        textShadowOffset: {width: -2, height: 2},
        textShadowRadius: 4,
        elevation: 5,
        height: 70,
    }
})