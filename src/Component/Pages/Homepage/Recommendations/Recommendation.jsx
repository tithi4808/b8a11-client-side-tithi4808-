
import React, { useEffect, useState } from 'react';
import Recommend from './Recommend';

const Recommendation = () => {
    const [blogs,setblogs]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/allblogs")
        .then(res=>res.json())
        .then(data=>setblogs(data))
    },[])

    return (
        <div className='mt-20 rounded-lg border-2'>
        <div className='text-center'>
            <h1 className='text-xl px-8 mt-8 mb-4 text-red-400'>Recommendations</h1>
           
        </div>
         <div>
            {blogs.slice(0,3).map(blog=><Recommend key={blog._id} blog={blog}></Recommend>)}
        </div>
       </div>
    );
};

export default Recommendation;