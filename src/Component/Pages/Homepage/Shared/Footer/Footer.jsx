import React from 'react';

const Footer = () => {
    return (
        <div className='mt-20'>

<footer className="footer justify-center items-center space-x-80 py-10 bg-base-300 text-base-content">
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer> 
<footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <aside>
    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
            
        </div>
    );
};

export default Footer;