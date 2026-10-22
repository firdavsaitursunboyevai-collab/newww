import React from 'react';
import './Advantages.css';

const Advantages = () => {
  const items = [
    { title: "O'zbekiston yuridik shaxsi bilan shartnoma", desc: "O'z mamlakatingiz qonunchiligi bo'yicha hujjatlar almashinuvi." },
    { title: "Jozibador tariflar", desc: "Turli toifadagi tovarlar uchun komissiya 5% dan boshlanadi." },
    { title: "Xalqaro miqyos", desc: "O'zbekiston va Rossiya xaridorlariga mahsulot soting." },
    { title: "To'lovlarning eng kam miqdori yo'q", desc: "Sotuvdan tushgan pullarni cheklovlarsiz ixtiyoriy miqdorda yechib oling." },
    { title: "Sharhlarni boshqarish", desc: "Qo'shimcha to'lovlarsiz mijozlar ishonchini oshiring." },
    { title: "So'mda barqaror to'lovlar", desc: "Sotuvdan keyin 3 ish kuni ichida O'zbekiston banklariga pul oling." }
  ];

  return (
    <section id="features" className="advantages-section">
      <h2>Boshlash uchun qulay shart-sharoitlar</h2>
      <div className="advantages-grid">
        {items.map((item, index) => (
          <div key={index} className="adv-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span className="arrow-icon">→</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
