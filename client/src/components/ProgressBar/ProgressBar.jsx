// ProgressBar.jsx
import React from 'react';
import './ProgressBar.css';

function ProgressBar({ value, maxValue }) {
  const percentage = maxValue ? (value / maxValue) * 100 : 0;
  
  // Color gradients for different percentage ranges
  let barColor = 'linear-gradient(145deg, #6fd380, #76e18c)'; // default green
  if (percentage >= 80) {
    barColor = 'linear-gradient(145deg, #e19c9c, #e6abab)'; // red-ish
  } else if (percentage >= 50) {
    barColor = 'linear-gradient(145deg, #d1c46e, #e9df82)'; // yellow-ish
  }

  return (
    <div className="progress-container">
      <div className="progress-background">
        <div
          className="progress-bar"
          style={{
            width: `${percentage}%`,
            background: barColor
          }}
        >
          <span className="progress-text">{Math.round(percentage)}%</span>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;