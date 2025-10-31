import React from 'react';
import Avatar from '../../../public/Avatar1.png';
import Image from 'next/image';
import ProfileChartBar from './ProfileChartBar';
import ProgressBarChart from './ProgressBarChart';
import useAuth from '@/Hooks/useAuth';

const Profile = () => {
    const {user,loading} = useAuth();

    if(loading) {
        return
    }
    return (
        <div className=''>
            {user && 
            <>
                <div className='flex bg-white mb-8 px-4 py-6 items-center shadow-xl justify-between rounded-xl'>
                    <div className='flex gap-5 items-center'>
                        <div>
                            {user?.photoURL ? <p><Image width={96} height={96} className='w-15 h-15 rounded-full' src={user?.photoURL} alt="avatar" /></p> : <p><Image className='w-15 h-15' src={Avatar} alt="avatar" /></p>}
                        </div>

                        <div>
                            <p className='text-xl font-bold mb-2'>{user?.displayName}</p>
                            <p>{user?.email}</p>
                        </div>
                    </div>

                    <div>
                        <p className='mb-2 font-semibold'>{user?.metadata?.creationTime}</p>
                        <p className='text-[#00000073]'>{user?.emailVerified===true ? 'Verified':'Unverified'}</p>
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                    <ProgressBarChart></ProgressBarChart>
                    <ProfileChartBar></ProfileChartBar>
                </div>
            </>
            }
        </div>
    );
};

export default Profile;