'use client';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `https://finote-server.vercel.app`
})

const useAxios = () => {
    return axiosInstance;
};

export default useAxios;