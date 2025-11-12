import React from 'react';
import BalanceCard from './BalanceCard';
import BarChart from './BarCharts';
import DailyExpenseBarChart from './DailyExpenseBarChart';
import MonthlyExpensePercentage from './MonthlyExpensePercentage';
import ExpenseHistory from './ExpenseHistory';
import IncomeHistory from './IncomeHistory';
import { useRouter } from 'next/navigation';



const DashBoard = () => {
    const router = useRouter();
    const handleSeeAll = () => {
        router.push('/monthly-expense-breakdown');
    }
    
    return (
        <div>
            <title> Home | Finote</title>
            <BalanceCard></BalanceCard>

            <div className='mb-15'>
                <div className='mt-15  flex flex-col md:flex-row gap-5'>
                    <BarChart></BarChart>
                    <MonthlyExpensePercentage></MonthlyExpensePercentage>
        
                </div>
                <div>
                    <div onClick={()=>handleSeeAll()} className="flex items-center justify-center font-semibold mt-5 bg-green-400 py-1 rounded-2xl shadow-xl cursor-pointer">
                        <button className="text-xl text-white  ">See all</button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-15'>
                <DailyExpenseBarChart></DailyExpenseBarChart>
                <ExpenseHistory></ExpenseHistory>
                <IncomeHistory></IncomeHistory>
            </div>


        </div>
    );
};

export default DashBoard;