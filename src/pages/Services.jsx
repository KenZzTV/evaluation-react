import React from 'react';
import '../css/Services.css';

import uxDesignIcon from '../images/brush.svg';
import developmentIcon from '../images/code-slash.svg';
import seoIcon from '../images/search.svg';

const Services = () => {
  return (
    <div className="services-container">
      {/* Bannière bleue en haut */}
      <div className="banner"></div>

      <div className="services-content">
        <header className="services-header">
          <h1>Mon offre de services</h1>
          <p>Voici les prestations sur lesquelles je peux intervenir</p>
        </header>

        <section className="services-grid">
          <article className="service-card">
            <img className="service-icon" src={uxDesignIcon} alt="UX Design" />
            <h2>UX Design</h2>
            <p>L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications 
                mobiles, logiciels, objets connectés, etc.) en placant
                l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.</p>
          </article>

          <article className="service-card">
            <img className="service-icon" src={developmentIcon} alt="Développement web" />
            <h2>Développement web</h2>
            <p>Le développement de sites web consiste à créer des
                 sites internet en utilisant des langages de
                 programmation (HTML, CSS, JavaScript, PHP, etc.)
                 et des frameworks (Bootstrap, React, Angular,etc.)</p>
          </article>

          <article className="service-card">
            <img className="service-icon" src={seoIcon} alt="Référencement" />
            <h2>Référencement</h2>
            <p>Le référencement naturel (SEO) est une technique
                 qui consiste à optimiser un site web pour le faire
                 remonter dans les résultats des moteurs de
                  recherche(Google, Bing, Yahoo, etc.). L'objectif est
                  d'attirer un maximum de visiteurs qualifiés sur le site.</p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Services;