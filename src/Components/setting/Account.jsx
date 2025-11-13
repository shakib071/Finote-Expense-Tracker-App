'use client'
import useAuth from '@/Hooks/useAuth';
import React from 'react';
import Avatar from '../../../public/Avatar1.png';
import Image from 'next/image';

const Account = () => {
    const {user,loading} = useAuth();
    if(loading){
        return 'loading';
    }
    return (
        <div>
            {user && 
            <>
                <div>
                    <div className='md:flex bg-white mb-8 px-4 py-6 items-center shadow-xl justify-between rounded-xl'>
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
                </div>






                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 p-3 md:p-6 bg-gray-50 rounded-2xl shadow-md">
                    {/* Edit Button */}
                    <button className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-all">
                        Edit
                    </button>

                    {/* Name */}
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                        <p className="text-sm text-gray-500 font-medium">Name</p>
                        <p className="text-[15px] md:text-lg font-semibold text-gray-800 mt-1">
                        {user?.displayName || "N/A"}
                        </p>
                    </div>

                    {/* Email */}
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                        <p className="text-sm text-gray-500 font-medium">Email</p>
                        <p className="text-[15px] md:text-lg font-semibold text-gray-800 mt-1">
                        {user?.email || "N/A"}
                        </p>
                    </div>

                    {/* Verified */}
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                        <p className="text-sm text-gray-500 font-medium">Verification</p>
                        <p
                        className={`text-[15px] md:text-lg font-semibold mt-1 ${
                            user?.emailVerified ? "text-green-600" : "text-red-500"
                        }`}
                        >
                        {user?.emailVerified ? "Verified" : "Unverified"}
                        </p>
                    </div>

                    {/* Last Signed In */}
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                        <p className="text-sm text-gray-500 font-medium">Last Signed In</p>
                        <p className="text-[15px] md:text-lg font-semibold text-gray-800 mt-1">
                        {user?.metadata?.lastSignInTime || "Unknown"}
                        </p>
                    </div>
                    
                </div>





            </>
        }   
        </div>
    );
};

export default Account;