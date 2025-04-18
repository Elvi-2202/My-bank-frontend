import React, { useState } from 'react';

const OperationPage = () => {
    const [operations, setOperations] = useState([]);
    const [libelle, setLibelle] = useState('');
    const [montant, setMontant] = useState('');
    const [date, setDate] = useState('');
    const [categorie, setCategorie] = useState('');

    // Fonction pour ajouter une nouvelle opération
    const handleAddOperation = () => {
        if (libelle && montant && date && categorie) {
            const newOperation = { libelle, montant, date, categorie };
            setOperations([...operations, newOperation]);
            // Réinitialiser les champs
            setLibelle('');
            setMontant('');
            setDate('');
            setCategorie('');
        } else {
            alert('Veuillez remplir tous les champs.');
        }
    };

    // Fonction pour supprimer une opération
    const handleDeleteOperation = (index) => {
        const updatedOperations = operations.filter((_, i) => i !== index);
        setOperations(updatedOperations);
    };

    // Fonction pour modifier une opération
    const handleEditOperation = (index) => {
        const operationToEdit = operations[index];
        setLibelle(operationToEdit.libelle);
        setMontant(operationToEdit.montant);
        setDate(operationToEdit.date);
        setCategorie(operationToEdit.categorie);
        // Supprimer l'ancienne opération pour la remplacer
        handleDeleteOperation(index);
    };

    return (
        <div className="operation-page">
            <h2>Opérations</h2>
            <p>Gérez vos opérations financières ici.</p>

            {/* Formulaire pour ajouter une nouvelle opération */}
            <div className="operation-form">
                <input
                    type="text"
                    placeholder="Libellé"
                    value={libelle}
                    onChange={(e) => setLibelle(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Montant"
                    value={montant}
                    onChange={(e) => setMontant(e.target.value)}
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Catégorie"
                    value={categorie}
                    onChange={(e) => setCategorie(e.target.value)}
                />
                <button className="button" onClick={handleAddOperation}>Ajouter</button>
            </div>

            {/* Liste des opérations */}
            <div className="operation-list">
                <h3>Liste des opérations</h3>
                {operations.length === 0 ? (
                    <p>Aucune opération à afficher.</p>
                ) : (
                    <ul>
                        {operations.map((operation, index) => (
                            <li key={index} className="operation-item">
                                <span>{operation.libelle} - {operation.montant} € - {operation.date} - {operation.categorie}</span>
                                <button className="button" onClick={() => handleEditOperation(index)}>Modifier</button>
                                <button className="button" onClick={() => handleDeleteOperation(index)}>Supprimer</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default OperationPage;
