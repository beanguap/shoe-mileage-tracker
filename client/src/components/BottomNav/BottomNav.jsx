// src/components/BottomNav/BottomNav.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BottomNav.css';

function BottomNav() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');

  const handleNavClick = (route) => {
    setActiveTab(route);
    navigate(`/${route === 'home' ? '' : route}`);
  };

  return (
    <nav className="bottom-nav">
      <div 
        className={`nav-item ${activeTab === 'past-runs' ? 'active' : ''}`}
        onClick={() => handleNavClick('past-runs')}
      >
        <div className="nav-icon">↩️</div>
        <div className="nav-label">Past runs</div>
      </div>

      <div 
        className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => handleNavClick('home')}
      >
        <div className="nav-icon">🏠</div>
        <div className="nav-label">Home</div>
      </div>

      <div 
        className={`nav-item ${activeTab === 'collection' ? 'active' : ''}`}
        onClick={() => handleNavClick('collection')}
      >
        <div className="nav-icon">👟</div>
        <div className="nav-label">Collection</div>
      </div>

      <div 
        className={`nav-item ${activeTab === 'upcoming' ? 'active' : ''}`}
        onClick={() => handleNavClick('upcoming')}
      >
        <div className="nav-icon">📅</div>
        <div className="nav-label">Upcoming</div>
      </div>
    </nav>
  );
}

export default BottomNav;