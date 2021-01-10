import axios from 'axios';

const { SNOWPACK_PUBLIC_API_URL } = import.meta.env;

const publicAPI = axios.create({
  baseURL: SNOWPACK_PUBLIC_API_URL,
});

const publicGet = <T>(url: string, params = {}, options = {}): Promise<T> =>
  publicAPI
    .get<T>(url, {
      params,
      ...options,
    })
    .then((res) => res.data);

const publicPost = <T, R>(url: string, data: T, params = {}, options = {}): Promise<R> =>
  publicAPI
    .post<R>(url, data, { params, ...options })
    .then((res) => res.data);

const publicPut = <T, R>(url: string, data: T, params = {}, options = {}): Promise<R> =>
  publicAPI
    .put<R>(url, data, { params, ...options })
    .then((res) => res.data);

const publicDelete = <T>(url: string): Promise<T> =>
  publicAPI.delete<T>(url).then((res) => res.data);

export { publicGet, publicPost, publicPut, publicDelete };
