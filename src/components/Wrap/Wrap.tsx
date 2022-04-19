import React, { FC } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { darkGray } from '../../assets/colors';

interface WrapProps extends ViewProps {};

const style = StyleSheet.create({
    wrap: {
        display: 'flex',
        flex: 1,
        position: 'relative',
        backgroundColor: darkGray,
    }
})

const Wrap:FC<WrapProps> = ({
    children
}) => {
    return (
        <View style={style.wrap}>
            {children}
        </View>
    )
}

export default Wrap;