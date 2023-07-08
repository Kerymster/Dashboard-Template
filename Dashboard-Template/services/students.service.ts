import { IStudent } from '@/app/Students/constants/interfaces';
import { request } from '@/app/utils/request';
import endpoints from './endpoints';

export const getStudents = (query: string) =>
  request.get(endpoints.students(query));
export const searchStudents = (query: string) =>
  request.get(endpoints.searchStudents(query));
export const getStudent = (studentId: string) =>
  request.get(endpoints.getStudent(studentId));
export const createStudent = (data: Partial<IStudent>) =>
  request.post(endpoints.createStudent(), data);
export const editStudent = (data: Partial<IStudent>) =>
  request.put(endpoints.editStudent(data.id as string), data);
export const deleteStudent = (studentId: string) =>
  request.delete(endpoints.deleteStudent(studentId));
