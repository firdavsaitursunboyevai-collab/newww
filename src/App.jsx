import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Advantages from './components/Advantages/Advantages';
import Steps from './components/Steps/Steps';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="App" data-theme={theme}>
      <Header theme={theme} toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <Hero />
      <Advantages />
      <Steps />
      
      <div className="telegram-banner">
        <span>O'zbekistonlik sotuvchilar uchun telegram kanalimizga a'zo bo'ling</span>
        <button className="btn-tg">→</button>
      </div>
    </div>
  );
}

export default App;
