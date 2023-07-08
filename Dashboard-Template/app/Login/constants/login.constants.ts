import { object, string } from 'yup';
import { ERROR_MESSAGES } from '../../utils/error-messages';

export interface ILoginValues {
  email: string;
  password: string;
}

export const initialValues: ILoginValues = {
  email: '',
  password: '',
};

const { valid_email } = ERROR_MESSAGES;

export const loginValidationSchema = object({
  email: string()
    .nullable()
    .required(ERROR_MESSAGES.required('email', true))
    .email(valid_email()),
  password: string()
    .nullable()
    .required(ERROR_MESSAGES.required('password', true))
    .min(6, ERROR_MESSAGES.min(6, 'Password')),
});
