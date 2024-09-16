import React, { useState } from 'react';
import '../assets/css/Header.css'; 
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header>
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <Link class="navbar-brand w-25" to="/" ><img src="public\Screenshot_2024-05-13_172814-removebg-preview.png" alt="logo" className='d-inline' /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Speed_Awareness">Speed Awareness</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" aria-disabled="true" to="/TheoryTest">Theory Test</Link>
        </li>
      </ul>
      <form class="last-menu d-flex navbar-nav" role="search">
        <li><Link className='text-decoration-none' to="/about">About</Link></li>
        <li><Link className='text-decoration-none'   to="tel:+918953500232">+91 8953500232</Link></li>
      </form>
    </div>
  </div>
</nav>
</header>
  );
};

export default Header;
