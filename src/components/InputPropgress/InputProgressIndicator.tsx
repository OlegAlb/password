import React, { FC } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { lightGray } from '../../assets/colors';

interface InputProgressIndicatorProps extends ViewProps {
    active: boolean,
};

const style = StyleSheet.create({
    dot: {
        marginHorizontal: 5,
        borderColor: lightGray,
        borderWidth: 1,
        borderRadius: 5,
        width: 10,
        height: 10
    },

    activeDot: {
        backgroundColor: lightGray
    }
})

const InputProgressIndicator:FC<InputProgressIndicatorProps> = ({
    active
}) => {
    return (
        <View style={[style.dot, active && style.activeDot]}/>
    )
}

export default InputProgressIndicator;