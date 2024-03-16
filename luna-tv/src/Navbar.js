import React from 'react';
import './styles/Navbar.css';
const images = require.context('./images', true);

const Navbar = () => (
  <section id="hero">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
          <img src={images('./LunaLogo.png')} alt="LunaTv" className="logo" width="148" height="64" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">New Release</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Categories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Most Popular</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
          <a href="#">
            <svg fill="#000000" width="48px" height="48px" viewBox="0 0 24 24" id="user-square" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className="icon flat-color">
              <rect id="primary" x="2" y="2" width="20" height="20" rx="2" style={{fill: 'rgb(0, 0, 0)'}}></rect>
              <path id="secondary" d="M15.14,14.89a5,5,0,1,0-6.28,0A6,6,0,0,0,6,20v1a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V20A6,6,0,0,0,15.14,14.89Z" style={{fill: 'rgb(44, 169, 188)'}}></path>
            </svg>
          </a>
        </div>
      </div>
    </nav>
    <div className="hero-box">
      <h1 className="anime-title text-white">Chainsaw Man</h1>
      <p className="hero-desc text-white">Chainsaw Man follows the story of Denji, an impoverished young man who makes a contract that fuses his body with that of a dog-like devil named Pochita, granting him the ability to transform parts of his body into chainsaws. Denji eventually joins the Public Safety Devil Hunters, a government agency focused on fighting against devils whenever they become a threat to Japan.</p>
      <div className="hero-btns mt-4">
        <a href="#" className="btn btn-primary btn-lg watch me-4 ">Watch Now</a>
        <a href="#" className="btn btn-light btn-lg detail">Detail</a>
      </div>
    </div>
  </section>
);

export default Navbar;
