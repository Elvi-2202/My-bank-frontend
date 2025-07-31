// src/RegisterPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Api";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    setLoading(true);
    try {
      await registerUser({ username, email, password });
      alert("Inscription réussie. Vous pouvez maintenant vous connecter.");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      {/* Partie gauche... */}
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
          <button type="submit" disabled={loading}>
            {loading ? "Inscription..." : "S'INSCRIRE"}
          </button>
        </form>
        <a href="/login" className="register-link">
          Déjà un compte ? Connectez-vous
        </a>
      </div>
    </div>
  );
};

export default RegisterPage;
