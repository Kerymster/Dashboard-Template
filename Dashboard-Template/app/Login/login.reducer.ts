/* eslint-disable @typescript-eslint/no-explicit-any */
import { IStudent } from '../Students/constants/interfaces';
import { LoginActions, LOGIN_ACTION_TYPES } from '../Login/login.actions';

export interface ILoginState extends Partial<IStudent> {
  login: boolean;
  loading: boolean;
}

export const initialState: ILoginState = {
  login: false,
  loading: false,
};

export const LoginReducer = (
  state: Readonly<ILoginState> = initialState,
  action: LoginActions
): ILoginState => {
  switch (action.type) {
    case LOGIN_ACTION_TYPES.SET_LOGIN:
      return {
        ...state,
        login: true,
        ...action.data,
      };
    case LOGIN_ACTION_TYPES.LOGOUT:
      return {
        ...initialState,
      };
    case LOGIN_ACTION_TYPES.TOGGLE_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };

    default:
      return state;
  }
};
