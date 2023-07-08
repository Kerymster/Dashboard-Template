/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import axios, { AxiosInstance } from 'axios';
import { ENVIRONMENT } from '../config';

/**
 * Axios instance for create method to represent Core.URL specific works.
 *
 * * @type {AxiosInstance} request
 */
const request: AxiosInstance = axios.create({
  baseURL: ENVIRONMENT.BASE_URI,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { request };
