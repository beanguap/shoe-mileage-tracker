// src/pages/Home/Home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

// Import your new components
import ShoeCard from '../../components/ShoeCard/ShoeCard';
import RunCard from '../../components/RunCard/RunCard';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

function Home() {
  // Test message from server (for "Server says: ___")
  const [message, setMessage] = useState('');

  // Arrays for shoes and runs (fetched from backend or hard-coded)
  const [shoes, setShoes] = useState([]);
  const [runs, setRuns] = useState([]);

  // Example weekly mileage progress
  const weeklyMiles = 18;
  const weeklyGoal = 25;

  useEffect(() => {
    // 1) Test the root endpoint
    axios
      .get('http://localhost:3001')
      .then((res) => setMessage(res.data))
      .catch((err) => console.error(err));

    // 2) Fetch shoes (example: GET /api/shoes)
    // If your actual endpoint differs, adjust accordingly
    axios
      .get('http://localhost:3001/api/shoes')
      .then((res) => {
        setShoes(res.data);
      })
      .catch((err) => console.error(err));

    // 3) Fetch runs (example: GET /api/runs)
    axios
      .get('http://localhost:3001/api/runs')
      .then((res) => {
        setRuns(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home-container">
      
      {/* 1. Large shoe circle (top) */}
      <div className="shoe-circle">
        <img src="/images/shoe.png" alt="Shoe" className="shoe-img" />
      </div>

      {/* 2. Display the server message (for testing) */}
      <p className="server-message">Server says: {message}</p>

      {/* 3. Weekly progress (example usage of ProgressBar) */}
      <div className="weekly-progress">
        <p>Weekly Mileage: {weeklyMiles} / {weeklyGoal}</p>
        <ProgressBar value={weeklyMiles} maxValue={weeklyGoal} />
      </div>

      {/* 4. Shoe cards */}
      <div className="shoe-cards-container">
        <h2>Your Shoes</h2>
        {shoes.length > 0 ? (
          shoes.map((shoe, idx) => (
            <ShoeCard
              key={idx}
              brand={shoe.brand}
              model={shoe.model}
              currentMiles={shoe.currentMiles}
              recommendedMiles={shoe.recommendedMiles}
            />
          ))
        ) : (
          <p>No shoes found.</p>
        )}
      </div>

      {/* 5. Run cards */}
      <div className="run-list-container">
        <h2>Recent Runs</h2>
        {runs.length > 0 ? (
          runs.map((run, idx) => (
            <RunCard
              key={idx}
              date={run.date}
              distance={run.distance}
              shoeName={run.shoeName} // or however your data references the shoe
            />
          ))
        ) : (
          <p>No runs logged.</p>
        )}
      </div>

      {/* 6. Floating "+" button */}
      <button className="add-button">+</button>

      {/* 7. Bottom navigation */}
      <nav className="bottom-nav">
        <div className="nav-item">Runs</div>
        <div className="nav-item">Home</div>
        <div className="nav-item">Collection</div>
        <div className="nav-item">Upcoming</div>
      </nav>

    </div>
  );
}

export default Home;
