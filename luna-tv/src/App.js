import React from 'react';
import './styles/App.css';
import './styles/Content.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card'; 
import Navbar from './Navbar';
import trendingCardsData from './trendingCardsData.json';
import mostPopularData from './mostPopularData.json';

const contentImage = require.context('./Content', true);


const App = () => {
  return (
    <div className="bg-img position-relative">
      <div className="custom-container container-fluid position-absolute top-0">
        <Navbar />
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
              <button class="btn btn-primary btn-lg">Full Catalog</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
