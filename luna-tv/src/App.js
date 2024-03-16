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

const contentImage = require.context('./Content', true);

const Main = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

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
                      <a href="#" class="btn btn-primary btn-lg full-ctg">Full Catalog</a>
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
  return (
    <Router>
      <Main />
    </Router>
  );
};

export default App;
