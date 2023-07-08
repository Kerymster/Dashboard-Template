/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  PaginationActions,
  PAGINATION_ACTION_TYPES,
} from './pagination.actions';

export interface IPaginationState {
  currentPage: number;
  limit: number;
}

export const initialState: IPaginationState = {
  currentPage: 1,
  limit: 10,
};

export const PaginationReducer = (
  state: Readonly<IPaginationState> = initialState,
  action: PaginationActions
): IPaginationState => {
  switch (action.type) {
    case PAGINATION_ACTION_TYPES.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.data };
    case PAGINATION_ACTION_TYPES.SET_LIMIT:
      return { ...state, limit: action.data };

    default:
      return state;
  }
};
