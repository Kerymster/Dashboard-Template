/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */

'use client';
import { Button } from '@/app/components/button';
import { FormInput } from '@/app/components/form-input';
import { FormPhoneInput } from '@/app/components/form-phone-input';
import { Heading } from '@/app/components/heading';
import { toggleModalVisibility } from '@/app/components/modal/modal.actions';
import { MODAL_NAMES } from '@/app/components/modal/modal.contsants';
import { OneColumnRow } from '@/app/components/one-column-row';
import { TwoColumnRow } from '@/app/components/two-colum-row';
import {
  ICreateEditStudentProps,
  IStudent,
} from '@/app/Students/constants/interfaces';
import {
  ICreateStudentAction,
  IEditStudentAction,
  ISetSingleStudentAction,
  STUDENTS_ACTION_TYPES,
} from '@/app/Students/students.actions';
import { IStudentsState } from '@/app/Students/students.reducer';
import { GenericActionCreator } from '@/app/utils/generic.action';
import { IGlobalState } from '@/redux/reducers';
import { Form, Formik } from 'formik';
import { memo, NamedExoticComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  initialValues,
  studentsValidationSchema,
} from './create-edit-students.constants';

export const CreateEditStudent: NamedExoticComponent<ICreateEditStudentProps> =
  memo(() => {
    const dispatch = useDispatch();
    const { selectedStudent } = useSelector<IGlobalState, IStudentsState>(
      (state) => state.students
    );

    useEffect(() => {
      return () => {
        dispatch(
          GenericActionCreator<ISetSingleStudentAction>({
            type: STUDENTS_ACTION_TYPES.SET_STUDENT,
            data: null,
          })
        );
      };
    }, []);

    const handleSubmit = (values: Partial<IStudent>) => {
      if (selectedStudent?.id) {
        dispatch(
          GenericActionCreator<IEditStudentAction>({
            type: STUDENTS_ACTION_TYPES.EDIT_STUDENT,
            data: values,
          })
        );
        dispatch(toggleModalVisibility(MODAL_NAMES.EDIT_STUDENT));
      } else {
        dispatch(
          GenericActionCreator<ICreateStudentAction>({
            type: STUDENTS_ACTION_TYPES.CREATE_STUDENT,
            data: values,
          })
        );

        dispatch(toggleModalVisibility(MODAL_NAMES.CREATE_STUDENT));
      }
    };

    return (
      <Formik<Partial<IStudent>>
        initialValues={initialValues(selectedStudent)}
        enableReinitialize
        onSubmit={handleSubmit}
        validationSchema={studentsValidationSchema()}
      >
        {() => {
          return (
            <Form>
              <div className="w-full space-y-8 bg-white">
                <Heading>
                  {selectedStudent?.id ? 'Edit Student' : 'Create Student'}
                </Heading>
                <div className="flex mt-10 flex-col gap-6">
                  <TwoColumnRow>
                    <FormInput
                      name="firstName"
                      label="First Name"
                      placeholder="First Name"
                      type="text"
                    />
                    <FormInput
                      name="lastName"
                      label="Last Name"
                      placeholder="Last Name"
                      type="text"
                    />
                  </TwoColumnRow>
                  <TwoColumnRow>
                    <FormInput
                      name="maidenName"
                      label="Maiden Name"
                      placeholder="Maiden Name"
                      type="text"
                    />
                    <FormInput
                      name="email"
                      label="Email Address"
                      placeholder="Email Address"
                      type="email"
                      autoComplete="email"
                    />
                  </TwoColumnRow>
                  <TwoColumnRow>
                    <FormInput
                      name="domain"
                      label="Website"
                      placeholder="Website"
                      type="text"
                    />
                    <FormPhoneInput
                      name="phone"
                      label="Phone Number"
                      placeholder="(202) 555-0179"
                    />
                  </TwoColumnRow>
                  <OneColumnRow>
                    <FormInput
                      name="company.name"
                      label="Company"
                      placeholder="Company"
                      type="text"
                    />
                  </OneColumnRow>
                </div>
              </div>
              <div className="mt-8 flex justify-between items-center">
                <div className="flex space-x-2">
                  <Button
                    type="button"
                    kind="white"
                    onClick={() => {
                      selectedStudent?.id
                        ? dispatch(
                            toggleModalVisibility(MODAL_NAMES.EDIT_STUDENT)
                          )
                        : dispatch(
                            toggleModalVisibility(MODAL_NAMES.CREATE_STUDENT)
                          );
                    }}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">
                    {selectedStudent?.id ? 'Edit Student' : 'Create Student'}
                  </Button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    );
  });

export { CreateEditStudent as default };
