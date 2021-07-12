import React from 'react'
import { StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform, View, Alert, Text } from 'react-native'
import colors from '../../../constants/colors'
import { styles } from './styles'


const PrimaryButton = (props) => {

    const Touchable = Platform.OS === 'android' && Platform.version >= 21 ? TouchableNativeFeedback : TouchableOpacity;

    return (
        <View style={styles.container}>
            <Touchable style={styles.button} onPress={props.onPress} >
                <Text style={styles.text}> {props.title} </Text>
            </Touchable>
        </View>
    )
}

export default PrimaryButton


