import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';
import {  ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateCurrentUser, updateProfile } from 'firebase/auth';
const Register = () => {

  const {createUser,User}=useContext(AuthContext)
  const [success,setsuccess]=useState('')
  const [errormsg,seterrormg]=useState('')
  

    const handleRegister=e=>{
      
        e.preventDefault()
        

        
        const email=e.target.email.value
        const password=e.target.password.value
        const name=e.target.name.value
        const photo=e.target.photo.value
        

        if(password.length<6)
        {
          seterrormg('Password should have at least 6 character')
            toast(errormsg);
            return;
        }
        
         if(!/[A-Z]/.test(password))
        {
            seterrormg('Password should contain at least one Capital letter')
            toast(errormsg)
            return;
        }
         if(!/[ -\/:-@\[-\`{-~]/.test(password))
        {
            seterrormg('Password should contain at least one Special Character')
            toast(errormsg)
            return;
        }

        

        createUser(email,password)
        .then((result) => {
          const user = result.user;
          const displayName = name; 
          const photoURL=photo;
          

          return updateProfile(user, { displayName, photoURL });
        })
        .then(() => {
          setsuccess('Registration Successful');
          toast(success);
        })

        .catch(error=>{
          
          console.log(error.message)
          

  
              seterrormg('Email already in use')
              toast(errormsg)

        })
    }
    return (
        <div className='grid lg:grid-cols-2 lg:mt-10'>
        <div className="hero lg:mt-10 min-h-screen lg:max-w-full bg-base-100">
<div className="hero-content flex-col">
<div className="text-center text-4xl font-bold ">
    <h1>Want to join our community??</h1>
  <h1 className="text-2xl font-bold mt-4 mb-4">Please <span className='text-red-400 '>Register now!</span></h1>
  
</div>
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <form onSubmit={handleRegister} className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Your name</span>
      </label>
      <input name='name' type="text" placeholder="Your name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Your Email id</span>
      </label>
      <input name='email' type="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo URL</span>
      </label>
      <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name="password" placeholder="password" className="input input-bordered" required />
      
    </div>
    <div className="form-control mt-6">
      <button className="btn bg-red-400">Register</button>
    </div>
    <p className='mt-4 text-sm text-center'>Already have an account?Please <span> <NavLink className='text-red-400 hover:underline' to='/login'>Login</NavLink> </span> </p>

  </form>

  
</div>
</div>
</div>
<div className='flex justify-center items-center'>
    <img className='' src="https://i.ibb.co/4f1KH7s/reading-20-minutes-a-day.jpg" alt="" />
</div>
<ToastContainer />
    </div>
    );
};

export default Register;