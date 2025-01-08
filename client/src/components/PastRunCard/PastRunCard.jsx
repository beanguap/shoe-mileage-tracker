// src/components/PastRunCard/PastRunCard.jsx
import React from 'react';
import './PastRunCard.css';

function PastRunCard({ location, distance, date, pace, medal, logo, onClick }) {
  const getMedalPath = (medal) => {
    switch (medal) {
      case 'gold':
        return '/medals/gold.svg';
      case 'silver':
        return '/medals/second.svg';
      case 'bronze':
        return '/medals/third.svg';
      default:
        return '';
    }
  };

  return (
    <div className="past-run-card" onClick={onClick}>
      <img src={logo} alt={`${location} logo`} className="run-logo" />
      <div className="run-details">
        <h3 className="run-location">{location}</h3>
        <p className="run-distance">{distance}</p>
        <p className="run-date">{new Date(date).toLocaleDateString()}</p>
        <p className="run-pace">Pace: {pace} min/mile</p>
        <img src={getMedalPath(medal)} alt={`${medal} medal`} className="run-medal" />
      </div>
    </div>
  );
}

export default PastRunCard;