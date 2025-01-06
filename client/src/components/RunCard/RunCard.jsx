// src/components/RunCard/RunCard.jsx
import React from 'react';
import './RunCard.css';

function RunCard({ date, distance, steps }) {
  return (
    <div className="run-card">
      <div className="run-details">
        <span className="run-date">{date}</span>
        <span className="run-distance">{distance} miles</span>
      </div>
      <span className="run-steps">{steps} steps</span>
    </div>
  );
}

export default RunCard;