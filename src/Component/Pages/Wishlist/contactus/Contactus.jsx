import emailjs from 'emailjs-com';
import { useState } from 'react';

const Contactus = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const serviceID = 'service_ewggxyi';
    const templateID = 'template_7vts09p';
    const userID = 'bBdM4zeAmPPN0q3zR'; 

    
    emailjs.sendForm(serviceID, templateID, e.target,userID).then(
      (response) => {
        console.log('Email sent successfully:', response);
       
      },
      (error) => {
        console.error('Email failed to send:', error);
        
      }
    );

   
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact" className="my-20 md:mt-20 lg:max-w-6xl mx-auto bg-slate-100 py-12">
   
       <h3 className="text-center text-3xl font-bold mt-4">Contact Us</h3>
    
    <div  className="  px-4 lg:max-w-4xl my-20 mx-auto  md:max-w-2xl  gap-16">
       
       <div className="lg:col-span-2">
       <form className="flex flex-col" onSubmit={handleSubmit}>
         
         <input className="mb-4 rounded-lg border-2"
           type="text"
           id="name"
           name="name"
           placeholder="Your name"
           value={formData.name}
           onChange={handleChange}
           required
         />
 
 
         <input
         className="mb-4 rounded-lg border-2"
         placeholder="Your Email"
           type="email"
           id="email"
           name="email"
           value={formData.email}
           onChange={handleChange}
           required
         />
 
         
         <textarea className="mb-4 rounded-lg border-2"
         placeholder="Your Message"
           id="message"
           name="message"
           value={formData.message}
           onChange={handleChange}
           required
         ></textarea>
 
         <button className="mt-4 btn" type="submit">Send Message</button>
       </form>
       
 
       </div>
     
     </div>
    
    </div>
  );
};

export default Contactus;