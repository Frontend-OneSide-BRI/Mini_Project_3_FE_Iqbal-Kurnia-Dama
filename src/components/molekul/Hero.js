import React from "react";

export default function Hero() {
  return (
    <section className='relative z-10'>
      <div className='relative grid w-full h-96 lg:h-[32rem] place-items-center'>
        <div className='flex flex-col items-center mx-auto text-center'>
          <h1 className='text-4xl font-semibold text-white uppercase md:text-6xl'>Layar Kaca 21</h1>

          <p className='mt-6 text-lg leading-5 text-white'>nonton film disini banyak iklan</p>

          <a href='#about' className='mt-8 cursor-pointer animate-bounce'>
            <svg width='53' height='53' viewBox='0 0 53 53' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <circle cx='27' cy='26' r='18' stroke='white' strokeWidth='2' />
              <path
                d='M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z'
                fill='white'
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
