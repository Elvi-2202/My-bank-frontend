import React, { useState } from 'react';
import { addOperation } from "../Api"; // attention à la casse : api.js en minuscule

const CATEGORIES = [
  'Logement',
  'Alimentation',
  'Transport',
  'Loisir',
  'Santé',
  'Shopping',
  'Autre'
];

const OperationPage = () => {
  const [libelle, setLibelle] = useState('');
  const [montant, setMontant] = useState('');
  const [date, setDate] = useState('');
  const [categorie, setCategorie] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddOperation = async (e) => {
    e.preventDefault();

    if (!(libelle && montant && date && categorie)) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    const token = localStorage.getItem("jwtToken");
    if (!token) {
      alert("Vous devez être connecté.");
      return;
    }

    setLoading(true);

    try {
      // Appelle la fonction API en adaptant les clés attendues par le backend
      await addOperation(token, {
        label: libelle,
        amount: parseFloat(montant),
        date,
        category_id: CATEGORIES.indexOf(categorie) + 1, // ici l’id fictif, adapte si tu as vrai id
      });

      alert('Opération ajoutée à la catégorie !');

      // Reset formulaire
      setLibelle('');
      setMontant('');
      setDate('');
      setCategorie('');
    } catch (error) {
      alert("Erreur lors de l’ajout : " + error.message);
    } finally {
      setLoading(false);
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
        <button className="button" type="submit" disabled={loading}>
          {loading ? "Ajout en cours..." : "Ajouter"}
        </button>
      </form>
    </div>
  );
};

export default OperationPage;
