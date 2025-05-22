// src/pages/RegisterPage.js
import React, { useState } from 'react';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }
    alert(`Inscription : ${username} (${email})`);
    // Ici tu peux connecter à ton API d’inscription
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
          alt="Logo"
          className="login-logo"
        />
        <h1>My Bank</h1>
        <p>Moins de complexité, plus de sécurité</p>
      </div>
      <div className="login-form-card">
        <h2>Créer un compte</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nom d'utilisateur *"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Adresse e-mail *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe *"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirmer le mot de passe *"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
          <button type="submit">S'INSCRIRE</button>
        </form>
        <a href="/" className="register-link">
          Déjà un compte ? Connectez-vous
        </a>
      </div>
    </div>
  );
};

export default RegisterPage;
