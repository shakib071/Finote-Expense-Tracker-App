//get expense history this month by category

import React from 'react';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useTopExpenseByCategory = (userId) => {
    const axiosInstance = useAxios();
    
    return useQuery({
        queryKey: ['get-expense-history',userId],
        queryFn: async ()=> await axiosInstance.get(`/get-top10-expense-history/${userId}`).then(res=>res.data),
        staleTime:1000*60*5,
    })
};

export default useTopExpenseByCategory;