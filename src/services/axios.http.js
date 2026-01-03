import Axios from 'axios';
import { API_TOKEN, URL_BASE } from './environment';

const publicInstance = Axios.create({
  baseURL: `${URL_BASE}/v1`,
});
const privateInstance = Axios.create({
  baseURL: `${URL_BASE}/v1`,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export { publicInstance, privateInstance };
