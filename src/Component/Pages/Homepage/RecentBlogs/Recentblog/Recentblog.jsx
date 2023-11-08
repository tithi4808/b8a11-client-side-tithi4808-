import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';

const Recentblog = ({blog}) => {
    const navigate=useNavigate()
    
    const {_id,title,image,Shortdescription,category,published_date}=blog

    const handledetails=id=>{

           
            navigate(`/blogdetails/${id}`)
           
    }
    const handlewish=()=>{
        const blogs={title,image,Shortdescription,category,published_date}
        fetch('http://localhost:5000/wishlist',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(blogs),
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.acknowledged)
        {
            toast('Successfully added the wishlist')
        }
     })
    }

    
    return (
        <div className='border-2 rounded-lg lg:flex gap-8 px-4 py-8'>

            <div className='w-1/2 space-y-2'>
                <img src={image} alt="" />
            </div>
            <div className='1/2'>
                <h1 className='mb-2'><span className='font-bold '>Title</span>: {title}</h1>
                <p className='mb-2'><span className='font-bold '>Description</span>: {Shortdescription}</p>
                <p className='mb-2'><span className='font-bold '>Catagory</span>: {category}</p>
                <p className='mb-2'><span className='font-bold '>Published date</span>: {published_date}</p>
                <button onClick={()=>handledetails(_id)} className='btn mr-4 mt-2 bg-blue-400 text-white'>Details</button>
                <button onClick={()=>handlewish(_id)} className='btn bg-red-400 text-white'>Wishlist</button>
            </div>
            <ToastContainer/>
            
        </div>
    );
};

export default Recentblog;