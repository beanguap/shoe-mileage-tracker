// ProgressBar.jsx
import React from 'react';
import './ProgressBar.css';

// In ProgressBar.jsx
function ProgressBar({ value, maxValue }) {
  const percentage = maxValue ? (value / maxValue) * 100 : 0;
  
  // Create gradient based on percentage
  const getBarColor = (percent) => {
    if (percent >= 80) {
      return 'linear-gradient(145deg, #e19c9c, #e6abab)'; // red gradient
    } else if (percent >= 50) {
      return 'linear-gradient(145deg, #d1c46e, #e9df82)'; // yellow gradient
    } else {
      return 'linear-gradient(145deg, #6fd380, #76e18c)'; // green gradient
    }
  };

  return (
    <div className="progress-container">
      <div className="progress-background">
        <div
          className="progress-bar"
          style={{
            width: `${percentage}%`,
            background: getBarColor(percentage)
          }}
        >
          <span className="progress-text">{Math.round(percentage)}%</span>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;