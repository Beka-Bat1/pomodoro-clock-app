import { StyleSheet } from "react-native"
import colors from "../../../constants/colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    button: {
        backgroundColor: colors.blue_secondary,
        color: colors.white,
        height: 70,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    text: {
        color: colors.white,
        fontWeight: '500',
        fontSize: 20,
    }
})