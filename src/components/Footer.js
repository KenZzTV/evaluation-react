import React from 'react';
import '../css/Footer.css';
import { Routes, Route, Link } from 'react-router-dom';

import github from '../images/github.svg';
import twitter from '../images/twitter-x.svg';
import linkedin from '../images/linkedin.svg';

import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Mentions from '../pages/Mentions';

function Footer () {
  return (
    <footer>
      <div>
        <address>
            <h4>John Doe</h4>
            <p>40 rue Laure Diebold <br />
            69009 Lyon, France <br />
            10 20 30 40 50 <br />
            <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
            </p>
            <a href="https://github.com/github-john-doe" target="_blank" rel="nofollow noreferrer">
              <img className="bi bi-github" src={github}/>
            </a>
            <a href="https://twitter.com/twitter-john-doe" target="_blank" rel="nofollow noreferrer">
              <img className="bi bi-twitter" src={twitter}/>
            </a>
            <a href="https://www.linkedin.com/in/linkedin-john-doe" target="_blank" rel="nofollow noreferrer">
              <img className="bi bi-linkedin" src={linkedin}/>
            </a>
        </address>
        <div>
            <h4>Liens utiles</h4>
            <ul>
              <nav>
                <li><Link to="/">Acceuil</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Me Contacter</Link></li>
                <li><Link to="/mentions-legales">Mentions légales</Link></li>
              </nav>
            </ul>
        </div>
        <div>
            <h4>Mes dernières réalisations</h4>
            <ul>
                <li><Link to="/portfolio">Fresh Food</Link></li>
                <li><Link to="/portfolio">Restaurant Akira</Link></li>
                <li><Link to="/portfolio">Espace bien-être</Link></li>
                <li><Link to="/portfolio">SEO</Link></li>
                <li><Link to="/portfolio">Création d'une API</Link></li>
                <li><Link to="/portfolio">Maquette d'un site</Link></li>
            </ul>
        </div>
      </div>
    </footer>
  );
};

<Routes>
  <Route path="/services" element={<Services/>}></Route>
  <Route path="/portfolio" element={<Portfolio/>}></Route>
  <Route path="/contact" element={<Contact/>}></Route>
  <Route path="/mentions-legales" element={<Mentions/>}></Route>
</Routes>

export default Footer;