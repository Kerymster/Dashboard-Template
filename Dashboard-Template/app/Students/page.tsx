'use client';
import { IGlobalState } from '@/redux/reducers';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InnerLayout from '../components/inner-layout';
import { itemsPerPageOptions } from '../components/pagination/constants';
import Pagination from '../components/pagination/pagination';
import {
  ISetPageAction,
  PAGINATION_ACTION_TYPES,
} from '../components/pagination/pagination.actions';
import { IPaginationState } from '../components/pagination/pagination.reducer';
import Spinner from '../components/spinner';

import { GenericActionCreator } from '../utils/generic.action';
import StudentBar from './patterns/student-bar';
import StudentsTopBar from './patterns/students-top-bar';
import TitleBar from './patterns/title-bar';
import { IGetStudentsAction, STUDENTS_ACTION_TYPES } from './students.actions';
import { IStudentsState } from './students.reducer';

const Students = () => {
  const dispatch = useDispatch();

  const { count, students, filter, loading } = useSelector<
    IGlobalState,
    IStudentsState
  >((state) => state.students);

  const { currentPage, limit } = useSelector<IGlobalState, IPaginationState>(
    (state) => state.pagination
  );

  useEffect(() => {
    dispatch(
      GenericActionCreator<IGetStudentsAction>({
        type: STUDENTS_ACTION_TYPES.GET_STUDENTS,
        data: { ...filter, limit: limit, skip: (currentPage - 1) * limit },
      })
    );
  }, [filter.search, limit, filter.q, currentPage]);

  return (
    <InnerLayout>
      <Spinner size="medium" spin={loading} />
      <StudentsTopBar />
      <div
        style={{ height: 'calc(100vh - 142px)' }}
        className="w-full px-10 pb-2 bg-gray-100"
      >
        <TitleBar />
        <div style={{ maxHeight: '500px' }} className="overflow-auto">
          {students.map((item) => (
            <StudentBar data={item} key={item.id} />
          ))}
        </div>
        {count && (
          <Pagination
            totalItems={count.total}
            itemsPerPageOptions={itemsPerPageOptions}
            totalPages={Math.ceil(count.total / limit)}
          />
        )}
      </div>
    </InnerLayout>
  );
};

export default Students;
