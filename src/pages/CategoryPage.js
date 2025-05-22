import React from 'react';

const categories = [
  { name: 'Logement', emoji: '🏠', color: '#4e73df' },
  { name: 'Alimentation', emoji: '🍽️', color: '#1cc88a' },
  { name: 'Transport', emoji: '🚗', color: '#36b9cc' },
  { name: 'Loisir', emoji: '🎮', color: '#f6c23e' },
  { name: 'Santé', emoji: '💊', color: '#e74a3b' },
  { name: 'Shopping', emoji: '🛍️', color: '#858796' },
  { name: 'Autre', emoji: '📁', color: '#888' }
];

const CategoryPage = ({ operations }) => (
  <div className="category-page">
    <h2>Catégories</h2>
    <p>Visualisez vos opérations par catégorie.</p>
    <div className="category-boxes">
      {categories.map((cat) => (
        <div
          className="category-box"
          key={cat.name}
          style={{ borderColor: cat.color }}
        >
          <span className="category-emoji" style={{ color: cat.color }}>
            {cat.emoji}
          </span>
          <div className="category-name">{cat.name}</div>
          <ul className="category-operations">
            {operations
              .filter(op => op.categorie === cat.name)
              .map((op, idx) => (
                <li key={idx}>
                  <span>{op.libelle}</span> — <strong>{op.montant} €</strong> — {op.date}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default CategoryPage;
