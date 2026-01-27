import React, { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/Mentions.css';

const Mentions = () => {
  // Empêcher l'indexation par les moteurs de recherche
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    
    // Nettoyage quand on quitte la page
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <main className="container mt-5 mb-5">
      <div className="mentions-header text-center mb-4">
        <h1 className="text-uppercase">Mentions légales</h1>
        <div className="blue-bar mx-auto" style={{ height: '3px', width: '100px', backgroundColor: '#007bff' }}></div>
      </div>

      <div className="accordion" id="accordionMentions">
        
        {/* Éditeur du site */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Éditeur du site
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" role="region" aria-labelledby="headingOne" data-bs-parent="#accordionMentions">
            <div className="accordion-body">
              <h3>John Doe</h3>
              <address>
                <p>40 rue Laure Diebold<br />69009 Lyon, France</p>
                <p>📞 <a href="tel:1020304050">10 20 30 40 50</a></p>
                <p>📧 <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a></p>
              </address>
            </div>
          </div>
        </div>

        {/* Hébergeur */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Hébergeur
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" role="region" aria-labelledby="headingTwo" data-bs-parent="#accordionMentions">
            <div className="accordion-body">
              <p><strong>Alwaysdata</strong></p>
              <p>91 rue du Faubourg Saint-Honoré<br />75008 Paris</p>
              <p>🌐 <a href="http://www.alwaysdata.com" target="_blank" rel="noreferrer">www.alwaysdata.com</a></p>
            </div>
          </div>
        </div>

        {/* Crédits */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Crédits
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" role="region" aria-labelledby="headingThree" data-bs-parent="#accordionMentions">
            <div className="accordion-body">
              <p>Ce site a été réalisé par John Doe, étudiant au Centre Européen de formation.</p>
              <p>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com/fr/" target="_blank" rel="noreferrer">Pixabay</a>.</p>
              <p>La favicon de ce site a été fournie par <a href="https://www.flaticon.com/fr/" target="_blank" rel="noreferrer">Flaticon</a>.</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Mentions;