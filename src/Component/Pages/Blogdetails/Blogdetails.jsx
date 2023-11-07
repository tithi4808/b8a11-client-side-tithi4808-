import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blogdetails = () => {
    const loadeddata=useLoaderData()
    console.log(loadeddata)
    return (
        <div>
            
        </div>
    );
};

export default Blogdetails;