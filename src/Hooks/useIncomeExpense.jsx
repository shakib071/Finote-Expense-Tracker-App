import React from 'react';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';


const useIncomeExpense = (userId) => {
    const axiosInstance = useAxios();
    
    return useQuery({
        querykey: ['get-expense-income'],
        queryFn: ()=> axiosInstance.get(`/get-income-expense/${userId}`).then(res=>res.data),
        staleTime: 1000*60*5,
    })
};

export default useIncomeExpense;