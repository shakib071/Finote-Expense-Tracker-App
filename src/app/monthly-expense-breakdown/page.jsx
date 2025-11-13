'use client'
import useAuth from '@/Hooks/useAuth';
import useIncomeExpense from '@/Hooks/useIncomeExpense';
import useTopExpenseByCategory from '@/Hooks/useTopExpenseByCategory';
import React, { useEffect } from 'react';
import { FaCircle } from 'react-icons/fa';

const page = () => {
    const {user,loading,isRefetch,setIsRefetch} = useAuth();
    const {data:topMonthlyExpenseByCategory,isLoading,refetch} = useTopExpenseByCategory(user?.uid,-1);
    const {data:incomeExpense,isLoading:isLoading2,refetch:refetch2} = useIncomeExpense(user?.uid);


    console.log(topMonthlyExpenseByCategory);

    useEffect(()=> {
        if(isRefetch && user?.uid){
            refetch();
            refetch2();
            setIsRefetch(false);
        }
    },[isRefetch,setIsRefetch,refetch,user?.uid])

    // console.log(topMonthlyExpenseByCategory);
    if(loading || isLoading || isLoading2) {
        return 'loading';
    }
    return (
        <div className='w-full flex pt-10 min-h-screen bg-white p-4 rounded-xl flex-col gap-2'>
                    <p className='text-lg font-semibold'>Monthly Expense Breakdown</p>
        
                    {topMonthlyExpenseByCategory?.map((item,index)=>(
                        <div key={index} className='flex border-t-1 border-gray-300 items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <p className='text-red-700'><FaCircle color={item?.fill} /></p>
                                <p className='text-[#5a5959]'>{item?.category}</p>
                            </div>
        
                            <div className='flex items-center gap-3'>
                                <p className='text-[#2f2e2e]'>${item?.total}</p>
                                <p className='font-semibold'>{incomeExpense?.expense>0 ? ((item.total/incomeExpense?.expense)*100).toFixed(1) : '-'}{incomeExpense.expense>0 ? '%':''}</p>
                            </div>
        
                        </div>
                    ))}
                    
                </div>
    );
};

export default page;