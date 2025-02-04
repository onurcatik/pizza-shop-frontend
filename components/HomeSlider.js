"use client";

import { useState } from 'react';

const HomeSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState('next'); // 'next' or 'prev'

  const slides = [
    { image: '/images/home-img-1.png', title: 'Ev Yapımı Pepperoni Pizza' },
    { image: '/images/home-img-2.png', title: 'Mantarlı Pizza' },
    { image: '/images/home-img-3.png', title: 'Mascarpone ve Mantar' }
  ];

  const next = () => {
    setDirection('next');
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setDirection('prev');
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="home" id="home">
      <div className="slide-container">
        {slides.map((slide, index) => {
          const slideClass = index === activeSlide
            ? `slide active ${direction}`
            : 'slide';

          return (
            <div key={index} className={slideClass}>
              <div className="image">
                <img src={slide.image} alt={slide.title} />
              </div>
              <div className="content">
                <h3>{slide.title}</h3>
                <div className="fas fa-angle-left" onClick={prev}></div>
                <div className="fas fa-angle-right" onClick={next}></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeSlider;
