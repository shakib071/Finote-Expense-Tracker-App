import React from 'react';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useCategories = (userId) => {
    const axiosInstance = useAxios();
    
    return useQuery({
        queryKey:['get-category',userId],
        queryFn: async ()=> await axiosInstance.get(`/get-category/${userId}`).then(res => res.data),
        staleTime:1000*5*60,
    })
};

export default useCategories;