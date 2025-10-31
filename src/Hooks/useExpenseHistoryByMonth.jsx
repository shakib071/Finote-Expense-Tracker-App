import React from 'react';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useExpenseHistoryByMonth = (userId,month,year,page,limit,search) => {
    const axiosInstance = useAxios();
    return useQuery({
        queryKey: ['get-expense-history0-by-month',userId,month,year],
        queryFn: async () => await axiosInstance.get(`/get-expense-data/${userId}?month=${month}&year=${year}&page=${page}&limit=${limit}&search=${search}`).then(res=>res.data),
        staleTime: 1000*6*60,
    })
};

export default useExpenseHistoryByMonth;