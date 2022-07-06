import React from "react";

const InfoSection = () => {
  return (
    <section id='Info_Section' className='InfoSection'>
      <div id='InfoSection__gridImg' className='InfoSection__gridImg'></div>
      <div id='InfoSection__gridContent' className='InfoSection__gridContent'>
        <p id='InfoSection__text' className='InfoSection__gridContent__title'>
          The leader in interactive VR
        </p>
        <p id='InfoSection__text' className='InfoSection__gridContent__text'>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};

export default InfoSection;
