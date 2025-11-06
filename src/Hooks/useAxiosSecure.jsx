'use client'

import axios from 'axios';
import { useRouter } from 'next/navigation';
import useAuth from '../Hooks/useAuth';

const axiosSecure = axios.create({
  baseURL:'https://finote-server.vercel.app',
});

const useAxiosSecure = () => {
  const { user, logOut } = useAuth();
  const router = useRouter();

  //  Request Interceptor
  axiosSecure.interceptors.request.use(
    (config) => {
      if (user?.accessToken) {
        config.headers.Authorization = `Bearer ${user.accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  //  Response Interceptor
  axiosSecure.interceptors.response.use(
    (response) => response,
    (error) => {
      const status = error.response?.status;

      if (status === 403) {
        router.push('/forbidden');
      } else if (status === 401) {
        logOut()
          .then(() => router.push('/login'))
          .catch(() => {});
      }

      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
