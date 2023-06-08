import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { logout } from "../../redux/actions/auth";
import { clearMessage } from "../../redux/actions/message";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  let location = useLocation();

  useEffect(() => {
    if (["/login", "/register"].includes(location.pathname)) {
      dispatch(clearMessage());
    }
  }, [dispatch, location]);

  const userLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <header className='relative z-10'>
      <nav className='container relative flex items-center justify-between px-6 py-8 mx-auto text-white'>
        <Link to='/'>
          <h1 className='text-3xl'>ILK21</h1>
        </Link>
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
          <Link to='/all-movie' className='block text-white transition-colors duration-300 md:px-6 hover:text-red-400'>
            Movies
          </Link>
          {currentUser ? (
            <div>
              <Link
                href='/profile'
                className='block text-red-400white transition-colors duration-300 md:px-6 hover:text-red-400'>
                Hello {currentUser.username}
              </Link>
              <a
                href='/login'
                onClick={userLogout}
                className='block text-red-400white transition-colors duration-300 md:px-6 hover:text-red-400'>
                Log Out
              </a>
            </div>
          ) : (
            <Link
              to='/login'
              className='block text-red-400white transition-colors duration-300 md:px-6 hover:text-red-400'>
              Login
            </Link>
          )}
          {/* <a href='/login' className='block text-red-400white transition-colors duration-300 md:px-6 hover:text-red-400'>
            Login
          </a> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
