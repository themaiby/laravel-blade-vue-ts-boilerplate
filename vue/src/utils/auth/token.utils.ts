import { localStorageKeys } from '@/constants/localStorageKeys';

export const getToken = (): string => localStorage.getItem(localStorageKeys.accessToken) || '';
