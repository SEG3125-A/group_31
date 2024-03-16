import React from 'react';
import './styles/Card.css';
import './styles/Content.css';
import './styles/App.css';

const images = require.context('./Content', true);

const Card = ({ title, year, rating, description, imgSrc }) => (
  <div className="col-md-2 mb-5">
    <div className="card bg-dark text-white" >
      <a href="#"><img src={imgSrc} className="card-img-top" alt=""/></a>
      <div className="card-body anime-info">
        <h3 className="card-title">{title}</h3>
        <div className="d-flex align-items-center mb- year-rating">
          <div className="me-3 year">{year}</div>
          <img src={images('./star.svg')} alt="" width="16px" height="16px"/>
          <div className="ms-2">{rating}</div>
        </div>
        <p className="card-text descpt">{description}</p>
      </div>
    </div>
  </div>
);

export default Card;
