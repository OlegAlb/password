import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { lightGray } from '../../assets/colors';
import { Backspace } from '../../assets/icons';
import NumPadButton from './NumPadButton';

interface NumPadProps extends ViewProps {
    onAdd: (value: string) => void
    onRemove: () => void
};

const style = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-end'
    }
})

const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const NumPad:FC<NumPadProps> = ({
    onAdd,
    onRemove
}) => {
    return (
        <View style={style.container}>
            {buttons.map((button, index) => (
                <NumPadButton 
                    key={index}
                    onPress={() => onAdd(button)}
                    buttonText={button}
                />
            ))}
            <NumPadButton onPress={() => onRemove()}>
                <Backspace fill={lightGray} width={20} height={20}/>
            </NumPadButton>
        </View>
    )
}

export default NumPad;