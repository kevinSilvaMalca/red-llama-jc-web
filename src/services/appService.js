import { HttpTypeEnum } from '../utils/enums';
import { privateInstance, publicInstance } from './axios.http';

const getAxiosInstance = (type) => {
  return type === HttpTypeEnum.PRIVATE ? privateInstance : publicInstance;
};

const AppService = {
  get: async (url, params = {}, options = {}, type = HttpTypeEnum.PRIVATE) => {
    const axiosInstance = getAxiosInstance(type);
    const response = await axiosInstance.get(`${url}`, {
      params,
      ...options,
    });
    return response;
  },

  post: async (url, payload, options = {}, type = HttpTypeEnum.PRIVATE) => {
    const axiosInstance = getAxiosInstance(type);
    const response = await axiosInstance.post(`${url}`, payload, {
      ...options,
    });
    return response;
  },

  put: async (url, payload, options = {}, type = HttpTypeEnum.PRIVATE) => {
    const axiosInstance = getAxiosInstance(type);
    const response = await axiosInstance.put(`${url}`, payload, {
      ...options,
    });
    return response;
  },

  delete: async (
    url,
    params = {},
    options = {},
    type = HttpTypeEnum.PRIVATE,
  ) => {
    const axiosInstance = getAxiosInstance(type);
    const response = await axiosInstance.delete(`${url}`, {
      params,
      ...options,
    });
    return response;
  },
};

export default AppService;
