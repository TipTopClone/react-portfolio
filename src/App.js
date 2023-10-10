import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Info from './Components/Info';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Works from './Components/Work';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <input type='checkbox' id='darkMode' />
      <div className='wrapper'>
        <label htmlFor='darkMode' className='dark-mode-toggle'>
          <i className='fa-solid fa-circle-half-stroke'></i>
        </label>
        <Navbar />

        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='skills' element={<Skills />} />
          <Route path='projects' element={<Works />} />
          <Route path='about-me' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Routes>

        {/* <Hero />
        <Info />
        <Skills />
        <Works />
        <About />
        <Contact /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
