import React from "react";

const HeroSection = () => {
  return (
    <section id='HeroSection' className='HeroSection'>
      <div id='HeroSection__title' className='HeroSection__title'>
        <span id='HeroSection__span' className='block'>
          Immersive
        </span>
        <span id='HeroSection__span' className='block'>
          experiences
        </span>
        <span id='HeroSection__span' className='block lg:inline-block mr-3'>
          that{" "}
        </span>
        <span id='HeroSection__span' className='block lg:inline-block'>
          deliver
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
