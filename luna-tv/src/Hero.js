import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import './styles/App.css';
import { useTranslation } from 'react-i18next';


const Hero = () => {
  const { t } = useTranslation();
  return (
      <div className="hero-box">
      <h1 className="anime-title text-white">{t('hero.title')}</h1>
      <p className="hero-desc text-white">{t('hero.description')}</p>
      <div className="hero-btns mt-4">
        <a href="#" className="btn btn-primary btn-lg watch me-4 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-play-btn-fill" viewBox="0 0 16 16">
              <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
          </svg>
          <span className="icon-text">{t('hero.button1')}</span>
        </a>
        <a href="#" className="btn btn-light btn-lg detail">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-info-lg" viewBox="0 0 16 16">
              <path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0"/>
          </svg>
          <span className="icon-text">{t('hero.button2')}</span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
