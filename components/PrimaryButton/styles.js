import { StyleSheet } from "react-native"
import colors from "../../constants/colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },

    button: {
        backgroundColor: colors.blue_secondary,
        color: colors.white,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: "center",
        paddingHorizontal: 40,
        paddingVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    text: {
        color: colors.white,
        fontWeight: '500',
        fontSize: 24,
    }
})