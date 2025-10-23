import React, { useState } from 'react';
import { MdPersonOutline } from "react-icons/md";
import { HiOutlineBell } from "react-icons/hi2";
import { HiOutlineSun } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";
import { HiMoon } from "react-icons/hi";

const Navbar = () => {
    const [darkTheme , setDarkTheme] = useState(false);
   

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('submitted');
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

                    <div tabIndex={0} role="button" className="cursor-pointer bg-[#1512d8e8] text-white p-2 rounded-full"><MdPersonOutline /></div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>Login</a></li>
                            <li><a>Profile</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>

        </div>
    );
};

export default Navbar;