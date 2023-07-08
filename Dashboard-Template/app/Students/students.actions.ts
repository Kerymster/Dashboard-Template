/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  ICreateData,
  IDeleteData,
  IStudent,
  IStudentFilter,
  IStudentsData,
} from './constants/interfaces';

export const keys = {
  students: 'students',
};

export enum STUDENTS_ACTION_TYPES {
  SET_STUDENTS = '[Students] Set Students',
  GET_STUDENTS = '[Students] Get Students',
  SET_STUDENTS_COUNT = '[Students] Set Students Count',
  GET_STUDENT = '[Students] Get Student',
  SET_STUDENT = '[Students] Set Student',
  SET_CURRENT_PAGE = '[Students] Set Current Page',
  SET_FILTER = '[Students] Set Filter',
  SEARCH_STUDENT = '[Students] Search Student',
  CREATE_STUDENT = '[Students] Create Student',
  EDIT_STUDENT = '[Students] Edit Student',
  DELETE_STUDENT = '[Students] Delete Student',
  SET_CREATE_DATA = '[Students] Create General Data',
  SET_EDIT_DATA = '[Students] Edit General Data',
  SET_DELETE_DATA = '[Students] Delete General Data',
  STUDENTS_TOGGLE_LOADING = '[Students] Toggle Loading',
}

export interface IGetStudentsAction {
  type: STUDENTS_ACTION_TYPES.GET_STUDENTS;
  data: IStudentFilter;
}

export interface ISetStudentsAction {
  type: STUDENTS_ACTION_TYPES.SET_STUDENTS;
  data: IStudent[] | [];
}

export interface ISetStudentsCountAction {
  type: STUDENTS_ACTION_TYPES.SET_STUDENTS_COUNT;
  data: { total: number; skip: number; limit: number };
}

export interface ISetFilterAction {
  type: STUDENTS_ACTION_TYPES.SET_FILTER;
  data: { name: string; data: any };
}

export interface ISearchStudentAction {
  type: STUDENTS_ACTION_TYPES.SEARCH_STUDENT;
  data: { q: string };
}

export interface ICreateStudentAction {
  type: STUDENTS_ACTION_TYPES.CREATE_STUDENT;
  data: Partial<IStudent>;
}

export interface IEditStudentAction {
  type: STUDENTS_ACTION_TYPES.EDIT_STUDENT;
  data: Partial<IStudent>;
}

export interface IDeleteStudentAction {
  type: STUDENTS_ACTION_TYPES.DELETE_STUDENT;
  data: number;
}

export interface IGetSingleStudentAction {
  type: STUDENTS_ACTION_TYPES.GET_STUDENT;
  data: string;
}

export interface ISetSingleStudentAction {
  type: STUDENTS_ACTION_TYPES.SET_STUDENT;
  data: IStudent | null;
}

export interface ISetCreateData {
  type: STUDENTS_ACTION_TYPES.SET_CREATE_DATA;
  data: ICreateData;
}
export interface ISetEditData {
  type: STUDENTS_ACTION_TYPES.SET_EDIT_DATA;
  data: IDeleteData;
}
export interface ISetDeleteData {
  type: STUDENTS_ACTION_TYPES.SET_DELETE_DATA;
  data: IDeleteData;
}

export interface IStudentsToggleLoadingAction {
  type: STUDENTS_ACTION_TYPES.STUDENTS_TOGGLE_LOADING;
}

export type StudentActions =
  | IGetStudentsAction
  | ISetStudentsAction
  | ISetStudentsCountAction
  | ISetFilterAction
  | ISearchStudentAction
  | ICreateStudentAction
  | IEditStudentAction
  | IDeleteStudentAction
  | IGetSingleStudentAction
  | ISetSingleStudentAction
  | ISetCreateData
  | ISetEditData
  | ISetDeleteData
  | IStudentsToggleLoadingAction;
