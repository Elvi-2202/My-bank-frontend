// src/pages/NotFoundPage.js
import React from 'react';

const NotFoundPage = () => (
  <div style={{ textAlign: 'center', marginTop: '80px' }}>
    <h2>404 - Page non trouvée</h2>
    <p>La page que vous cherchez n'existe pas.</p>
    <a href="/" className="button">Retour à l'accueil</a>
  </div>
);

export default NotFoundPage;
