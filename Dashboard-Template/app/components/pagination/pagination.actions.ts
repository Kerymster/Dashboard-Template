/* eslint-disable @typescript-eslint/no-explicit-any */

export enum PAGINATION_ACTION_TYPES {
  SET_CURRENT_PAGE = '[Pagination] Set Page',
  SET_LIMIT = '[Pagination] Set Limit',
}

export interface ISetPageAction {
  type: PAGINATION_ACTION_TYPES.SET_CURRENT_PAGE;
  data: number;
}

export interface ISetLimitAction {
  type: PAGINATION_ACTION_TYPES.SET_LIMIT;
  data: number;
}

export type PaginationActions = ISetPageAction | ISetLimitAction;
