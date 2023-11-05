import React from 'react';
import Banner from '../Banner/Banner';
import RecentBlogs from '../RecentBlogs/RecentBlogs';
import Recommendation from '../Recommendations/Recommendation';
import Newsletter from '../Newsletter/Newsletter';
import Support from '../Support/Support';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <div className='flex max-w-6xl gap-10 mx-auto'>
                <RecentBlogs className='w-2/3'></RecentBlogs>
                <div  className='w-1/3'>
                <Recommendation></Recommendation>
                <Support></Support>
                </div>
            </div>
            <Newsletter></Newsletter>
            
        </div>
    );
};

export default Home;