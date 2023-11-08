import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Comments from './Comments/Comments';
import { ToastContainer, toast } from 'react-toastify';

const Blogdetails = () => {
    const loadeddata=useLoaderData()
    const {User}=useContext(AuthContext)
    const [comments,setcomments]=useState([])
    const navigate=useNavigate();
    
   const url=`https://b8a11-server-side-tithi4808-c7fbx0q0e-tanya-sultanas-projects.vercel.app/comment?blog_id=${loadeddata._id}`

    
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
           
             const newcomment=data.filter(comment=>comment.comment_owner_email != loadeddata.blogowneremail)
             setcomments(newcomment)
           
         }
        
        )
    },[])

    
    
    


    const handlecomment = (event,id) => {

        event.preventDefault();
    
        const form = event.target;
    
        const Comment = form.commentbox.value;
        const comment_owner=User.displayName;
        const comment_owner_email=User.email;
        const image=User.photoURL;
        const blog_id=id;
        
        

       
        const NewComment = { Comment,comment_owner,image,comment_owner_email,blog_id
        }

        

        if(loadeddata.blogowneremail == User.email)
        {
            toast('You can not add comment on your own blog')
        }
        else
        {
            toast('Comment Added')
        }
    
        
    
        
        
        fetch('https://b8a11-server-side-tithi4808-4wuh4agec-tanya-sultanas-projects.vercel.app/comment',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify(NewComment),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })  } 
        
        const handleclick=id=>{
            navigate(`/update/${id}`)
        }



    return (
        <div className='max-w-6xl  mx-auto mt-10'>
            <div className='border-2  rounded-lg lg:flex gap-6 px-4 py-8'>

<div className='lg:w-1/2 flex justify-center items-center mb-4'>
    <img src={loadeddata.image} alt="" />
</div>
<div className='text-center lg:text-start lg:w-1/2'>
    <h1 className='mb-2'><span className='font-bold '>Title</span>: {loadeddata.title}</h1>
    <p className='mb-2'><span className='font-bold '>Published date</span>: {loadeddata.published_date}</p>
    <p className='mb-2'><span className='font-bold '>Catagory</span>: {loadeddata.category}</p>
    <p className='mb-2'><span className='font-bold '>Short Description</span>: {loadeddata.Shortdescription}</p>
    <p className='mb-2'><span className='font-bold '>Long Description</span>: {loadeddata.LongDescription
}</p>
<div>
    {
       (loadeddata.blogowneremail === User.email) ? <button onClick={()=>handleclick(loadeddata._id)} className='btn bg-red-200'>Update</button> : <p> </p>
    } 
</div>
    
   
</div>

</div>
<div className='mt-20 max-w-4xl mx-auto'>
    {
        comments.map(comment=><Comments key={comments._id} comment={comment}></Comments>)
    }


</div>

<div className=' bg-blue-100  mt-20 border-2  rounded-lg '>
<form onSubmit={()=>handlecomment(loadeddata._id)}>
                
               
                    
                    
                  <div className="">
                  <div className="form-control pl-8 py-6">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label  className="input-group w-full px-10">
                        <textarea id="description" name="commentbox" rows="6" cols="200"></textarea>
                        </label>
                    </div>
                    <div className="form-control  mx-auto btn w-2/5 bg-blue-300   text-white ">
                        <input className='' type="submit" value="Add Comment" />
                    </div>
                  </div>



            </form>
</div>
<ToastContainer/>
        </div>
    );
};

export default Blogdetails;