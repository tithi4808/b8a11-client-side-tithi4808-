import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-[400px] mt-20'><img className=' rounded-3xl' src="https://i.ibb.co/PWFpDxY/404-page-not-found-illustration-512x249-ju1c9yxg.png" alt="" /></div>

            <div className='text-center'>
                <p className='text-5xl font-bold text-blue-400 mb-4'>OOPS!!!</p>
            <p className='font-thin mb-4'>The page you are looking for might be removed or temporarily unavailable</p>
            <Link className='underline hover:text-red-500' to='/'>Go Back</Link></div>
        </div>
    );
};

export default ErrorPage;