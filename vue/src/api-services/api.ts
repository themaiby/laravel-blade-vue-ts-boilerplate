import { getToken } from '@/utils/auth/token.utils';
import axios from 'axios';
// @ts-ignore
import tokenProvider from 'axios-token-interceptor';

const api = axios.create({
  baseURL: `${process.env.VUE_APP_APP_URL}:${process.env.VUE_APP_PORT}/api/${process.env.VUE_APP_API_VERSION}`,
  withCredentials: true,
});

api.interceptors.request.use(tokenProvider({ getToken }));

export default api;
