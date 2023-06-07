import React from "react";
import vidioBg from "../../../assets/images/hero/Zenitsu-wallpaper..mp4";
import Navbar from '../../molekul/Navbar'
import Hero from "../../molekul/Hero";

const Header = () => {
  return (
    <>
      <div className='relative'>
        <div className='absolute inset-0 z-[1] w-full h-full bg-black opacity-75'></div>
        <video src={vidioBg} autoPlay loop muted className='absolute inset-0 object-cover z-0 w-full h-full' />
        {/* navbar */}
        <Navbar />
        {/* hero */}
        <Hero />
      </div>
    </>
  );
};

export default Header;
