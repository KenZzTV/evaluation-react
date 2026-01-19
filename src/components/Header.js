import React from 'react';
import '../css/Header.css';
import { Link, NavLink } from 'react-router-dom';
// L'import du JS ici est bien, mais assure-toi qu'il est aussi dans index.js pour être sûr

function Header() { 
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3 fixed-top">
      <div className="container-fluid">
        {/* Le Nom/Logo à gauche */}
        <Link className="navbar-brand text-uppercase fw-bold" to="/">John Doe</Link>

        {/* LE BOUTON BURGER (Indispensable !) */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* LA ZONE QUI SE CACHE (id="navbarNav" doit correspondre au data-bs-target du bouton) */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link text-uppercase" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-uppercase" to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-uppercase" to="/portfolio">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-uppercase" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-uppercase" to="/mentions-legales">Mentions légales</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;