import { Nullable, session } from '../../Types';

export interface ISessionState {
    session: Nullable<session>
};

export interface ISessionAction {
    type: string;
    payload?: any;
}

export enum sessionActionTypes {
    SET_SESSION = 'SET_SESSION',
    DELETE_SESSION = 'DELETE_SESSION',
}

const defaultState: ISessionState = {
    session: null
};

export const sessionReducer = (
    state = defaultState,
    action: ISessionAction,
): ISessionState => {
    switch (action.type) {
        case sessionActionTypes.SET_SESSION:
			return {
                session: action.payload
            };
		case sessionActionTypes.DELETE_SESSION:
			return defaultState;
		default:
			return state;
    }
};
  