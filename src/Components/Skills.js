import React from 'react';

const Skills = () => {
  return (
    <section id='skills' className='flex container skills'>
      <h2 className='title'>My skills</h2>

      <div>
        <div>
          <i class='fa-brands fa-html5'></i>
          <span>HTML</span>
        </div>

        <div>
          <i class='fa-brands fa-css3-alt'></i>
          <span>CSS</span>
        </div>

        <div>
          <i class='fa-brands fa-js'></i>
          <span>JavaScrispt</span>
        </div>

        <div>
          <i class='fa-brands fa-square-github'></i>
          <span>GitHub</span>
        </div>

        <div>
          <i class='fa-brands fa-figma'></i>
          <span>Figma</span>
        </div>

        <div>
          <i class='fa-brands fa-react'></i>
          <span>React</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
