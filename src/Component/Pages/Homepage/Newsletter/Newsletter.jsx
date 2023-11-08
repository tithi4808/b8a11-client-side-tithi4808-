import {useRef} from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {

    const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();

    const handlesubmit=e=>{
        e.preventDefault()
        toast("Thank you for subscribing to our newsletter")

        firstNameRef.current.value = '';
        lastNameRef.current.value = '';
        emailRef.current.value = '';
        
    }


    return (
        <div className='mt-20 max-w-6xl mx-auto  '>
            
            <form onSubmit={handlesubmit} className='border-2 rounded '>
            <div className='text-center py-8 text-2xl text-red-400 font-bold'>
                <h3>Booklet Newsletter</h3>
                <p className='mt-4 text-black text-sm font-normal'>Join 10,000 plus subscribers. Get updates about the best books to read, special content online! </p>
            </div>
                <div className='flex gap-10 justify-center items-center py-4'>
                    <input required ref={firstNameRef} className='border-2 w-1/3' name='firstname' placeholder='First Name' type="text" />
                    <input required ref={lastNameRef} placeholder='Last Name' className='border-2 w-1/3' name='lastname' type="text" />
                </div>
                <div className='flex justify-center'>
                <input required ref={emailRef} placeholder='Email' className='border-2 w-2/3 mb-4 ' type="email" name="email" id="" /></div> <br />
               <div className='flex justify-center'> <input className='border-2 mb-4 px-4 py-2 rounded bg-red-400 text-white'  type="submit" value="Submit" /></div>
            </form>
            <ToastContainer />


            
        </div>
    );
};

export default Newsletter;