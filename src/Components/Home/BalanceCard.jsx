import useAuth from '@/Hooks/useAuth';
import useIncomeExpense from '@/Hooks/useIncomeExpense';
import React, { useEffect } from 'react';
import { HiTrendingUp } from "react-icons/hi";
import { HiTrendingDown } from "react-icons/hi";

const BalanceCard = () => {
    const {user,loading,isRefetch,setIsRefetch} = useAuth();
    const {data:incomeExpense,isLoading,refetch} = useIncomeExpense(user?.uid);

    // console.log('fetch in dashboard',isRefetch,setisRefetch);
    // console.log(incomeExpense);

    useEffect(()=>{
        if(user?.uid && isRefetch){
            refetch();
            setIsRefetch(false);
        }
    },[user?.uid, isRefetch, refetch, setIsRefetch] );

    console.log(user);

    const day = new Date().getDate();
    // console.log(day);
    

    if(loading || isLoading) {
        return 'loading';
    }

    return (
        <div>

            <div >
                <p className='text-xl md:text-2xl font-bold'>DashBoard</p>
                <p className='text-[13px] md:text-[15px] mt-1 text-[#000000a6]'>Welcome to Finote</p>
            </div>

            <div className='mt-5 grid grid-cols-2 md:grid-cols-4 items-center justify-evenly gap-2 md:gap-2'>

                <div className='p-2 md:p-3 bg-white flex flex-col rounded-lg gap-3'>
                    <p className='text-[17px] md:text-lg text-[#555454] font-semibold'>Total Income</p>
                    <p className='md:text-2xl font-semibold'>$ {incomeExpense?.balance || 0} </p>
                    <hr className="border-t-2  border-gray-300"/>
                    {/* <div className='flex items-center text-[15px]'>
                        <p className='text-[18px] pr-1 text-green-500'><HiTrendingUp/> </p>
                        <p><span className='text-green-600 font-semibold'>2.34% </span><span className='text-[#0b0b0ba7]'>Last Month</span> <span className='font-semibold text-[#121111d8]'>$20000</span></p>
                    </div> */}
                </div>

                
                <div className='p-2 md:p-3 bg-white flex flex-col rounded-lg gap-3'>
                    <p className='text-[17px] md:text-lg text-[#555454] font-semibold'>Total Expense</p>
                    <p className='md:text-2xl font-semibold'>$ {incomeExpense?.expense || 0}</p>
                    <hr className="border-t-2  border-gray-300"/>
                    
                </div>


                <div className='p-2 md:p-3 bg-white flex flex-col rounded-lg gap-3'>
                    <p className='text-[17px] md:text-lg text-[#555454] font-semibold'>Balace Left</p>
                    <p className='md:text-2xl font-semibold'>$ {(incomeExpense?.balance - incomeExpense?.expense) || 0}</p>
                    <hr className="border-t-2  border-gray-300"/>
                    
                </div>
                <div className='p-2 md:p-3 bg-white flex flex-col rounded-lg gap-2 md:gap-3'>
                    <p className='text-[12px] md:text-lg text-[#555454] font-semibold'>Daily Average Expense</p>
                    <p className='md:text-2xl font-semibold'>$ {(Math.round(incomeExpense?.expense/day)) || 0}</p>
                    <hr className="border-t-2  border-gray-300"/>
                   
                </div>
                
               

            </div>
        </div>
    );
};

export default BalanceCard;