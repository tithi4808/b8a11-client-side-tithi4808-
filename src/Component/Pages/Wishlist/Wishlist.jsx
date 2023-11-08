import {useState,useEffect} from 'react';
import List from './List';

const Wishlist = () => {
    const [blogs,setblogs]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/wishlist")
        .then(res=>res.json())
        .then(data=>setblogs(data))
    },[])
    return (
        <div>

<div>
            {blogs.map(blog=><List key={blog._id} blog={blog}></List>)}
        </div>


            
        </div>
    );
};

export default Wishlist;