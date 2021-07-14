
import { StyleSheet } from "react-native";
import colors from "../../constants/colors"

const getStyleObj = (theme) => {
    return StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 10
        },

        button: {
            backgroundColor: colors.gray,
            color: colors.white,
            borderRadius: 35,
        },
        text: {
            color: colors.white,
            fontWeight: '500',
            fontSize: 20,
        },
        textContainer: {
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
            color: colors.white
        },
        icon: {
            margin: 5,
        }

    });
};

export default getStyleObj;
