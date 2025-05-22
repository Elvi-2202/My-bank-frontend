import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        // Ajoute ici ta logique de déconnexion si besoin
        navigate('/');
    };

    const isDashboard = location.pathname === '/dashboard';

    return (
        <nav className="navbar">
            <div className="navbar-center">
                MyBank
            </div>
            {isDashboard && (
                <div className="navbar-actions">
                    <FontAwesomeIcon
                        icon={faUserCircle}
                        size="2x"
                        style={{ cursor: 'pointer' }}
                        title="Profil"
                        onClick={() => navigate('/profile')}
                    />
                    <button
                        onClick={handleLogout}
                        className="icon-btn"
                        title="Déconnexion"
                    >
                        <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
