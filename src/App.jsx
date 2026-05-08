import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

const App = () => {
  const [darkMode, setdarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
    document.documentElement.classList.add('dark');
  }, []);
 useEffect(() => {
  AOS.refresh()
 },[darkMode]);
  const toggledarkMode = () => {
    const newMode = !darkMode;
    setdarkMode(newMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={darkMode ? 'bg-gradient-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen' : 'bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen'}>
      <Navbar darkMode={darkMode} toggledarkMode={toggledarkMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contacts darkMode={darkMode}  />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;