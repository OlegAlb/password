import { combineReducers } from "redux";
import { ISessionState, sessionReducer } from "./sessionReducer";
import { ISettingsState, settingsReducer } from "./settingsReducer";

export type StoreState = {
    session: ISessionState,
    settings: ISettingsState,
}

export const rootReducer = combineReducers({
    session: sessionReducer,
    settings: settingsReducer,
})

export type RootState = ReturnType<typeof rootReducer>;