import React, { FC } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { CentredWrap } from '../components';

interface LoadingScreenProps {}

export const LoadingScreen: FC<LoadingScreenProps> = () => {
	return (
		<CentredWrap>
			<TextInput/>
			{/* <NumPad/> */}
		</CentredWrap>
	);
};