import React from 'react';
import '../css/Portfolio.css';
import FreshFood from '../images/fresh-food.jpg';
import RestaurantAkira from '../images/restaurant-japonais.jpg';
import Bienetre from '../images/espace-bien-etre.jpg';
import SEO from '../images/seo.jpg';
import API from '../images/coder.jpg';
import Maquette from '../images/screens.jpg';

const ProjectCard = ({ image, title, description, tech, link }) => (
  <article className="project-card">
    <img src={image} alt={title} />
    <div className="card-body">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} className="btn-view">Voir le site</a>
    </div>
    <footer className="card-footer">
      {tech}
    </footer>
  </article>
);

const Portfolio = () => {
  const projects = [
    { id: 1, title: "Fresh Food", img: FreshFood, desc: "Site de vente de produits frais en ligne", tech: "Site réalisé avec PHP et MySQL", link: "#" },
    { id: 2, title: "Restaurant Akira", img: RestaurantAkira, desc: "Site de vente de produits frais en ligne", tech: "Site réalisé avec WordPress", link: "#" },
    { id: 3, title: "Espace bien-être", img: Bienetre, desc: "Site de vente de produits frais en ligne", tech: "Site réalisé avec LARAVEL", link: "#" },
    { id: 4, title: "SEO", img: SEO, desc: "Amélioration du référencement d'un site e-commerce", tech: "Utilisation des outils SEO", link: "#" },
    { id: 5, title: "Création d'une API", img: API, desc: "Création d'une API RESTFULL publique", tech: "PHP - SYMFONY", link: "#" },
    { id: 6, title: "Maquette d'un site web", img: Maquette, desc: "Création du prototype d'un site web", tech: "Réalisé avec FIGMA", link: "#" },
  ];

  return (
    <div className="portfolio-page">
      {/* Image de fond bleue en haut */}
      <div className="banner"></div>

      <header className="portfolio-header">
        <h1>Portfolio</h1>
        <p>Voici quelques-unes de mes réalisations.</p>
      </header>

      <main className="container">
        <div className="portfolio-grid">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              image={project.img}
              title={project.title}
              description={project.desc}
              tech={project.tech}
              link={project.link}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;