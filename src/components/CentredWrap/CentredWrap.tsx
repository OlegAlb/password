import React, { FC } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { darkGray } from '../../assets/colors';

interface WrapProps extends ViewProps {};

const style = StyleSheet.create({
    centredWrap: {
        display: 'flex',
        flex: 1,
        position: 'relative',
        backgroundColor: darkGray,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const CentredWrap:FC<WrapProps> = ({
    children
}) => {
    return (
        <View style={style.centredWrap}>
            {children}
        </View>
    )
}

export default CentredWrap;