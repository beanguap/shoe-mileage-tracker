// src/components/ShoeCard/ShoeCard.jsx
import React from 'react';
import './ShoeCard.css';
import ProgressBar from '../ProgressBar/ProgressBar';

function ShoeCard({ brand, model, currentMiles, recommendedMiles, image }) {
  const percentage = (currentMiles / recommendedMiles) * 100;
  
  let statusClass = 'status-good';
  if (percentage >= 80) {
    statusClass = 'status-warning';
  } else if (percentage >= 100) {
    statusClass = 'status-danger';
  }

  return (
    <div className={`shoe-card ${statusClass}`}>
      <div className="shoe-image-container"> 
        <img src={image} alt={`${brand} ${model}`} className="shoe-image" />
      </div>

      <div className="shoe-info">
        <div className="shoe-header">
          <h2 className="shoe-brand">{brand}</h2>
          <span className="shoe-model">{model}</span>
        </div>
        
        <div className="mileage-container">
          <div className="mileage-text">
            <span className="current-miles">{currentMiles}</span>
            <span className="separator">/</span>
            <span className="recommended-miles">{recommendedMiles}</span>
            <span className="unit">miles</span>
          </div>
          <ProgressBar 
            value={currentMiles} 
            maxValue={recommendedMiles} 
          />
        </div>
      </div>
    </div>
  );
}

export default ShoeCard;