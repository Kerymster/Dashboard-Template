import {
  IModalState,
  ModalReducer,
} from '@/app/components/modal/modal.reducer';
import {
  IPaginationState,
  PaginationReducer,
} from '@/app/components/pagination/pagination.reducer';
import { ILoginState, LoginReducer } from '@/app/Login/login.reducer';
import {
  IStudentsState,
  StudentsReducer,
} from '@/app/Students/students.reducer';
import { combineReducers } from 'redux';

export interface IGlobalState {
  user: ILoginState;
  students: IStudentsState;
  pagination: IPaginationState;
  modal: IModalState;
}

const rootReducer = combineReducers<IGlobalState>({
  user: LoginReducer,
  students: StudentsReducer,
  pagination: PaginationReducer,
  modal: ModalReducer,
});

export default rootReducer;
