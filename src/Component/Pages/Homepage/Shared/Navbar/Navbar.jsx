import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { AuthContext } from '../../../../Authprovider/Authprovider';

const Navbar = () => {

    const {User,logout}=useContext(AuthContext)

    const handlelogout=()=>{
        logout()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    const links=<>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Add Blogs</Link></li>
        <li><Link to='/allblogs'>All blogs</Link></li>
        <li><Link to='/'>Featured Blogs
</Link></li>
        <li><Link to='/'>Wishlist
</Link></li>
    
    </>
    return (
        <div className="navbar bg-base-100 shadow-lg rounded-lg ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <Link to='/' className="pl-4 normal-case text-3xl font-bold text-red-500 italic">Booklet</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-base font-semibold">
      {links}
    </ul>
  </div>
  <div className="navbar-end pr-6">
    {
        User? <div><div className="dropdown  dropdown-bottom dropdown-end flex">
            <button onClick={handlelogout} className=' mr-4 text-md font-semibold border-2 px-4 rounded-2xl'>Logout</button>

    
        <label tabIndex={0} className="m-1 "><img className='w-12 h-12 rounded-full'  src={User.photoURL} alt="" /></label>
      </div></div>:<div className='flex'><ul className='flex gap-4 justify-center items-center'>
        <li><Link className='btn' to='/login'>Login</Link></li>
        <li className='hidden md:inline-block'><Link className='btn mr-4' to='/register'>Register</Link></li>
    </ul>
  <div className="dropdown  dropdown-bottom dropdown-end">
    
  <label tabIndex={0} className="m-1"><CgProfile className='w-12 h-8'></CgProfile></label>
</div></div>
    }
  
  </div>
</div>
    );
};

export default Navbar;