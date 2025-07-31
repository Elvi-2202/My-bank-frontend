// src/pages/ProfilePage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "https://127.0.0.1:8000/api";

const ProfilePage = () => {
  const navigate = useNavigate();

  // États pour les champs utilisateur
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  // États pour réseaux sociaux
  const [website, setWebsite] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  // Charger les infos utilisateur au montage du composant
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      alert("Vous devez être connecté.");
      navigate("/login");
      return;
    }

    async function fetchProfile() {
      try {
        const response = await fetch(`${API_BASE_URL}/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });

        if (response.status === 401) {
          localStorage.removeItem("jwtToken");
          alert("Session expirée, veuillez vous reconnecter.");
          navigate("/login");
          return;
        }

        if (!response.ok) {
          throw new Error("Erreur lors du chargement du profil");
        }

        const data = await response.json();

        // Adapter selon la structure reçue
        setFullName(data.fullName || data.full_name || "");
        setEmail(data.email || "");
        setPhone(data.phone || "");
        setMobile(data.mobile || "");
        setAddress(data.address || "");

        setWebsite(data.website || "");
        setGithub(data.github || "");
        setTwitter(data.twitter || "");
        setInstagram(data.instagram || "");
        setFacebook(data.facebook || "");

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchProfile();
  }, [navigate]);

  // Sauvegarder les modifications du profil
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSaving(true);
    setError(null);

    const token = localStorage.getItem("jwtToken");
    if (!token) {
      alert("Vous devez être connecté.");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/profile`, {
        method: "PUT", // ou PATCH selon backend
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          mobile,
          address,
          website,
          github,
          twitter,
          instagram,
          facebook,
        }),
      });

      if (response.status === 401) {
        localStorage.removeItem("jwtToken");
        alert("Session expirée, veuillez vous reconnecter.");
        navigate("/login");
        return;
      }

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Erreur lors de la sauvegarde");
      }

      alert("Profil mis à jour avec succès !");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div>Chargement du profil...</div>;
  if (error) return <div style={{ color: "red" }}>Erreur : {error}</div>;

  return (
    <div className="profile-bg" style={{ padding: "1rem", maxWidth: "700px", margin: "auto" }}>
      <h2>Profil utilisateur</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <label>
          Nom complet
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </label>
        <label>
          E-mail
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Téléphone
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <label>
          Mobile
          <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </label>
        <label>
          Adresse
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>

        <h3>Réseaux sociaux</h3>
        <label>
          Website
          <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </label>
        <label>
          Github
          <input type="text" value={github} onChange={(e) => setGithub(e.target.value)} />
        </label>
        <label>
          Twitter
          <input type="text" value={twitter} onChange={(e) => setTwitter(e.target.value)} />
        </label>
        <label>
          Instagram
          <input type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)} />
        </label>
        <label>
          Facebook
          <input type="text" value={facebook} onChange={(e) => setFacebook(e.target.value)} />
        </label>

        <button type="submit" disabled={saving}>
          {saving ? "Sauvegarde en cours..." : "Enregistrer le profil"}
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
