import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import './styles/App.css';


const Hero = () => (
    <div className="hero-box">
    <h1 className="anime-title text-white">Chainsaw Man</h1>
    <p className="hero-desc text-white">Chainsaw Man follows the story of Denji, an impoverished young man who makes a contract that fuses his body with that of a dog-like devil named Pochita, granting him the ability to transform parts of his body into chainsaws. Denji eventually joins the Public Safety Devil Hunters, a government agency focused on fighting against devils whenever they become a threat to Japan.</p>
    <div className="hero-btns mt-4">
      <a href="#" className="btn btn-primary btn-lg watch me-4 ">Watch Now</a>
      <a href="#" className="btn btn-light btn-lg detail">Detail</a>
    </div>
  </div>
);

export default Hero;
