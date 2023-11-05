import React from 'react';

const Allblog = ({blog}) => {

    const {title,image,short_description,category,published_date}=blog
    return (
        <div className='border-2 rounded-lg flex gap-6 px-4 py-8'>

        <div>
            <img src={image} alt="" />
        </div>
        <div>
            <h1 className='mb-2'><span className='font-bold '>Title</span>: {title}</h1>
            <p className='mb-2'><span className='font-bold '>Description</span>: {short_description}</p>
            <p className='mb-2'><span className='font-bold '>Catagory</span>: {category}</p>
            <p className='mb-2'><span className='font-bold '>Published date</span>: {published_date}</p>
            <button className='btn mr-4 mt-2 bg-blue-400 text-white'>Details</button>
            <button className='btn bg-red-400 text-white'>Wishlist</button>
        </div>
        
    </div>
    );
};

export default Allblog;