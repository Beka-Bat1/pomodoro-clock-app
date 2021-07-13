
import { StyleSheet } from "react-native";
import colors from "../../constants/colors"

const getStyleObj = (theme) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },

        button: {
            backgroundColor: colors.gray,
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
