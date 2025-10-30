import React from 'react';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useDailyExpense = (userId) => {
    const axiosInstance = useAxios();

    return useQuery({
        queryKey: ['get-daily-expense',userId],
        queryFn: async () =>  await axiosInstance.get(`/get-daily-expense/${userId}`).then(res=>res.data),
        staleTime:1000*5*60,
    })
};

export default useDailyExpense;