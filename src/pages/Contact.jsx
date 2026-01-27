import React from 'react';
import '../css/Contact.css';

const Contact = () => {
  return (
    <main className="contact-container">
      <div className="contact-header">
        <h1>Contact</h1>
        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
      </div>

      <section className="contact-card">
        {/* Colonne Gauche : Formulaire */}
        <div className="contact-form">
          <h2>Formulaire de contact</h2>
          <form>
            <input type="text" placeholder="Votre nom" required />
            <input type="email" placeholder="Votre adresse email" required />
            <input type="tel" placeholder="Votre numéro de téléphone" required />
            <input type="text" placeholder="Sujet" required />
            <textarea placeholder="Votre message" rows="5" required></textarea>
            <button type="submit" className="btn-submit">Envoyer</button>
          </form>
        </div>

        {/* Colonne Droite : Coordonnées + Map */}
        <div className="contact-info">
          <h2>Mes coordonnées</h2>
          <address>
            <strong>John Doe</strong> <br />
            40 Rue Laure Diebold <br />
            69009 Lyon, France <br />
            <a href="tel:1020304050">10 20 30 40 50</a> <br />
            <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
          </address>

          {/* Intégration Google Maps */}
          <div className="google-map">
            <iframe title="Google Maps - John Doe Address"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657541053!2d4.80332307684849!3d45.77866571253457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65ed56625f%3A0x21216d258ff2e47c!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1715000000000" 
              height="250"
              style={{ border: 0, width: '100%' }}
              loading="lazy">
            </iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;