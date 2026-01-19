import React from 'react';
import profileImg from '../images/john-doe-about.jpg';
import Modal from '../components/modal';

const Home = () => {
const [openModal, setOpenModal] = React.useState(false);

    return (
        <main className="main-content">
  {/* SECTION 1 : Le Hero (Haut de page) */}
  <section className="hero">
    <div className="hero-overlay">
      <h1>Bonjour, je suis John Doe</h1>
      <h2>Développeur web full stack</h2>
      <button className="btn-hero" onClick={() => setOpenModal(true)}>
            En savoir plus
          </button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}/> 
    </div>
  </section>

  {/* SECTION 2 : Le Conteneur Blanc (À propos + Compétences) */}
  <section className="container-info" id="about">
    <div className="card-container">
      
      {/* Colonne Gauche : À propos */}
      <div className="about-col">
        <h3>A propos</h3>
        <img src={profileImg} alt="John Doe" className="profile-img" />
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?</p>
      </div>

      {/* Colonne Droite : Compétences */}
      <div className="skills-col">
        <h3>Mes compétences</h3>
        
        <div className="skill">
          <span>HTML5 90%</span>
          <div className="bar-bg"><div className="bar-fill" style={{ width: '90%', backgroundColor: '#ef3444' }}></div></div>
        </div>

        <div className="skill">
          <span>CSS3 80%</span>
          <div className="bar-bg"><div className="bar-fill" style={{ width: '80%', backgroundColor: '#00c0ef' }}></div></div>
        </div>

        <div className="skill">
          <span>JAVASCRIPT 70%</span>
          <div className="bar-bg"><div className="bar-fill" style={{ width: '70%', backgroundColor: '#f39c12' }}></div></div>
        </div>

        <div className="skill">
          <span>PHP 60%</span>
          <div className="bar-bg"><div className="bar-fill" style={{ width: '60%', backgroundColor: '#00a65a' }}></div></div>
        </div>

        <div className="skill">
          <span>REACT 50%</span>
          <div className="bar-bg"><div className="bar-fill" style={{ width: '50%', backgroundColor: '#007bff' }}></div></div>
        </div>
      </div>

    </div>
  </section>
</main>
    )
}

    export default Home;