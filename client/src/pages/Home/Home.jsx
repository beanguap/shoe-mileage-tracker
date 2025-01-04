// src/pages/Home/Home.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

// Components
import ShoeCard from '../../components/ShoeCard/ShoeCard';
import RunCard from '../../components/RunCard/RunCard';

function Home() {
  // Test message from server
  const [message, setMessage] = useState('');

  // Hard-coded shoe data for ShoeCard
  const dummyShoe = {
    brand: 'Nike',
    model: 'Air Zoom Pegasus',
    currentMiles: 100,
    recommendedMiles: 300,
  };

  // Hard-coded runs for demonstration
  const [runs, setRuns] = useState([
    { date: '2025-01-02', distance: 5, shoeName: 'Nike Air Zoom Pegasus' },
    { date: '2025-01-03', distance: 3.2, shoeName: 'Nike Air Zoom Pegasus' },
  ]);

  useEffect(() => {
    // Example server call to test
    axios
      .get('http://localhost:3001')
      .then((res) => setMessage(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home-container">
      {/* Example circle or shoe image */}
      <div className="shoe-circle">
        <img src="/images/shoe.png" alt="Shoe" className="shoe-img" />
      </div>

      {/* Server message for debugging */}
      <p className="server-message">Server says: {message}</p>

      {/* Example shoe card */}
      <ShoeCard
        brand={dummyShoe.brand}
        model={dummyShoe.model}
        currentMiles={dummyShoe.currentMiles}
        recommendedMiles={dummyShoe.recommendedMiles}
      />

      {/* Runs Section */}
      <div className="run-list-container">
        <h2>Past Runs</h2>
        {runs.map((run, index) => (
          <RunCard
            key={index}
            date={run.date}
            distance={run.distance}
            shoeName={run.shoeName}
          />
        ))}
      </div>

      {/* Floating plus button */}
      <button className="add-button">+</button>

      {/* Bottom navigation */}
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
