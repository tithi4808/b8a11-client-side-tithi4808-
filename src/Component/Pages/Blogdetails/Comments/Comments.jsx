import React from 'react';

const Comments = ({comment}) => {
    
    const {Comment,blog_owner,image,blog_id}=comment
    
    return (
        <div className='mt-4'>
            <div className='flex gap-4'>
            <div className='w-12 h-12 '>
                <img className='rounded-full' src={image} alt="" />
            </div>
            <div>
                <p className='text-lg font-bold'>{blog_owner}</p>
                
            </div>
            
        </div>
        <p className='bg-gray-100 mx-20 px-6 py-8 rounded-3xl mt-2 mb-6 '>
            {Comment}
        </p>
        <hr />
        </div>
    );
};

export default Comments;