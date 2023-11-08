import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const List = ({blog}) => {
    const navigate=useNavigate()
    
    const {_id,title,image,short_description,category,published_date}=blog
    const [cartitem,setcartitems]=useState([blog])

    console.log(cartitem)

    const handledetails=id=>{
        navigate(`/blogdetails/${id}`)

    }
    const handledelete=id=>{
        fetch(`http://localhost:5000/wishlist/${id}`,{
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
                const remain=cartitem.filter(data=>data._id !==_id)
                setcartitems(remain)

                
            }
        })

        


        
    }

    
    return (
        <div>
               <div className='border-2 rounded-lg flex gap-6 px-4 py-8'> 

<div>
    <img src={image} alt="" />
</div>
<div>
    <h1 className='mb-2'><span className='font-bold '>Title</span>: {title}</h1>
    <p className='mb-2'><span className='font-bold '>Description</span>: {short_description}</p>
    <p className='mb-2'><span className='font-bold '>Catagory</span>: {category}</p>
    <p className='mb-2'><span className='font-bold '>Published date</span>: {published_date}</p>
    <button onClick={()=>handledetails(_id)} className='btn mr-4 mt-2 bg-blue-400 text-white'>Details</button>
    <button onClick={()=>handledelete(_id)} className='btn bg-red-400 text-white'>Remove</button>
</div>


</div>
            
        </div>
    );
};

export default List;