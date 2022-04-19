import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTypedSelector } from './hooks';
import { AppParamList, AuthParamList } from './ParamLists';
import { LoginScreen, SetCodeScreen } from './screens';

interface RoutesProps {}

const 
	AppStack = createStackNavigator<AppParamList>(),
	AuthStack = createStackNavigator<AuthParamList>();

export const Routes: React.FC<RoutesProps> = () => {
	const 
		{session} = useTypedSelector(state => state.session),
		{masterPassword} = useTypedSelector(state => state.settings);

	return (
		<NavigationContainer>
			{session ? (
				<AppStack.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
					{/* <AppStack.Screen name="Home" component={HomeScreen}/> */}
				</AppStack.Navigator>
				) : (
				<AuthStack.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
					{!masterPassword && <AuthStack.Screen name="SetCode" component={SetCodeScreen} />}
					<AuthStack.Screen name="Login" component={LoginScreen} />
				</AuthStack.Navigator>
			)}
		</NavigationContainer>
	);
};