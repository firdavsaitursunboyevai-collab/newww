import React from 'react';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="ozon-header">
      <div className="header-left">
        <span className="logo">ozon seller</span>
        <span className="country">🇺🇿 O'zbekiston</span>
      </div>
      <nav className="header-nav">
        <a href="#features">Afzalliklar</a>
        <a href="#start">Qanday boshlash</a>
        <a href="#faq">Savol-javoblar</a>
        <a href="#education">O'qitish</a>
      </nav>
      <div className="header-auth">
        <button className="btn-theme" onClick={toggleTheme} aria-label="Rang rejimini almashtirish">
          {theme === 'dark' ? ' Kunduz' : ' Tun'}
        </button>
        <button className="btn-login">Kirish</button>
        <button className="btn-register">Ro'yxatdan o'tish</button>
      </div>
    </header>
  );
};

export default Header;
