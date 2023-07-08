/* eslint-disable @typescript-eslint/no-explicit-any */
import { IDeleteData, IStudent, IStudentFilter } from './constants/interfaces';

import { StudentActions, STUDENTS_ACTION_TYPES } from './students.actions';

export interface IStudentsState {
  count: { total: number; skip: number; limit: number } | null;
  students: IStudent[] | [];
  loading: boolean;
  currentPage: number;
  filter: IStudentFilter;
  selectedStudent: IStudent | null;
  deleteData: IDeleteData;
}

export const initialState: IStudentsState = {
  count: null,
  students: [],
  loading: false,
  currentPage: 1,
  filter: {},
  selectedStudent: null,
  deleteData: {
    deleteId: null,
    stateName: 'students',
  },
};

export const StudentsReducer = (
  state: Readonly<IStudentsState> = initialState,
  action: StudentActions
): IStudentsState => {
  switch (action.type) {
    case STUDENTS_ACTION_TYPES.GET_STUDENTS:
      return { ...state, loading: true };
    case STUDENTS_ACTION_TYPES.SET_STUDENTS:
      return { ...state, students: action.data, loading: false };
    case STUDENTS_ACTION_TYPES.SET_STUDENTS_COUNT:
      return { ...state, count: action.data, loading: false };
    case STUDENTS_ACTION_TYPES.GET_STUDENT:
      return { ...state, loading: true };
    case STUDENTS_ACTION_TYPES.SET_STUDENT:
      return { ...state, selectedStudent: action.data, loading: false };
    case STUDENTS_ACTION_TYPES.CREATE_STUDENT:
      return { ...state, loading: true };
    //Done just for showcase
    case STUDENTS_ACTION_TYPES.EDIT_STUDENT:
      const updatedStudents = state.students.map((item) =>
        item.id === action.data.id ? { ...item, ...action.data } : item
      );
      return { ...state, students: updatedStudents, loading: true };
    //Done just for showcase
    case STUDENTS_ACTION_TYPES.DELETE_STUDENT:
      const remainingStudents = state.students.filter(
        (item) => item.id !== action.data
      );
      return { ...state, students: remainingStudents, loading: true };

    case STUDENTS_ACTION_TYPES.SET_FILTER:
      return {
        ...state,
        filter: { ...state.filter, [action.data.name]: action.data.data },
      };
    case STUDENTS_ACTION_TYPES.SET_DELETE_DATA:
      return { ...state, deleteData: action.data };
    case STUDENTS_ACTION_TYPES.STUDENTS_TOGGLE_LOADING:
      return { ...state, loading: !state.loading };
    default:
      return state;
  }
};
