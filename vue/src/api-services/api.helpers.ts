import { AxiosResponse } from 'axios';

export const unwrap = (data: AxiosResponse) => data.data.data;
