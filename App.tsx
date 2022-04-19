import 'react-native-gesture-handler'
import * as React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { Routes } from './src/Routes';
import { persistor, store } from './src/store';

interface AppProps {}

const App: React.FC<AppProps> = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Routes/>
			</PersistGate>
		</Provider>
	);
}

export default App;