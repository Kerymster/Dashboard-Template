'use client';
import {
  IDeleteStudentAction,
  ISetDeleteData,
  STUDENTS_ACTION_TYPES,
} from '@/app/Students/students.actions';
import { GenericActionCreator } from '@/app/utils/generic.action';
import { IGlobalState } from '@/redux/reducers';
import { Dialog } from '@headlessui/react';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModalVisibility } from './modal/modal.actions';
import { MODAL_NAMES } from './modal/modal.contsants';

const fieldName = {
  students: 'student',
};

const DeleteConfirmation = () => {
  const dispatch = useDispatch();
  const { deleteId, stateName } = useSelector(
    (state: IGlobalState) => state.students.deleteData
  );

  const handleDeleteClick = () => {
    if (stateName === 'students' && deleteId) {
      dispatch(toggleModalVisibility(MODAL_NAMES.DELETE_STUDENT));
      dispatch(
        GenericActionCreator<IDeleteStudentAction>({
          type: STUDENTS_ACTION_TYPES.DELETE_STUDENT,
          data: deleteId as number,
        })
      );
    }
  };

  useEffect(() => {
    return () => {
      dispatch(
        GenericActionCreator<ISetDeleteData>({
          type: STUDENTS_ACTION_TYPES.SET_DELETE_DATA,
          data: { deleteId: null, stateName: 'students' },
        })
      );
    };
  }, []);

  return (
    <>
      <div className="bg-white">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 sm:mx-0 sm:h-10 sm:w-10">
            <ExclamationCircleIcon
              className="h-6 w-6 text-amber-600"
              aria-hidden="true"
            />
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              Delete Student
            </Dialog.Title>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Are you sure you want to delete this {fieldName[stateName]}? All
                of your data will be permanently removed. This action cannot be
                undone.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white px-4 pt-4 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md border border-transparent bg-amber-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() =>
            dispatch(toggleModalVisibility(MODAL_NAMES.DELETE_STUDENT))
          }
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default DeleteConfirmation;
