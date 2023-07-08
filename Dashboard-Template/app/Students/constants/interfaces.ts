export interface IStudentsData {
  data: {
    users: IStudent[];
    total: number;
    skip: number;
    limit: number;
  };
}
export interface IStudentData {
  data: IStudent;
}
export interface IStudent {
  id: number | string;
  image: string;
  firstName: string;
  lastName: string;
  maidenName?: string;
  email: string;
  phone: string;
  domain: string;
  company: { name: string };
}

export interface IStudentFilter {
  search?: string;
  limit?: number;
  page?: number;
  [key: string]: unknown;
}

export interface ICreateData {
  stateName: IStateName;
}
export interface IDeleteData {
  deleteId: string | number | null;
  stateName: IStateName;
}

export type ICreateEditStudentProps = {
  id?: number;
  [k: string]: unknown;
};
export type IStateName = 'students';
