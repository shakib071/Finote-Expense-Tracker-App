import React from 'react';
import BalanceCard from './BalanceCard';
import BarChart from './BarCharts';
import DailyExpenseBarChart from './DailyExpenseBarChart';
import CompareLineChart from './CompareLineChart'
const DashBoard = () => {
    return (
        <div>
            <BalanceCard></BalanceCard>

            <div className='mt-15 mb-15'>
                <BarChart></BarChart>
            </div>

            <DailyExpenseBarChart></DailyExpenseBarChart>
            <CompareLineChart></CompareLineChart>


        </div>
    );
};

export default DashBoard;