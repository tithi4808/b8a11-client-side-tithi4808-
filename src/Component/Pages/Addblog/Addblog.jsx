import React, { useContext } from 'react';
import {useRef} from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast,ToastContainer } from 'react-toastify';

const Addblog = () =>{

    const {User}=useContext(AuthContext)
    
    


    const handleaddblogs = event => {

    event.preventDefault();

    const form = event.target;

    const title = form.title.value;
    const image= form.image.value;
    const category = form.category.value;
    
    const Shortdescription = form.Shortdescription.value;
    const LongDescription = form.LongDescription.value;
    const blogowner=User.displayName;
    const blogownerimage=User.photoURL
    const blogowneremail=User.email
    const time=Date()
    const published_date
    =time.toString()
   


    
   

    const NewBlogs = {title,image,category,Shortdescription,LongDescription,blogowner,blogownerimage,blogowneremail,published_date
    }

    console.log(NewBlogs)

    
    
    fetch('http://localhost:5000/allblogs',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(NewBlogs),
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.acknowledged)
        {
            toast('Successfully added the blog')
        }
    })
    
   
}
    return (
        <div className='max-w-5xl mx-auto mt-20'>
             <div className="bg-blue-100 p-24 rounded-lg">
            <h2 className="text-3xl font-extrabold text-center">Add a New Blog</h2>
            <form onSubmit={handleaddblogs}>
                
                <div className="form-control ">
                        <label className="label ">
                            <span className="label-text ">Blog Title</span>
                        </label>
                        <label className="input-group">
                            <input required type="text" name="title" placeholder="Blog Title" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input required type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
                        </label>
                    </div>

                   
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Select Category</span>
                        </label>
                            <select  className="input input-bordered w-full" id="category" name="category">
                            <option value="select">Select</option>
                                <option value="science_fiction">Science Fiction</option>
                                <option value="fantasy">Fantasy</option>
                                <option value="mystery">Mystery</option>
                                <option value="romance">Romance</option>
                                <option value="Fiction">Fiction</option>
                                <option value="Kid">Kid</option>
                                <option value="Non-fiction">Non-fiction</option>
                                <option value="Bio-graphy">Bio-graphy</option>
                                <option value="Self-help">Self help</option>
                                <option value="Historical">Historical</option>
                                
                               
                            </select>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label  className="input-group">
                        <textarea required id="description" name="Shortdescription" rows="3" cols="200"></textarea>
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Long Description</span>
                        </label>
                        <label className="input-group">
                        <textarea required id="description" name="LongDescription" rows="8" cols="200"></textarea>
                        </label>
                    </div>
                    
                    <div className="form-control btn bg-blue-300 text-white mt-8">
                        <input type="submit" value="Add Blog" />
                    </div>

            </form>
            <ToastContainer />
        </div>
        </div>
    );
};

export default Addblog;