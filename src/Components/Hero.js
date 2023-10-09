import profilePic from '../Assets/sujan.png';
import CV from '../Assets/Portfolio.pdf';

import React from 'react';

const Hero = () => {
  return (
    <section id='home' className='container hero-section'>
      <div className='grid hero'>
        <div className='left flex'>
          <p>
            Hi I'm <strong>Sujan Mahat</strong>
          </p>
          <h3>Sofware Developer</h3>
          <p>I love coding and teach others what I know</p>

          <button className='download-btn'>
            <a href={CV} download=''>
              Download CV <i class='fa-solid fa-download'></i>
            </a>
          </button>
        </div>

        <div className='right'>
          <img src={profilePic} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
