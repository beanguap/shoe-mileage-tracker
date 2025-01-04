// src/components/ShoeCard/ShoeCard.jsx
import './ShoeCard.css';

function ShoeCard({ brand, model, currentMiles, recommendedMiles }) {
  // Calculate shoe health percentage
  const progressPercent = (currentMiles / recommendedMiles) * 100;
  
  return (
    <div className="shoe-card">
      <h2 className="shoe-brand">{brand}</h2>
      <p className="shoe-model">{model}</p>
      <div className="mileage">
        <span>{currentMiles} / {recommendedMiles} miles</span>
        <div className="progress-track">
          <div 
            className="progress-fill" 
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ShoeCard;
