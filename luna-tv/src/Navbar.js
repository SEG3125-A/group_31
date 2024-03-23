import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import './styles/App.css';
const images = require.context('./images', true);


const Navbar = () => (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand">
        <img src={images('./LunaLogo.png')} alt="LunaTv" className="logo" width="148" height="64" />
      </Link>
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
          <button className="btn btn-outline-primary search-btn" type="submit">Search</button>
        </form>
        <Link to="/login">
        <button class="btn btn-primary btn-md login-btn ms-2">Login</button>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
