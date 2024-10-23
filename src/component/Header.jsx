import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/شعار Logo .png"
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-transparent bg-opacity-30 p-4 z-10 absolute w-full h-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-2xl font-bold text-white "><img src={logo} alt="logo" className='w-24' /></Link>

        {/* Hamburger Menu Button */}
        <button
          className="text-white lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-orange-700 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:block absolute lg:static right-12 top-4 text-white  bg-black bg-opacity-10 lg:bg-transparent z-10 rounded-2xl`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-4 p-4 lg:p-0 space-y-2 lg:space-y-0">
          <li>
              <Link to="/signIn" className="block px-4 py-2 text-write bg-orange-700 font-bold text-xl hover:text-orange-700 hover:bg-transparent hover:border-orange-700 hover:border-2 rounded-2xl  ">
              سجل الان
              </Link>
            </li>
            <li>
              <Link to="/home" className="block px-4 py-2 text-orange-700 font-extrabold text-xl hover:text-orange-800 rounded ">
              اتصل بنا
              </Link>
            </li>
            <li>
              <Link to="/about" className="block px-4 py-2 text-orange-700 font-extrabold text-xl hover:text-orange-800 rounded ">
                من نحن
              </Link>
            </li>
            <li>
              <Link to="/services" className="block px-4 py-2 text-orange-700 font-extrabold text-xl hover:text-orange-800 rounded ">
                لماذا غزة
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block px-4 py-2 text-orange-700 font-extrabold text-xl hover:text-orange-800 rounded ">
                الرئيسية
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

