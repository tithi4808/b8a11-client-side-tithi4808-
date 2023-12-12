import React from 'react';
import Banner from '../Banner/Banner';
import RecentBlogs from '../RecentBlogs/RecentBlogs';
import Recommendation from '../Recommendations/Recommendation';
import Newsletter from '../Newsletter/Newsletter';
import Support from '../Support/Support';
import Contactus from '../../Wishlist/contactus/Contactus';
import Author from '../../Wishlist/contactus/Author\'s/Author\'s';




const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <div className='md:flex max-w-6xl gap-10 mx-auto'>
                <RecentBlogs className='md:w-2/3'></RecentBlogs>
                <div  className='md:w-1/3'>
                <Recommendation></Recommendation>
                <Support></Support>
                </div>
            </div>
            <Author></Author>
            <Newsletter></Newsletter>
            <Contactus></Contactus>
            
            
        </div>
    );
};

export default Home;