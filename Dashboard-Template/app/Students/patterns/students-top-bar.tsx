'use client';
import { Button } from '@/app/components/button';
import { toggleModalVisibility } from '@/app/components/modal/modal.actions';
import { MODAL_NAMES } from '@/app/components/modal/modal.contsants';
import SearchInput from '@/app/components/search-input';
import { Text } from '@/app/components/text';
import {
  ISetCreateData,
  STUDENTS_ACTION_TYPES,
} from '@/app/Students/students.actions';
import { GenericActionCreator } from '@/app/utils/generic.action';
import React from 'react';
import { useDispatch } from 'react-redux';

const StudentsTopBar = () => {
  const dispatch = useDispatch();
  const handleCreateStudent = () => {
    dispatch(
      GenericActionCreator<ISetCreateData>({
        type: STUDENTS_ACTION_TYPES.SET_CREATE_DATA,
        data: {
          stateName: 'students',
        },
      })
    );
    dispatch(toggleModalVisibility(MODAL_NAMES.CREATE_STUDENT));
  };

  return (
    <div>
      <div className="flex px-10 py-5 justify-between items-center bg-gray-100">
        <div>
          <Text weight="bold" size="lg">
            Students List
          </Text>
        </div>
        <div className="flex items-center gap-2">
          <SearchInput />
          <Button onClick={() => handleCreateStudent()} fullWidth>
            ADD NEW STUDENT
          </Button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default StudentsTopBar;
