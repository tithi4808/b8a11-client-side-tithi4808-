import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { AiFillAmazonCircle } from "react-icons/ai";

const Support = () => {
    return (
        <div className='border-2 mt-4 rounded-lg py-4 px-5'>
            <h3 className='text-center text-lg mb-4 text-red-400 '>SUPPORT THE BLOGS</h3>
            <button className='btn w-full mb-2 bg-red-100'><AiFillAmazonCircle></AiFillAmazonCircle>  AMAZON WISHLIST</button>
            <button className='btn w-full mb-2 bg-red-100'><BsFacebook></BsFacebook> FACEBOOK</button>
            <button className='btn w-full mb-2 bg-red-100'>SIGN-UP FOR LIBRO.FM</button>
            <button className='btn w-full mb-2 bg-red-100'>READ FREE ON SCRIBD</button>
            <button></button>
            
        </div>
    );
};

export default Support;