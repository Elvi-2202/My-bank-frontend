import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Tentative de connexion avec : ${username}`);
    // Ici tu peux connecter à ton API
  };

  return (
    <div className="login-container">
      {/* Partie gauche : Logo et slogan */}
      <div className="login-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
          alt="Logo"
          className="login-logo"
        />
        <h1>My Bank</h1>
        <p>Moins de complexité, plus de sécurité</p>
      </div>

      {/* Partie droite : Formulaire de connexion */}
      <div className="login-form-card">
        <h2>Se connecter</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Nom d'utilisateur / Adresse e-mail *"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe *"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">SE CONNECTER</button>
        </form>
        <a href="/register" className="register-link">
          Vous n'avez pas de compte ? Inscrivez-vous
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
