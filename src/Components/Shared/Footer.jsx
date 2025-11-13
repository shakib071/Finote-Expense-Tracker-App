import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const Footer = () => {
    return (
        <div className='mt-20 mx-2 bg-white px-3 py-1 rounded-lg'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='mb-2 md:mb-0'>
                    <p className='text-[13px]  md:text-sm'>&copy; Copyright 2025 <span className='font-bold'>Finote</span> | All Rights Reserverd</p>
                </div>
                <div className='flex items-center gap-4 text-xl'>
                    <p><FaFacebook /></p>
                    <p><FaInstagram /></p>
                    <p><FaYoutube /></p>
                    <p><SiGmail /></p>
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;