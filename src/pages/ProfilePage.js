import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faEnvelope,
  faPhone,
  faMobileAlt,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';


const ProfilePage = () => {
  const navigate = useNavigate();

  // Champs modifiables
  const [fullName, setFullName] = useState('Kenneth Valdez');
  const [email, setEmail] = useState('fip@jukmuh.al');
  const [phone, setPhone] = useState('(239) 816-9029');
  const [mobile, setMobile] = useState('(320) 380-4539');
  const [address, setAddress] = useState('Bay Area, San Francisco, CA');

  // Réseaux sociaux modifiables
  const [website, setWebsite] = useState('https://bootdey.com');
  const [github, setGithub] = useState('bootdey');
  const [twitter, setTwitter] = useState('@bootdey');
  const [instagram, setInstagram] = useState('bootdey');
  const [facebook, setFacebook] = useState('bootdey');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profil mis à jour !');
    // Ici, tu peux connecter à ton API pour sauvegarder les infos
  };

  return (
    <div className="profile-bg">
      <div className="profile-breadcrumbs">
        <span
          style={{ cursor: 'pointer', color: '#007bff' }}
          onClick={() => navigate('/dashboard')}
        >
          Home
        </span>
        {' / '}
        <span>User</span> / <span className="active">User Profile</span>
      </div>
      <div className="profile-container">
        {/* Colonne gauche : profil et réseaux sociaux */}
        <div className="profile-sidebar">
          <div className="profile-card">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar7.png"
              alt="Avatar"
              className="profile-avatar"
            />
            <h3>{fullName}</h3>
            <p className="profile-title">Full Stack Developer</p>
            <p className="profile-location">{address}</p>
            <div className="profile-actions">
              <button className="btn btn-primary">Follow</button>
              <button className="btn btn-outline">Message</button>
            </div>
          </div>
          <form className="profile-links" onSubmit={handleSubmit}>
            <div className="profile-link-row">
              <FontAwesomeIcon icon={faGlobe} style={{ marginRight: 8 }} color="#00B86B" />
              <input
                type="text"
                value={website}
                onChange={e => setWebsite(e.target.value)}
                className="profile-input"
                placeholder="Website"
              />
            </div>
            <div className="profile-link-row">
              <FontAwesomeIcon icon={faGithub} style={{ marginRight: 8 }} color="#333" />
              <input
                type="text"
                value={github}
                onChange={e => setGithub(e.target.value)}
                className="profile-input"
                placeholder="Github"
              />
            </div>
            <div className="profile-link-row">
              <FontAwesomeIcon icon={faTwitter} style={{ marginRight: 8 }} color="#1DA1F2" />
              <input
                type="text"
                value={twitter}
                onChange={e => setTwitter(e.target.value)}
                className="profile-input"
                placeholder="Twitter"
              />
            </div>
            <div className="profile-link-row">
              <FontAwesomeIcon icon={faInstagram} style={{ marginRight: 8 }} color="#E4405F" />
              <input
                type="text"
                value={instagram}
                onChange={e => setInstagram(e.target.value)}
                className="profile-input"
                placeholder="Instagram"
              />
            </div>
            <div className="profile-link-row">
              <FontAwesomeIcon icon={faFacebook} style={{ marginRight: 8 }} color="#1877F3" />
              <input
                type="text"
                value={facebook}
                onChange={e => setFacebook(e.target.value)}
                className="profile-input"
                placeholder="Facebook"
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginTop: 10, width: '100%' }}>
              Enregistrer les liens
            </button>
          </form>
        </div>
        {/* Colonne droite : infos et statut */}
        <div className="profile-main">
          <form className="profile-info-card" onSubmit={handleSubmit}>
            <div className="profile-info-row">
              <div className="profile-info-label">
                <FontAwesomeIcon icon={faGlobe} style={{ marginRight: 6 }} color="#00B86B" />
                Full Name
              </div>
              <div className="profile-info-value">
                <input
                  type="text"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  className="profile-input"
                  required
                />
              </div>
            </div>
            <div className="profile-info-row">
              <div className="profile-info-label">
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 6 }} color="#EA4335" />
                Email
              </div>
              <div className="profile-info-value">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="profile-input"
                  required
                />
              </div>
            </div>
            <div className="profile-info-row">
              <div className="profile-info-label">
                <FontAwesomeIcon icon={faPhone} style={{ marginRight: 6 }} color="#34A853" />
                Phone
              </div>
              <div className="profile-info-value">
                <input
                  type="text"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="profile-input"
                />
              </div>
            </div>
            <div className="profile-info-row">
              <div className="profile-info-label">
                <FontAwesomeIcon icon={faMobileAlt} style={{ marginRight: 6 }} color="#4285F4" />
                Mobile
              </div>
              <div className="profile-info-value">
                <input
                  type="text"
                  value={mobile}
                  onChange={e => setMobile(e.target.value)}
                  className="profile-input"
                />
              </div>
            </div>
            <div className="profile-info-row">
              <div className="profile-info-label">
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: 6 }} color="#FABB05" />
                Address
              </div>
              <div className="profile-info-value">
                <input
                  type="text"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  className="profile-input"
                />
              </div>
            </div>
            <div style={{ textAlign: 'right', marginTop: 16 }}>
              <button type="submit" className="btn btn-primary">Enregistrer</button>
            </div>
          </form>
          <div className="profile-status-cards">
            <div className="profile-status-card">
              <div className="profile-status-title">
                <span className="assignment" style={{ color: "#007bff", fontStyle: "italic" }}>assignment</span> Project Status
              </div>
              <div className="profile-status-item">
                Web Design
                <div className="progress-bar">
                  <div className="progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="profile-status-item">
                Website Markup
                <div className="progress-bar">
                  <div className="progress" style={{ width: '72%' }}></div>
                </div>
              </div>
              <div className="profile-status-item">
                One Page
                <div className="progress-bar">
                  <div className="progress" style={{ width: '89%' }}></div>
                </div>
              </div>
              <div className="profile-status-item">
                Mobile Template
                <div className="progress-bar">
                  <div className="progress" style={{ width: '55%' }}></div>
                </div>
              </div>
              <div className="profile-status-item">
                Backend API
                <div className="progress-bar">
                  <div className="progress" style={{ width: '66%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
