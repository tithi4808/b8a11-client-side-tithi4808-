import React, { useEffect, useState } from 'react';
import Recentblog from './Recentblog/Recentblog';

const RecentBlogs = () => {
    const [blogs,setblogs]=useState([])
    useEffect(()=>{
        fetch("https://b8a11-server-side-tithi4808-r0k048sjd-tanya-sultanas-projects.vercel.app/recentblogs")
        .then(res=>res.json())
        .then(data=>setblogs(data))
    },[])

   

    
    return (
       <div className='mt-20'>
        <div className='text-start'>
            <h1 className='text-3xl mb-8 text-blue-400 '>Recent Blogs :</h1>
           
        </div>
         <div>
            {blogs.slice(0,6).map(blog=><Recentblog key={blog._id} blog={blog}></Recentblog>)}
        </div>
       </div>
    );
};

export default RecentBlogs;