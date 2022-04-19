import React, { FC, useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { orange, pink, white, darkGray } from '../assets/colors';
import { NumPad, CentredWrap, AccentText, InputPropgress } from '../components';
import { MASTER_CODE_LENGTH } from '../constants';
import { useActions } from '../hooks';
import { Nullable } from '../Types';

interface SetCodeScreenProps {}

interface SetCodeScreenState {
	code: string,
	confirmCode: string,
	confirmMode: boolean,
	confirmationPassed: Nullable<boolean>
}

const style = StyleSheet.create({
	title: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		flexWrap: 'wrap',
		paddingHorizontal: 20
	},

	text: {
		color: white,
		fontSize: 20,
		fontFamily: 'blockberthold',
	}
})

export const SetCodeScreen: FC<SetCodeScreenProps> = () => {
	
	const
		[state, setState] = useState({
			code: '',
			confirmCode: '',
			confirmMode: false,
			confirmationPassed: null
		}),
		{setMasterPassword} = useActions(),
		add = (value:string) => {
			if(!state.confirmMode && state.code.length < MASTER_CODE_LENGTH){
				setState({...state, code: state.code + value});
			}
			if(state.confirmMode && state.confirmCode.length < MASTER_CODE_LENGTH){
				setState({...state, confirmCode: state.confirmCode + value});
			}
		},
		remove = () => {
			if(!state.confirmMode){
				setState({...state, code: state.code.slice(0, -1)})
			}
			if(state.confirmMode){
				setState({...state, confirmCode: state.confirmCode.slice(0, -1)})
			}
		};

	useEffect(() => {
		state.code.length === MASTER_CODE_LENGTH && setState({...state, confirmMode: true});
	}, [state.code])

	useEffect(() => {
		if(state.confirmCode.length === MASTER_CODE_LENGTH){
			setState({...state, confirmationPassed: state.code === state.confirmCode})
		}
	}, [state.confirmCode])

	useEffect(() => {
		console.log(state.confirmationPassed);
	}, [state.confirmationPassed])

	return (
		<CentredWrap>
			<StatusBar backgroundColor={darkGray} barStyle={'light-content'}/>
			{!state.confirmMode ? (
				<View style={style.title}>
					<Text style={style.text}>Придумай </Text>
					<AccentText colors={[orange, pink]} text='мастер-пароль'/>
					<Text style={style.text}>Он будет использоваться для входа</Text>
				</View>
			) : (
				<View style={style.title}>
					<Text style={style.text}>Теперь введи его </Text>
					<AccentText colors={[orange, pink]} text='еще раз'/>
				</View>
			)}
			<InputPropgress length={!state.confirmMode ? state.code.length : state.confirmCode.length} max={MASTER_CODE_LENGTH}/>
			<NumPad onAdd={add} onRemove={remove}/>
		</CentredWrap>
	);
};