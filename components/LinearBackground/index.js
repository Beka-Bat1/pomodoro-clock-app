import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../constants/colors'


const LinearBackground = () => {
    return (
        <LinearGradient
            colors={[colors.blue, colors.black]}
            style={styles.background}
        />
    )
}

export default LinearBackground

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
})
