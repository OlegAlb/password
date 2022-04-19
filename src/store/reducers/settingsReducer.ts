import { Nullable, settings } from '../../Types';

export interface ISettingsState extends settings {};

export interface ISettingsAction {
    type: string;
    payload?: any;
}

export enum settingsActionTypes {
    SET_SETTINGS = 'SET_SETTINGS',
    SET_MASTER_PASSWORD = 'SET_MASTER_PASSWORD',
    DELETE_SETTINGS = 'DELETE_SETTINGS',
}

const defaultState: ISettingsState = {
    masterPassword: null
};

export const settingsReducer = (
    state = defaultState,
    action: ISettingsAction,
): ISettingsState => {
    switch (action.type) {
        case settingsActionTypes.SET_SETTINGS:
			return action.payload;
        case settingsActionTypes.SET_MASTER_PASSWORD:
			return {...state, masterPassword: action.payload};
		case settingsActionTypes.DELETE_SETTINGS:
			return defaultState;
		default:
			return state;
    }
};
  