import React from 'react';
import Avatar from '../../../public/Avatar1.png';
import Image from 'next/image';
import ProfileChartBar from './ProfileChartBar';
import ProgressBarChart from './ProgressBarChart';

const Profile = () => {
    return (
        <div className=''>
            <div className='flex bg-white mb-8 px-4 py-6 items-center shadow-xl justify-between rounded-xl'>
                <div className='flex gap-5 items-center'>
                    <div>
                        <p><Image className='w-15 h-15' src={Avatar} alt="avatar" /></p>
                    </div>

                    <div>
                        <p className='text-xl font-bold mb-2'>Shakib Hasan</p>
                        <p>shakibhasan071@gmail.com</p>
                    </div>
                </div>

                <div>
                    <p className='mb-2 font-semibold'>25 June 2025</p>
                    <p className='text-[#00000073]'>Registerd</p>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <ProgressBarChart></ProgressBarChart>
                <ProfileChartBar></ProfileChartBar>
            </div>
        </div>
    );
};

export default Profile;