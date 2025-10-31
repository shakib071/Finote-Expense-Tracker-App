import React from 'react';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useExpenseSummary = (userId) => {
    const axiosInstance = useAxios();
    return useQuery({
        queryKey:['get-expense-summary',userId],
        queryFn: async ()=> await axiosInstance.get(`/get-expense-summary/${userId}`).then(res=>res.data),
        staleTime:1000*10*60,
    })
};

export default useExpenseSummary;