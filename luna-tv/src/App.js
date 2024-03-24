import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './styles/App.css';
import './styles/Content.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './i18n';
import Card from './Card'; 
import Navbar from './Navbar';
import Hero from './Hero';
import Login from './Login'; 
import trendingCardsDataEN from './translations/trendingCardsDataEN.json';
import mostPopularDataEN from './translations/mostPopularDataEN.json';
import trendingCardsDataFR from './translations/trendingCardsDataFR.json';
import mostPopularDataFR from './translations/mostPopularDataFR.json';
import ContentPage from './ContentPage';

const contentImage = require.context('./Content', true);

const Main = () => {
  const location = useLocation();
  const {t, i18n } = useTranslation();
  const isLoginPage = location.pathname === '/login';
  const isContentPage = location.pathname === '/content-page';

  const trendingCardsData = i18n.language === 'en' ? trendingCardsDataEN : trendingCardsDataFR;
  const mostPopularData = i18n.language === 'en' ? mostPopularDataEN : mostPopularDataFR;

  return (
    <div className={`bg-img position-relative ${isLoginPage ? 'login-background' : ' content-background'}`}>
      <div className={`custom-container container-fluid position-absolute top-0 ${isLoginPage ? 'login-container' : 'content-container'}`}> 
        <section id="hero">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
              <Hero />
                <div className="content">
                  <h1 className="fs-2 mb-5 text-white">Trending</h1>
                  <div className="row gx-4">
                  {trendingCardsData.map((card, index) => (
                      <Card key={index} {...card} imgSrc={contentImage(card.imgSrc)} />
                    ))}
                  </div>
                </div>
                <div className="content">
                  <h1 className="fs-2 mb-5 text-white">Most Popular</h1>
                  <div className="row gx-4">
                  {mostPopularData.map((card, index) => (
                      <Card key={index} {...card} imgSrc={contentImage(card.imgSrc)} />
                    ))}
                  </div>
                </div>

                <div class="row full-catalog">
                  <div class="col text-center mb-5">
                      <a href="#" class="btn btn-primary btn-lg full-ctg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-collection-fill" viewBox="0 0 16 16">
                          <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3m2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1"/>
                      </svg>
                      <span className="icon-text">{t('other.fullCatalogue')}</span>
                      </a>
                      <br />
                      <a href="#hero" class="text-light mt-2">Back to top</a>
                  </div>
              </div>
              </>
            }/>
            <Route path="/login" element={<Login />} />
            <Route path="/content-page" element={<ContentPage className={isContentPage ? 'login-container' : ''} />} />
          </Routes>
        </section>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Main />
      </Router>
    </I18nextProvider>
  );
};

export default App;