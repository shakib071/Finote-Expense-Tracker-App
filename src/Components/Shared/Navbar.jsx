'use client'
import React, { useState } from 'react';
import { MdPersonOutline } from "react-icons/md";
import { HiOutlineBell } from "react-icons/hi2";
import { HiOutlineSun } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";
import { HiMoon } from "react-icons/hi";
import useAuth from '@/Hooks/useAuth';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Avatar from '../../../public/Avatar1.png';
import Link from 'next/link';

const Navbar = () => {
    const [darkTheme , setDarkTheme] = useState(false);
    const {logOut,user,loading} = useAuth();


    

    // console.log('photo url is',user?.photoURL);

    const router = useRouter();



    const handleLogout = () => {
        logOut()
        .then(() => {
            router.push('/login');
        })
        .catch((error)=>{
            console.log(error);
            Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            });
        })
    }
   

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('submitted');
    }

    
    if(loading){
        return 'loading';
    }

    return (
        
        <div className='mb-10 flex justify-between items-center px-3'>
            {/* Searchbar  */}
            <div >
                <form onSubmit={handleSearch} className='flex items-center gap-2'>
                    <input className='border-1 border-[#44424288] w-70 px-3 py-1 text-lg rounded-lg' type="text" placeholder='Search Here' />
                    <button  className='text-xl p-2 rounded-lg bg-[#1512d8e8] text-white' type='submit'><IoSearchSharp /></button>
                </form>
            </div>

            {/* Accessbility Profile  */}
            <div className='flex items-center gap-4 text-2xl'>
                <p onClick={()=>setDarkTheme(!darkTheme)} className='cursor-pointer'> {darkTheme ? <HiOutlineSun />: <HiMoon />} </p>
                <p className='cursor-pointer'><HiOutlineBell /></p>
                {/* <p className='cursor-pointer bg-[#1512d8e8] text-white p-2 rounded-full'><MdPersonOutline /></p> */}
                <div className="dropdown dropdown-end">

                    {!user?.photoURL && <div tabIndex={0} role="button" className="cursor-pointer bg-[#1512d8e8] text-white p-2 rounded-full"> <MdPersonOutline /></div>}

                    {user?.photoURL && <div tabIndex={0} role="button" className="cursor-pointer  text-white p-2 rounded-full"><Image className='rounded-full' src={user?.photoURL} width={42} height={42} alt='avater'></Image></div>}
                    
                        <ul tabIndex="-1" className="dropdown-content menu bg-white rounded-box z-1 w-68 p-2 shadow-sm">
                            
                            {!user && 
                            <>
                                <li className='mt-2 border-y-1  border-y-gray-400 hover:bg-gray-200 hover:font-bold'><Link href='/login'>Login</Link></li>
                                <li className='border-b-1 border-b-gray-400 hover:bg-gray-200 hover:font-bold'><Link href='/signup'>SignUp</Link></li>
                            </>
                            }
                            
                            {user && 
                            <>
                            <div className='flex items-center gap-3'>
                                <div>
                                    {user?.photoURL && <Image className='w-12 h-12 rounded-full' src={user?.photoURL} width={48} height={48} alt='avater'></Image>}
                                    {!user?.photoURL && <Image className='w-12 h-12 rounded-full' src={Avatar} alt='avater'></Image>}
                                </div>
                                <div>
                                    <p className='text-lg font-semibold'>Shakib Hasan</p>
                                    <p className='text-gray-600'>shakibhasan071@gmail.com</p>
                                </div>
                            </div>
                            <li className='mt-2 border-y-1  border-y-gray-400 hover:bg-gray-200 hover:font-bold'><Link href='/profile'>Profile</Link></li>
                            <li className='border-b-1 border-b-gray-400 hover:bg-gray-200 hover:font-bold' onClick={handleLogout}><a>Logout</a></li></>
                            }
                        </ul>
                    </div>
                </div>

        </div>
    );
};

export default Navbar;