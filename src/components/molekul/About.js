import React from "react";
import watchMovie from '../../assets/images/icons/nonton.svg'

const About = () => {
  return (
    <section className='container px-14 py-8 mx-auto lg:py-40 bg-slate-900' id='about'>
      <div className='lg:flex lg:items-center lg:-mx-4'>
        <div className='lg:w-1/2 lg:px-4'>
          <h3 className='text-xl font-medium text-white md:text-2xl lg:text-3xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, consequatur.
          </h3>

          <p className='mt-6 text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam provident voluptatum id magni iste
            nobis corrupti, delectus quis repellat, debitis error quod explicabo molestiae rerum totam ab sunt
            excepturi?
          </p>
        </div>

        <div className='mt-8 lg:w-1/2 lg:px-4 lg:mt-0'>
          <img
            className='object-cover w-full rounded-xl h-96'
            src={watchMovie}
            alt='Video thumbnail'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
