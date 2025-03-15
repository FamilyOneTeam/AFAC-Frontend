import axios from 'axios';
import { AxiosBase } from '@/common/axios';
import { loginSchemaType } from '../types';

export const loginApi = async(values: loginSchemaType) => {
  try {
    const response = await AxiosBase.post(
      '/auth/login',
      values
    );
    return response.data;
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Se necesitan las credenciales correctas",
          status: error.response.status,
        }
      : {
          error: "Un error ha ocurrido",
        };
  }
};

