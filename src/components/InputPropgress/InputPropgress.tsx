import React, { FC } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import InputProgressIndicator from './InputProgressIndicator';

interface InputPropgressProps extends ViewProps {
    length: number,
    max: number
};

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 50
    }
})

const CentredInputPropgress:FC<InputPropgressProps> = ({
    length,
    max
}) => {
    return (
        <View style={style.container}>
            {[...Array(max).keys()].map(item => (
                <InputProgressIndicator key={item + 1} active={item + 1 <= length}/>
            ))}
        </View>
    )
}

export default CentredInputPropgress;