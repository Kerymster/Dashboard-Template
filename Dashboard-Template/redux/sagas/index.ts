import StudentsModuleSaga from '@/app/Students/students.saga';
import { all, fork } from 'redux-saga/effects';

export default function* rootSaga(): Generator {
  yield all([fork(StudentsModuleSaga)]);
}
