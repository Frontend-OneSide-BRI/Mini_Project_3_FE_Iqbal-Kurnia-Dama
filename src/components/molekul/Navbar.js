import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <header className='relative z-10'>
      <nav className='container relative flex items-center justify-between px-6 py-8 mx-auto text-white'>
        <a href='/#'>
          <h1 className='text-3xl'>ILK21</h1>
        </a>
        <button onClick={handleClick} className='md:hidden'>
          <span style={{ display: !open ? "block" : "none" }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16m-7 6h7' />
            </svg>
          </span>

          <span style={{ display: open ? "block" : "none" }}>
            <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' viewBox='0 0 20 20' fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        </button>
        <div
          className={`absolute inset-x-0 z-30 w-full px-6 py-8 mt-4 space-y-6 transition-all duration-300 ease-in-out bg-indigo-600 top-16 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:space-y-0 md:-mx-6 md:flex md:items-center ${
            open ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          }`}>
          <a href='/#' className='block text-white transition-colors duration-300 md:px-6 hover:text-indigo-300'>
            Movies
          </a>
          <a href='/#' className='block text-white transition-colors duration-300 md:px-6 hover:text-indigo-300'>
            Login
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
