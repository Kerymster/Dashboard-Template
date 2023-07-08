/* eslint-disable @typescript-eslint/no-explicit-any */

import { put, select, takeLatest } from 'redux-saga/effects';
import {
  ICreateStudentAction,
  IDeleteStudentAction,
  IEditStudentAction,
  IGetSingleStudentAction,
  IGetStudentsAction,
  ISearchStudentAction,
  ISetSingleStudentAction,
  ISetStudentsAction,
  ISetStudentsCountAction,
  IStudentsToggleLoadingAction,
  STUDENTS_ACTION_TYPES,
} from './students.actions';
import {
  createStudent,
  deleteStudent,
  editStudent,
  getStudent,
  getStudents,
  searchStudents,
} from '../../services/students.service';
import * as qs from 'qs';

import { toast } from 'react-toastify';
import { IStudent, IStudentData, IStudentsData } from './constants/interfaces';
import { GenericActionCreator } from '../utils/generic.action';
import { serviceWrapperSaga } from '../utils/service-wrapper.saga';
import { errorHandlers } from '../utils/service-error-handler';

import {
  ISetPageAction,
  PAGINATION_ACTION_TYPES,
} from '../components/pagination/pagination.actions';
import { toggleModalVisibility } from '../components/modal/modal.actions';
import { MODAL_NAMES } from '../components/modal/modal.contsants';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function* GetStudentsSaga({ data }: IGetStudentsAction) {
  try {
    const qsObject = {
      ...data,
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const StudentsData: IStudentsData = yield serviceWrapperSaga(
      getStudents,
      errorHandlers,
      qs.stringify(qsObject)
    );

    if (StudentsData) {
      const { users, ...rest } = StudentsData.data;
      yield put(
        GenericActionCreator<ISetStudentsAction>({
          type: STUDENTS_ACTION_TYPES.SET_STUDENTS,
          data: users,
        })
      );
      yield put(
        GenericActionCreator<ISetStudentsCountAction>({
          type: STUDENTS_ACTION_TYPES.SET_STUDENTS_COUNT,
          data: rest,
        })
      );
    }
  } catch (e) {
    yield put(
      GenericActionCreator<ISetStudentsAction>({
        type: STUDENTS_ACTION_TYPES.SET_STUDENTS,
        data: [],
      })
    );
    toast.error('There was an error with the student data');
  }
}

function* SearchStudentsSaga({ data }: ISearchStudentAction) {
  try {
    const qsObject = {
      ...data,
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const StudentsData: IStudentsData = yield serviceWrapperSaga(
      searchStudents,
      errorHandlers,
      qs.stringify(qsObject)
    );

    if (StudentsData) {
      yield put(
        GenericActionCreator<ISetStudentsAction>({
          type: STUDENTS_ACTION_TYPES.SET_STUDENTS,
          data: StudentsData.data.users,
        })
      );
    }
  } catch (e) {
    yield put(
      GenericActionCreator<ISetStudentsAction>({
        type: STUDENTS_ACTION_TYPES.SET_STUDENTS,
        data: [],
      })
    );
    toast.error('There was an error with the student data');
  }
}

function* CreateStudentSaga({ data }: ICreateStudentAction) {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    yield serviceWrapperSaga(createStudent, errorHandlers, data);
    toast.success('Succesfully created the student');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    yield put(
      GenericActionCreator<IGetStudentsAction>({
        type: STUDENTS_ACTION_TYPES.GET_STUDENTS,
        data: {
          page: 1,
          limit: 10,
        },
      })
    );
  } catch (e) {
    yield put(
      GenericActionCreator<IGetStudentsAction>({
        type: STUDENTS_ACTION_TYPES.GET_STUDENTS,
        data: {
          page: 1,
          limit: 10,
        },
      })
    );
    toast.error('There was an error with creating the student data');
  }
}

function* EditStudentSaga({ data }: IEditStudentAction) {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    yield serviceWrapperSaga(editStudent, errorHandlers, data);
    toast.success('Succesfully edited the student');
  } catch (e) {
    yield put(
      GenericActionCreator<IGetStudentsAction>({
        type: STUDENTS_ACTION_TYPES.GET_STUDENTS,
        data: {
          page: 1,
          limit: 10,
        },
      })
    );
    toast.error('There was an error with editing the student data');
  }
}

function* DeleteStudentSaga({ data }: IDeleteStudentAction) {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    yield serviceWrapperSaga(deleteStudent, errorHandlers, data);
    yield put(
      GenericActionCreator<IStudentsToggleLoadingAction>({
        type: STUDENTS_ACTION_TYPES.STUDENTS_TOGGLE_LOADING,
      })
    );

    toast.success('Succesfully deleted the Student');
  } catch (e) {
    yield put(
      GenericActionCreator<IStudentsToggleLoadingAction>({
        type: STUDENTS_ACTION_TYPES.STUDENTS_TOGGLE_LOADING,
      })
    );
    toast.error('There was an error with deleting the student data');
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function* GetSingleStudentSaga({ data }: IGetSingleStudentAction) {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const student: IStudentData = yield serviceWrapperSaga(
      getStudent,
      errorHandlers,
      data
    );
    yield put(
      GenericActionCreator<ISetSingleStudentAction>({
        type: STUDENTS_ACTION_TYPES.SET_STUDENT,
        data: student.data,
      })
    );
  } catch (e) {
    yield put(
      GenericActionCreator<ISetSingleStudentAction>({
        type: STUDENTS_ACTION_TYPES.SET_STUDENT,
        data: null,
      })
    );
    toast.error('There was an error with the student data');
  }
}

/**
 * StudentsModuleSaga Init
 *
 * @returns {IterableIterator<ForkEffect[]>}
 */
export default function* StudentsModuleSaga(): Generator {
  yield takeLatest(STUDENTS_ACTION_TYPES.GET_STUDENTS, GetStudentsSaga);
  yield takeLatest(STUDENTS_ACTION_TYPES.SEARCH_STUDENT, SearchStudentsSaga);
  yield takeLatest(STUDENTS_ACTION_TYPES.CREATE_STUDENT, CreateStudentSaga);
  yield takeLatest(STUDENTS_ACTION_TYPES.EDIT_STUDENT, EditStudentSaga);
  yield takeLatest(STUDENTS_ACTION_TYPES.DELETE_STUDENT, DeleteStudentSaga);
  yield takeLatest(STUDENTS_ACTION_TYPES.GET_STUDENT, GetSingleStudentSaga);
}
