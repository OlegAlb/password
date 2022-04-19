import React, { FC } from 'react';
import { StyleSheet, Text, } from 'react-native';
import LinearGradient, { LinearGradientProps } from 'react-native-linear-gradient';
import { white } from '../../assets/colors';

interface AccentTextProps extends LinearGradientProps {
    text: string
};

const style = StyleSheet.create({
    container: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5
    },

    text: {
        color: white,
        fontSize: 20,
        fontFamily: 'blockberthold'
    }
})

const AccentText:FC<AccentTextProps> = ({
    colors,
    text
}) => {
    return (
        <LinearGradient colors={colors} style={style.container}  start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
            <Text style={style.text}>{text}</Text>
        </LinearGradient>
    )
}



export default AccentText;