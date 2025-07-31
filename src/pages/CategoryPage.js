// src/pages/CategoryPage.js
import React, { useEffect, useState } from "react";
import { fetchOperations } from "../Api"; // CORRECT : api.js avec a minuscule

const categoriesStatic = [
  { name: "Logement", emoji: "🏠", color: "#4e73df" },
  { name: "Alimentation", emoji: "🍽️", color: "#1cc88a" },
  { name: "Transport", emoji: "🚗", color: "#36b9cc" },
  { name: "Loisir", emoji: "🎮", color: "#f6c23e" },
  { name: "Santé", emoji: "💊", color: "#e74a3b" },
  { name: "Shopping", emoji: "🛍️", color: "#858796" },
  { name: "Autre", emoji: "📁", color: "#888" }
];

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [operations, setOperations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      setError("Vous devez être connecté.");
      setLoading(false);
      return;
    }

    setCategories(categoriesStatic);

    fetchOperations(token)
      .then((data) => {
        setOperations(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
        if (err.message.toLowerCase().includes("401")) {
          localStorage.removeItem("jwtToken");
          alert("Session expirée. Veuillez vous reconnecter.");
          window.location.href = "/login";
        }
      });
  }, []);

  function getCategoryName(op) {
    if (op.category && op.category.title) return op.category.title;
    if (op.categorie) return op.categorie;
    return "";
  }

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;

  return (
    <div className="category-page">
      <h2>Catégories</h2>
      <p>Visualisez vos opérations par catégorie.</p>
      <div className="category-boxes" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="category-box"
            style={{
              border: `2px solid ${cat.color}`,
              borderRadius: "8px",
              padding: "1rem",
              flex: "1 1 250px",
              minWidth: "250px",
            }}
          >
            <span className="category-emoji" style={{ fontSize: "2rem", color: cat.color }}>
              {cat.emoji}
            </span>
            <div className="category-name" style={{ fontWeight: "bold", fontSize: "1.2rem", marginBottom: "0.5rem" }}>
              {cat.name}
            </div>
            <ul className="category-operations" style={{ listStyleType: "none", padding: 0, maxHeight: "200px", overflowY: "auto" }}>
              {operations
                .filter((op) => getCategoryName(op) === cat.name)
                .map((op, idx) => (
                  <li key={idx} style={{ padding: "4px 0", borderBottom: "1px solid #eee" }}>
                    <span>{op.label || op.libelle}</span> — <strong>{op.amount || op.montant} €</strong> — {op.date}
                  </li>
                ))}
              {operations.filter((op) => getCategoryName(op) === cat.name).length === 0 && (
                <li style={{ fontStyle: "italic", color: "#999" }}>Aucune opération</li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
