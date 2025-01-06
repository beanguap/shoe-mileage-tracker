// src/pages/Home/Home.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import ShoeCard from '../../components/ShoeCard/ShoeCard';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import BottomNav from '../../components/BottomNav/BottomNav';
import RunCard from '../../components/RunCard/RunCard';

function Home() {
  const [currentShoe, setCurrentShoe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock run data - later replace with API call
  const recentRuns = [
    {
      date: 'Mar 15, 2025',
      distance: '3.2',
      steps: '6,432'
    },
    {
      date: 'Mar 13, 2025',
      distance: '2.8',
      steps: '5,847'
    }
  ];

  useEffect(() => {
    const fetchCurrentShoe = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await axios.get('http://localhost:3001/api/shoes');
        if (response.data.length > 0) {
          setCurrentShoe(response.data[0]);
        }
      } catch (error) {
        setError('Could not load shoe data. Please try again later.');
        console.error('Error fetching shoe:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrentShoe();
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="home-container">
      <div className="shoe-circle">
        {currentShoe && (
          <ShoeCard
            brand={currentShoe.brand}
            model={currentShoe.model}
            currentMiles={currentShoe.currentMiles}
            recommendedMiles={currentShoe.recommendedMiles}
          />
        )}
      </div>
  
      <div className="mileage-info">
  <p className="mileage-text">Shoe Health</p>
  <div className="mileage-stats">
    <div className="mileage-stat">
      <span className="stat-label">Current Mileage</span>
      <span className="stat-value">{currentShoe?.currentMiles || 0} miles</span>
    </div>
    <div className="mileage-stat">
      <span className="stat-label">Recommended Replacement</span>
      <span className="stat-value">{currentShoe?.recommendedMiles || 0} miles</span>
    </div>
  </div>
  <ProgressBar 
    value={currentShoe?.currentMiles || 0} 
    maxValue={currentShoe?.recommendedMiles || 0} 
  />
</div>
  
      <div className="run-history">
        <h3 className="run-history-title">Recent Runs</h3>
        <div className="run-list">
          {recentRuns.map((run, index) => (
            <RunCard
              key={index}
              date={run.date}
              distance={run.distance}
              steps={run.steps}
            />
          ))}
        </div>
      </div>
  
      <button 
        className="add-button" 
        aria-label="Add new run"
        onClick={() => console.log('Add new run clicked')}
      >
        +
      </button>
      <BottomNav />
    </div>
  );
}

export default Home;