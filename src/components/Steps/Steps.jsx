import React from 'react';
import './Steps.css';

const Steps = () => {
  return (
    <section id="start" className="steps-section">
      <h2>Ozon-da sotish juda oson</h2>
      <div className="steps-timeline">
        <div className="step active">1 - Tovar tanlash</div>
        <div className="step">2 - Ro'yxatdan o'tish</div>
        <div className="step">3 - Tovarlarni yuklash</div>
        <div className="step">4 - Sotish sxemasi</div>
      </div>
      
      <div className="step-detail">
        <div className="detail-card">
          <h3>Tovarlarni tanlang</h3>
          <p>Bizning bepul tahliliy xizmatimiz orqali bo'lajak foydangizni hisoblang.</p>
        </div>
        <div className="detail-card">
          <h3>Bepul tahlil xizmati</h3>
          <p>Telefon raqami orqali tizimga kirish kifoya.</p>
        </div>
        <div className="detail-card">
          <h3>Ozon tariflari</h3>
          <p>Barcha tariflar shaffof va ochiq.</p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
