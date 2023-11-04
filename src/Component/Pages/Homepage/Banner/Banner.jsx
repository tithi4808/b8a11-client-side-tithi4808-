import React from 'react';

const Banner = () => {
    return (
        <div className="hero lg:relative rounded-lg shadow-lg min-h-[400px]" style={{backgroundImage: 'url(https://i.ibb.co/Sw9Q2bS/728px-What-book-should-i-read-quiz-image.png)'}}>
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content lg:absolute lg:left-60 text-center max-w-md text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-blue-600 text-5xl font-bold">Unleashing the Magic of Books!!!</h1>
            <p className="mb-5 text-black font-semibold">Explore the Literary World with Reviews, Recommendations, and Author Insights</p>
            <button className="px-4 py-2 rounded-lg bg-red-500 text-white">Discover Now!</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;