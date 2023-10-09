import React from 'react';

const Info = () => {
  return (
    <section className='flex container banner'>
      <div className='info-content flex'>
        <div className='icon-container flex'>
          <i className='fa-solid fa-award'></i>
        </div>

        <div>
          <strong>IT</strong>
          <p>Graduate</p>
        </div>
      </div>

      <div className='info-divider'></div>

      <div className='info-content flex'>
        <div className='icon-container flex'>
          <i className='fa-solid fa-award'></i>
        </div>

        <div>
          <strong>5+ Projects</strong>
          <p>Completed</p>
        </div>
      </div>

      <div className='info-divider'></div>

      <div className='info-content flex'>
        <div className='icon-container flex'>
          <i className='fa-solid fa-award'></i>
        </div>

        <div>
          <strong>1 Year</strong>
          <p>Experience</p>
        </div>
      </div>
    </section>
  );
};

export default Info;
