import React from 'react';

const Recommend = ({blog}) => {
    const {title,image,short_description,category,published_date}=blog
    return (
        <div className='rounded-lg  gap-6 px-4 py-8'>

            <div className='flex justify-center items-center'>
                <img src={image} alt="" />
            </div>
            <div>
                <h1 className='mb-2 font-bold text-center'>{title}</h1>
                <p className='mb-2 text-center'><span className=' '>Published</span>: {published_date}</p>
            </div>
            
        </div>
    );
};

export default Recommend;