import React, { FC } from "react"
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native"
import { lightGray } from "../../assets/colors"
import { Modify } from "../../Types"

interface NumPadButtonProps extends Modify<TouchableOpacityProps, {
    buttonText?: string,
    onPress: (value?: string) => void
}> {};

const styles = StyleSheet.create({
    button: {
        padding: 20,
        width: `${100/3}%`,
        alignItems: 'center',
        borderColor: lightGray,
    },

    buttonText: {
        color: lightGray,
        fontSize: 20,
        fontFamily: 'blockberthold'
    }
})

const NumPadButton:FC<NumPadButtonProps> = ({
    onPress,
    buttonText,
    children
}) => {

    const handlePress = () => onPress(buttonText);

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={handlePress}
        >
            {buttonText && <Text style={styles.buttonText}>{buttonText}</Text>}
            {children}
        </TouchableOpacity>
    )
}

export default NumPadButton;