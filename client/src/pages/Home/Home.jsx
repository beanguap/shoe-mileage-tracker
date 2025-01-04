// src/pages/Home/Home.jsx
import React from 'react';
import './Home.css';

function Home() {
  // For the sake of the example, let's hardcode mileage data
  const currentMiles = 150;
  const maxMiles = 250;

  // Calculate percentage for the progress bar
  const progressPercent = (currentMiles / maxMiles) * 100;

  return (
    <div className="home-container">
      
      {/* Top Circle with Shoe */}
      <div className="shoe-circle">
        <img src="/images/shoe.png" alt="Shoe" className="shoe-img" />
      </div>

      {/* Mileage Display & Progress Bar */}
      <div className="mileage-info">
        <p className="mileage-text">
          {currentMiles} / {maxMiles}
        </p>
        <div className="mileage-progress">
          <div
            className="mileage-bar"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      {/* Floating "+" Button */}
      <button className="add-button">+</button>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <div className="nav-item"> {/* Icon for Past Runs */}</div>
        <div className="nav-item"> {/* Icon for Home */}</div>
        <div className="nav-item"> {/* Icon for Collection/Wants */}</div>
        <div className="nav-item"> {/* Icon for Upcoming */}</div>
      </nav>

    </div>
  );
}

export default Home;
