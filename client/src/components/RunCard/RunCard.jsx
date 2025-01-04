// src/components/RunCard/RunCard.jsx
import React from 'react';
import './RunCard.css';

function RunCard({ date, distance, shoeName }) {
  return (
    <div className="run-card">
      <div className="run-info">
        <p className="run-date">Date: {date}</p>
        <p className="run-distance">Distance: {distance} miles</p>
        <p className="run-shoe">Shoe: {shoeName}</p>
      </div>
    </div>
  );
}

export default RunCard;
