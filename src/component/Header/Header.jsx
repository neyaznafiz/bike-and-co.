import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div class="">
           <nav class="navbar navbar-expand-lg navbar-light  px-5 nvb">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold logo-name" href="#bike-and-co">Bike And Co.</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#contact">Contact</a>
        </li>
          </ul>
    </div>
  </div>
</nav> 
        </div>
    );
};

export default Header;