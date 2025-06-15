import React from "react";
import bgimg from '../../assets/images/baner2.jpg';


const AQPMNTbnr = () => {
  return (
    <div>
      <div
        className="hero min-h-[40vh]"
       style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">All Equipment</h1>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AQPMNTbnr;
