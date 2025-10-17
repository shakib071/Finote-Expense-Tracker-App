import React from 'react';
import { HiTrendingUp } from "react-icons/hi";
import { HiTrendingDown } from "react-icons/hi";

const BalanceCard = () => {
    return (
        <div>

            <div >
                <p className='text-2xl font-bold'>DashBoard</p>
                <p className='text-[15px] mt-1 text-[#000000a6]'>Welcome to Finote</p>
            </div>

            <div className='mt-5 grid grid-cols-4 items-center justify-evenly gap-2'>

                <div className='p-3 bg-white flex flex-col rounded-lg gap-3'>
                    <p className='text-lg text-[#555454] font-semibold'>Total Balance</p>
                    <p className='text-2xl font-semibold'>$ 100000</p>
                    <hr className="border-t-2  border-gray-300"/>
                    <div className='flex items-center text-[15px]'>
                        <p className='text-[18px] pr-1 text-green-500'><HiTrendingUp/> </p>
                        <p><span className='text-green-600 font-semibold'>2.34% </span><span className='text-[#0b0b0ba7]'>Last Month</span> <span className='font-semibold text-[#121111d8]'>$20000</span></p>
                    </div>
                </div>

                
                <div className='p-3 bg-white flex flex-col rounded-lg gap-3'>
                    <p className='text-lg text-[#555454] font-semibold'>Total Balance</p>
                    <p className='text-2xl font-semibold'>$ 100000</p>
                    <hr className="border-t-2  border-gray-300"/>
                    <div className='flex items-center text-[15px]'>
                        <p className='text-[18px] pr-1 text-green-500'><HiTrendingUp/> </p>
                        <p><span className='text-green-600 font-semibold'>2.34% </span><span className='text-[#0b0b0ba7]'>Last Month</span> <span className='font-semibold text-[#121111d8]'>$20000</span></p>
                    </div>
                </div>


                <div className='p-3 bg-white flex flex-col rounded-lg gap-3'>
                    <p className='text-lg text-[#555454] font-semibold'>Total Balance</p>
                    <p className='text-2xl font-semibold'>$ 100000</p>
                    <hr className="border-t-2  border-gray-300"/>
                    <div className='flex items-center text-[15px]'>
                        <p className='text-[18px] pr-1 text-green-500'><HiTrendingUp/> </p>
                        <p><span className='text-green-600 font-semibold'>2.34% </span><span className='text-[#0b0b0ba7]'>Last Month</span> <span className='font-semibold text-[#121111d8]'>$20000</span></p>
                    </div>
                </div>


                <div className='p-3 bg-white flex flex-col rounded-lg gap-3'>
                    <p className='text-lg text-[#555454] font-semibold'>Total Balance</p>
                    <p className='text-2xl font-semibold'>$ 100000</p>
                    <hr className="border-t-2  border-gray-300"/>
                    <div className='flex items-center text-[15px]'>
                        <p className='text-[18px] pr-1 text-green-500'><HiTrendingUp/> </p>
                        <p><span className='text-green-600 font-semibold'>2.34% </span><span className='text-[#0b0b0ba7]'>Last Month</span> <span className='font-semibold text-[#121111d8]'>$20000</span></p>
                    </div>
                </div>
                
               
                
              

            </div>
        </div>
    );
};

export default BalanceCard;