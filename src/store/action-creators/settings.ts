import { Dispatch } from "redux";
import { settings } from "../../Types";
import { settingsActionTypes } from "../reducers/settingsReducer";

export const setMasterPassword = (masterPassword: settings['masterPassword']) => {
    return async (dispatch:Dispatch) => {
        dispatch({type: settingsActionTypes.SET_MASTER_PASSWORD, payload: masterPassword});
    }
}