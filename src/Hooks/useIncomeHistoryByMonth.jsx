import React from 'react';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useIncomeHistoryByMonth = (userId,month,year,page,limit,search) => {
    const axiosInstance = useAxios();
    return useQuery({
        queryKey: ['get-expense-history0-by-month',userId],
        queryFn: async () => await axiosInstance.get(`/get-income-data/${userId}?month=${month}&year=${year}&page=${page}&limit=${limit}&search=${search}`).then(res=>res.data),
        staleTime: 1000*6*60,
    })
};

export default useIncomeHistoryByMonth;