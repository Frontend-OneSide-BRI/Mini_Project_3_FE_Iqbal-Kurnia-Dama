import React from "react";

const About = () => {
  return (
    <section className='container px-6 py-8 mx-auto lg:py-16' id='about'>
      <div className='lg:flex lg:items-center lg:-mx-4'>
        <div className='lg:w-1/2 lg:px-4'>
          <h3 className='text-xl font-medium text-gray-800 md:text-2xl lg:text-3xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, consequatur.
          </h3>

          <p className='mt-6 text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam provident voluptatum id magni iste
            nobis corrupti, delectus quis repellat, debitis error quod explicabo molestiae rerum totam ab sunt
            excepturi?
          </p>

          <button className='flex items-center mt-8 -mx-2 text-indigo-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-8 h-8 mx-1'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
              />
              <path strokeLinecap='round' strokeLinejoin='round' d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
            <p className='mx-1 font-semibold'>PLAY VIDEO</p>
          </button>
        </div>

        <div className='mt-8 lg:w-1/2 lg:px-4 lg:mt-0'>
          <img
            className='object-cover w-full rounded-xl h-96'
            src='https://images.unsplash.com/photo-1516131206008-dd041a9764fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
            alt='Video thumbnail'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
