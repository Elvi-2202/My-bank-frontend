import React, { useState } from 'react';

const CATEGORIES = [
  'Logement',
  'Alimentation',
  'Transport',
  'Loisir',
  'Santé',
  'Shopping',
  'Autre'
];

const OperationPage = ({ addOperation }) => {
  const [libelle, setLibelle] = useState('');
  const [montant, setMontant] = useState('');
  const [date, setDate] = useState('');
  const [categorie, setCategorie] = useState('');

  const handleAddOperation = (e) => {
    e.preventDefault();
    if (libelle && montant && date && categorie) {
      addOperation({
        libelle,
        montant: parseFloat(montant),
        date,
        categorie
      });
      setLibelle('');
      setMontant('');
      setDate('');
      setCategorie('');
      alert('Opération ajoutée à la catégorie !');
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  return (
    <div className="operation-page">
      <h2 className="operation-title">Opérations</h2>
      <p className="operation-subtitle">Ajoutez une opération à une catégorie.</p>
      <form className="operation-form" onSubmit={handleAddOperation}>
        <input
          type="text"
          placeholder="Libellé"
          value={libelle}
          onChange={(e) => setLibelle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Montant"
          value={montant}
          min={0}
          step="0.01"
          onChange={(e) => setMontant(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <select
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
          required
        >
          <option value="">Catégorie</option>
          {CATEGORIES.map((cat) => (
            <option value={cat} key={cat}>{cat}</option>
          ))}
        </select>
        <button className="button" type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default OperationPage;
