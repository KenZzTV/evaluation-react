import React, { useState, useEffect } from "react";
import "../css/Modal.css";

const Modal = ({ open, onClose }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/github-john-doe")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, []);

  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Barre de titre avec la croix */}
        <div className="modal-header">
          <span>Mon profil GitHub</span>
          <button className="close-icon-btn" onClick={onClose}>×</button>
        </div>

        <div className="modal-content">
          {user ? (
            <div className="profile-layout">
              {/* Colonne Gauche : Image */}
              <div className="profile-left">
                <img src={user.avatar_url} alt="Avatar GitHub" className="avatar-img" />
              </div>

              {/* Colonne Droite : Infos */}
              <div className="profile-right">
                <p className="info-item">
                   <a href={user.html_url} target="_blank" rel="noreferrer">{user.name}</a>
                </p>
                <p className="info-item bio-text">
                  {user.bio || "No bio available"}
                </p>
                <div className="divider"></div>
                <p className="info-item">Repositories : {user.public_repos}</p>
                <div className="divider"></div>
                <p className="info-item">Followers : {user.followers}</p>
                <div className="divider"></div>
                <p className="info-item">Following : {user.following}</p>
              </div>
            </div>
          ) : (
            <p className="loading">Chargement...</p>
          )}
        </div>

        {/* Footer avec bouton Fermer */}
        <div className="modal-footer">
          <button className="btn-fermer" onClick={onClose}>Fermer</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;