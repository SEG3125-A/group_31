import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // import useLocation
import './styles/App.css';
import './styles/Content.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card'; 
import Navbar from './Navbar';
import Hero from './Hero';
import Login from './Login'; // import the Login component
import trendingCardsData from './trendingCardsData.json';
import mostPopularData from './mostPopularData.json';
import { useTranslation } from 'react-i18next';

const contentImage = require.context('./Content', true);

const Main = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const { t } = useTranslation(); // add this line

  return (
    <div className={`bg-img position-relative ${isLoginPage ? 'login-background' : ''}`}>
      <div className={`custom-container container-fluid position-absolute top-0 ${isLoginPage ? 'login-container' : ''}`}> 
        <section id="hero">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
              <Hero />
                <div className="content">
                  <h1 className="fs-2 mb-5 text-white">{t('Trending')}</h1>
                  <div className="row gx-4">
                  {trendingCardsData.map((card, index) => (
                      <Card key={index} title={t(card.title)} description={t(card.title + ' Description')} imgSrc={contentImage(card.imgSrc)} />
                    ))}
                  </div>
                </div>
                <div className="content">
                  <h1 className="fs-2 mb-5 text-white">{t('Most Popular')}</h1>
                  <div className="row gx-4">
                  {mostPopularData.map((card, index) => (
                      <Card key={index} title={t(card.title)} description={t(card.title + ' Description')} imgSrc={contentImage(card.imgSrc)} />
                    ))}
                  </div>
                </div>

                <div class="row full-catalog">
                  <div class="col text-center mb-5">
                      <a href="#" class="btn btn-primary btn-lg full-ctg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-collection-fill" viewBox="0 0 16 16">
                          <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3m2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1"/>
                        </svg>
                        <span className="icon-text">{t('Full Catalog')}</span>
                      </a>
                  </div>
                </div>
              </>
            }/>
            <Route path="/login" element={<Login />} />
          </Routes>
        </section>
      </div>
    </div>
  );
};

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <Main />
      <div className="App">
        <button onClick={() => changeLanguage('en')}>en</button>
        <button onClick={() => changeLanguage('fr')}>fr</button>
        <h2>{t('Welcome to React')}</h2>
      </div>
    </Router>
  );
};

export default App;
