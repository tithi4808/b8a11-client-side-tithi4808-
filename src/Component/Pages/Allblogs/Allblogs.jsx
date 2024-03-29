import {React,useState,useEffect} from 'react';
import Recommendation from '../Homepage/Recommendations/Recommendation';
import Banner from '../Homepage/Banner/Banner';
import Allblog from './Allblog';

const Allblogs = () => {

    const [blogs,setblogs]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/allblogs")
        .then(res=>res.json())
        .then(data=>setblogs(data))
    },[])

    return (
       <div>
        <Banner></Banner>
         <div className='lg:flex max-w-7xl gap-6 mx-auto mt-10'>
            <div className='lg:w-2/6 border-2 rounded-lg mt-20'>
            <h2 className='pt-6 text-center text-2xl text-red-500'>Search here</h2>
                <div className='flex justify-center mt-4' >
                    
                    <form >
                        <div className='flex'>
                        <input className='border-2 rounded-l-3xl' type="search" name="search" id="" />
                        <input className='border-2 px-4 py-2 rounded-r-3xl' type="submit" value="Search" />
                        </div>
                    </form>
                </div>

                <div className='mt-6 text-center space-y-2'>
                <h2 className='pt-6 mb-4 text-center text-2xl text-red-500'>Search by category</h2><hr />
                <p>Fiction</p><hr />
                <p>Non-Fiction</p><hr />
                <p>Science-Fiction</p><hr />
                <p>Romance</p><hr />
                <p>Mystery</p><hr />
                <p>Self-Help</p><hr />
                <p>Fantasy</p><hr />
                <p>Bio-graphy</p><hr />
                <p>Historical</p><hr />
                <p>Author's Hub</p><hr />

                </div>

            </div>
            <div className='lg:w-3/6'>
            <div className='mt-20'>
        <div className='text-start'>
            
           
        </div>
         <div>
            {blogs.map(blog=><Allblog key={blog._id} blog={blog}></Allblog>)}
        </div>
       </div>

            </div>

            <div className='lg:w-1/5 '>
            <Recommendation></Recommendation>
            </div>
            
        </div>
       </div>
    );
};

export default Allblogs;