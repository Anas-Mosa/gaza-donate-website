import React from 'react';
import { FaHandsHelping, FaHandHoldingUsd } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import helper from '../assets/Capture2.png'
const InfoCards = () => {
  return (
<div>
    <h1 className='text-center mt-32 font-extrabold text-5xl text-orange-700'>...كن عونا لاخيك</h1>
      <div className="flex justify-center items-center flex-row sm:flex-col md:flex-col lg:flex-row lg:gap-20 gap-10 align-middle flex-wrap p-6  
      lg:mt-24 mt-10">
            {/* Image Section */}
            <div className="md:64 lg:mr-40">
        <img 
          src={helper} 
          alt="Placeholder Image" 
          className="w-72 h-auto "
        />
      </div>
      
        {/* Helper Card */}
        <Link to={"/SignIn"} className=" w-64 h-64 bg-white rounded-lg shadow-2xl flex flex-col items-center justify-center transition-transform transform hover:scale-110 duration-300">
          <FaHandsHelping size={60} className="text-orange-700 mb-2" />
          <h3 className="marhey text-gray-700 font-semibold mt-10 text-3xl">مغاث</h3>
        </Link>
        
        {/* get helped Card */}
        <Link to={"/signIn"} className="w-64 h-64 md:w-64 md:h-64 bg-white rounded-lg shadow-2xl flex flex-col items-center justify-center transition-transform transform hover:scale-110 duration-300">
          <FaHandHoldingUsd size={60} className="text-orange-700 mb-" />
          <h3 className="marhey text-gray-700 font-semibold mt-10 text-3xl">مغيث</h3>
        </Link>
  
  
      </div>
</div>
  );
};

export default InfoCards;
