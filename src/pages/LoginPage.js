// src/pages/LoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Api";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = await loginUser({ username, password });
      localStorage.setItem("jwtToken", token);
      alert("Connexion réussie !");
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
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
          <button type="submit" disabled={loading}>
            {loading ? "Connexion..." : "SE CONNECTER"}
          </button>
        </form>
        <a href="/register" className="register-link">
          Vous n'avez pas de compte ? Inscrivez-vous
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
