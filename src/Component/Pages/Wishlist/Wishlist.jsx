import {useState,useEffect} from 'react';
import List from './List';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Wishlist = () => {
    const blog=useLoaderData()
    const navigate=useNavigate()
    console.log(blog)
    const [blogs,setblogs]=useState(blog)

    const handledelete=_id=>{
        fetch(`http://localhost:5000/wishlist/${_id}`,{
            method: "DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0)
            {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    }
                  })
                const remain=blogs.filter(data=>data._id !==_id)
                setblogs(remain)

                
            }
        })

        


        
    }

    const handledetails=id=>{
        navigate(`/blogdetails/${id}`)
    }

    return (
        

<div>
            {blogs.map(blog=><div key={blog._id}> <div>
               <div className='border-2 rounded-lg flex gap-6 px-4 py-8'> 

<div>
    <img src={blog.image} alt="" />
</div>
<div>
    <h1 className='mb-2'><span className='font-bold '>Title</span>: {blog.title}</h1>
    <p className='mb-2'><span className='font-bold '>Description</span>: {blog.Shortdescription}</p>
    <p className='mb-2'><span className='font-bold '>Catagory</span>: {blog.category}</p>
    <p className='mb-2'><span className='font-bold '>Published date</span>: {blog.published_date}</p>
    <button onClick={()=>handledetails(blog._id)} className='btn mr-4 mt-2 bg-blue-400 text-white'>Details</button>
    <button onClick={()=>handledelete(blog._id)} className='btn bg-red-400 text-white'>Remove</button>
</div>


</div></div>
            
        </div>)}
        </div>
        


            
       
    );
};

export default Wishlist;