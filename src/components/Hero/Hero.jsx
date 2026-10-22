import React from 'react';
import './Hero.css';
// Rasmni Header papkasidan bitta tepaga chiqib import qilamiz
import heroImg from './photo_2026-08-20_15-08-31.jpg'; 

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* Chap tomon: Matnlar va tugma */}
        <div className="hero-content">
          <h1>Ozon-da biznesni yangi imkoniyatlar bilan boshlang</h1>
          <p>Xalqaro darajada biznes yuriting. Rossiya va O'zbekistonda 67.3 milliondan ortiq auditoriya.</p>
          <button className="btn-main">Bepul ro'yxatdan o'tish</button>
        </div>

        {/* O'ng tomon: Siz yuborgan tayyor rasm */}
        <div className="hero-visual">
          <img src={heroImg} alt="Ozon Seller" className="hero-ready-img" />
        </div>

      </div>
      
      {/* Pastki statistika qismi */}
      <div className="hero-stats">
        <div className="stat-card">
          <h3>4 baravar</h3>
          <p>O'zbekistondagi sotuvchilar aylanmasi o'sishi</p>
        </div>
        <div className="stat-card">
          <h3>5 baravar</h3>
          <p>O'zbekistondagi sotuvchilar buyurtmalari soni</p>
        </div>
        <div className="stat-card">
          <h3>3.5 baravar</h3>
          <p>O'zbekistondagi xaridorlar soni</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
