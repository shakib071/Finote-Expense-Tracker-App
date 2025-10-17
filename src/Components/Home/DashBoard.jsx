import React from 'react';
import BalanceCard from './BalanceCard';
import BarChart from './BarCharts';
const DashBoard = () => {
    return (
        <div>
            <BalanceCard></BalanceCard>

            <div className='mt-15'>
                <BarChart></BarChart>
            </div>
        </div>
    );
};

export default DashBoard;