import thunk from "redux-thunk";
import EncryptedStorage from 'react-native-encrypted-storage';
import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import { rootReducer } from "./reducers";

const persistConfig = {
    key: 'root',
    storage: EncryptedStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { persistor, store };