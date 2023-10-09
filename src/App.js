import './App.css';
import Hero from './Components/Hero';
import Info from './Components/Info';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';

function App() {
  return (
    <div className='wrapper'>
      <Navbar />
      <Hero />
      <Info />
      <Skills />
    </div>
  );
}

export default App;
