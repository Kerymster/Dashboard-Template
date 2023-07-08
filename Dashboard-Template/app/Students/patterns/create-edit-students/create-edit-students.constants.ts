import { ERROR_MESSAGES } from '../../../utils/error-messages';
import { object, string } from 'yup';
import { IStudent } from '@/app/Students/constants/interfaces';
import { parsePhone } from '@/app/utils/parse-phone';

export const initialValues = (
  student: Partial<IStudent> | null
): Partial<IStudent> => {
  return {
    id: student?.id || undefined,
    firstName: student?.firstName || '',
    maidenName: student?.maidenName || '',
    lastName: student?.lastName || '',
    email: student?.email || '',
    domain: student?.domain || '',
    phone: student?.phone ? parsePhone(student?.phone) : '',
    company: student?.company || { name: '' },
  };
};

export const studentsValidationSchema = () =>
  object({
    email: string().nullable().email(ERROR_MESSAGES.valid_email()),
    firstName: string()
      .nullable()
      .required(ERROR_MESSAGES.required('students first name')),
    maidenName: string().nullable(),
    lastName: string()
      .nullable()
      .required(ERROR_MESSAGES.required('students last name')),
    phone: string().nullable(),
    domain: string().nullable(),
    company: object({ name: string().nullable() }),
  });
