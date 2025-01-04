// src/components/ShoeCard/ShoeCard.jsx
import React from 'react';
import './ShoeCard.css';
import ProgressBar from '../ProgressBar/ProgressBar';

function ShoeCard({ brand, model, currentMiles, recommendedMiles }) {
  return (
    <div className="shoe-card">
      <h2 className="shoe-brand">{brand}</h2>
      <p className="shoe-model">{model}</p>
      <p className="mileage-text">
        {currentMiles} / {recommendedMiles} miles
      </p>

      {/* Use the ProgressBar component */}
      <div className="shoe-progress">
        <ProgressBar
          value={currentMiles}
          maxValue={recommendedMiles}
        />
      </div>
    </div>
  );
}

export default ShoeCard;
