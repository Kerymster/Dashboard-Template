import { Button } from '@/app/components/button';
import { toggleModalVisibility } from '@/app/components/modal/modal.actions';
import { MODAL_NAMES } from '@/app/components/modal/modal.contsants';
import { IStudent } from '@/app/Students/constants/interfaces';
import {
  IGetSingleStudentAction,
  ISetDeleteData,
  ISetEditData,
  STUDENTS_ACTION_TYPES,
} from '@/app/Students/students.actions';
import { GenericActionCreator } from '@/app/utils/generic.action';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';

interface IStudentBar {
  data: IStudent;
}

const StudentBar = ({ data }: IStudentBar) => {
  const dispatch = useDispatch();

  const handleDelete = (id: string | number) => {
    dispatch(
      GenericActionCreator<ISetDeleteData>({
        type: STUDENTS_ACTION_TYPES.SET_DELETE_DATA,
        data: {
          deleteId: id,
          stateName: 'students',
        },
      })
    );
    dispatch(toggleModalVisibility(MODAL_NAMES.DELETE_STUDENT));
  };

  const handleEdit = (id: string | number) => {
    dispatch(
      GenericActionCreator<IGetSingleStudentAction>({
        type: STUDENTS_ACTION_TYPES.GET_STUDENT,
        data: `${id}`,
      })
    );
    dispatch(
      GenericActionCreator<ISetEditData>({
        type: STUDENTS_ACTION_TYPES.SET_EDIT_DATA,
        data: {
          deleteId: id,
          stateName: 'students',
        },
      })
    );
    dispatch(
      GenericActionCreator<ISetEditData>({
        type: STUDENTS_ACTION_TYPES.SET_EDIT_DATA,
        data: {
          deleteId: id,
          stateName: 'students',
        },
      })
    );
    dispatch(toggleModalVisibility(MODAL_NAMES.EDIT_STUDENT));
  };

  return (
    <div className="flex items-center py-4 text-sm text-gray-500 bg-white p-2 mb-2 gap-10 rounded-md">
      <div className="flex items-center w-2/12 text-center">
        <div className="mr-3">
          <Image
            className="rounded object-cover"
            height={50}
            width={50}
            src={data.image}
            alt="Picture of the author"
          />
        </div>
        <div className="text-start">
          {data.firstName} {data.maidenName ?? ''} {data.lastName}
        </div>
      </div>
      <div className="w-2/12">{data.email}</div>
      <div className="w-1/12">{data.phone}</div>
      <div className="w-2/12">{data.domain}</div>
      <div className="w-2/12">{data.company.name}</div>
      <div className="w-2/12">
        <div className="w-full flex justify-between text-amber-400 px-3">
          <Button onClick={() => handleEdit(data.id)}>
            <PencilIcon className="w-5 h-5" />
          </Button>
          <Button onClick={() => handleDelete(data.id)}>
            <TrashIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StudentBar;
