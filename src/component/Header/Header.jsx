import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="">
           <nav className="navbar navbar-expand-lg navbar-light  px-5 nvb">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold logo-name" href="#bike-and-co">Bike And Co.</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#contact">Contact</a>
        </li>
          </ul>
    </div>
  </div>
</nav> 
        </div>
    );
};

export default Header;