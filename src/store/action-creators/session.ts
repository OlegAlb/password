import { Dispatch } from "redux";
import { session } from "../../Types";
import { sessionActionTypes } from "../reducers/sessionReducer";

export const setSessionAction = (session: session) => {
    return async (dispatch:Dispatch) => {
        dispatch({type: sessionActionTypes.SET_SESSION, payload: session});
    }
}

export const deleteSessionAction = () => {
    return async (dispatch:Dispatch) => {
        dispatch({type: sessionActionTypes.DELETE_SESSION});
    }
}