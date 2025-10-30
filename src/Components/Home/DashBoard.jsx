import React from 'react';
import BalanceCard from './BalanceCard';
import BarChart from './BarCharts';
import DailyExpenseBarChart from './DailyExpenseBarChart';
import MonthlyExpensePercentage from './MonthlyExpensePercentage';
import ExpenseHistory from './ExpenseHistory';
import IncomeHistory from './IncomeHistory';


const DashBoard = () => {
    
    return (
        <div>
            <BalanceCard></BalanceCard>

            <div className='mt-15 mb-15 flex gap-5'>
                <BarChart></BarChart>
                <MonthlyExpensePercentage></MonthlyExpensePercentage>
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