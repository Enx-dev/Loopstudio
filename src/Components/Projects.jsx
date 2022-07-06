import React from "react";
const Projects = () => {
  return (
    <section id='Projects_Section' className='ProjectSection'>
      <h1 id='ProjectSection__title' className='ProjectSection__title'>
        Our Creations
      </h1>
      <article className='ProjectSection__cards'>
        <div id='Cards' className='bg-deepMobile md:bg-deepDesktop'>
          <p>Deep earth</p>
        </div>
        <div id='Cards' className='bg-nightMobile md:bg-nightDesktop'>
          <p>Night arcade</p>
        </div>
        <div id='Cards' className='bg-soccerMobile md:bg-soccerDesktop'>
          <p>Soccer team VR</p>
        </div>
        <div id='Cards' className='bg-gridMobile md:bg-gridDesktop'>
          <p>The grid</p>
        </div>
        <div id='Cards' className='bg-fromUpMobile md:bg-fromUpDesktop'>
          <p>From up above VR</p>
        </div>
        <div id='Cards' className='bg-pocketMobile md:bg-pocketDesktop'>
          <p>Pocket borealis</p>
        </div>
        <div id='Cards' className='bg-curiosityMobile md:bg-curiosityDesktop'>
          <p>The curiosity</p>
        </div>
        <div id='Cards' className='bg-fishMobile md:bg-fishDesktop'>
          <p>Make it fisheye</p>
        </div>
      </article>

      <button className='ProjectSection__btn'>See all</button>
    </section>
  );
};

export default Projects;
