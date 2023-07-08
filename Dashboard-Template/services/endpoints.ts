export default {
  //users
  students: (query: string) => `/users?${query}`,
  searchStudents: (query: string) => `/users/search?${query}`,
  createStudent: () => '/users/add',
  editStudent: (studentId: string) => `/user/${studentId}`,
  deleteStudent: (studentId: string) => `/user/${studentId}`,
  getStudent: (studentId: string) => `/user/${studentId}`,
};
