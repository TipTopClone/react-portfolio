import React from 'react';

const Footer = () => {
  return (
    <footer class='footer'>
      <div class='container'>
        <div class='top flex'>
          <div class='links'>
            <h3>Links</h3>
            <ul>
              <li>
                <a href=''>Home</a>
              </li>
              <li>
                <a href=''>Skills</a>
              </li>
              <li>
                <a href=''>Projects</a>
              </li>
              <li>
                <a href=''>Contact</a>
              </li>
            </ul>
          </div>

          <div class='socials '>
            <h3>Social Links</h3>
            <ul>
              <li>
                <a href=''>Linkdein</a>
              </li>
              <li>
                <a href=''>Twitter</a>
              </li>
              <li>
                <a href=''>Github</a>
              </li>
              <li>
                <a href=''>youtube</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class='bottom'>&copy; All Rights Reserved. Made my Sujan❤️❤️</div>

      <a href='#home'>
        <div class='go-up flex'>
          <i class='fa-solid fa-angle-up'></i>
        </div>
      </a>
    </footer>
  );
};

export default Footer;
