import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Homepage/Shared/Navbar/Navbar';
import Footer from '../Pages/Homepage/Shared/Footer/Footer';

const Roots = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Roots;