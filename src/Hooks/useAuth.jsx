'use client'
import { AuthContext } from '@/Components/context/AuthContext';
import  { useContext } from 'react';

const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

export default useAuth;