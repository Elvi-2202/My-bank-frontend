import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard-page">
            <h2>Tableau de bord</h2>
            <p>Bienvenue dans votre tableau de bord des finances.</p>
            <div className="dashboard-cards">
                <div
                    className="dashboard-card"
                    onClick={() => navigate('/categories')}
                >
                    <span role="img" aria-label="Catégories" style={{ fontSize: '2rem' }}>📂</span>
                    <h3>Catégories</h3>
                    <p>Gérez vos catégories de dépenses</p>
                </div>
                <div
                    className="dashboard-card"
                    onClick={() => navigate('/operations')}
                >
                    <span role="img" aria-label="Opérations" style={{ fontSize: '2rem' }}>💸</span>
                    <h3>Opérations</h3>
                    <p>Consultez et ajoutez vos opérations</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
