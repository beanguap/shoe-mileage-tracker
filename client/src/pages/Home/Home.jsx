// src/pages/Home/Home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import ShoeCard from '../../components/ShoeCard/ShoeCard';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import BottomNav from '../../components/BottomNav/BottomNav';

function Home() {
  const [currentShoe, setCurrentShoe] = useState(null);
  const weeklyMiles = 18;
  const weeklyGoal = 25;

  useEffect(() => {
    const fetchCurrentShoe = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/shoes');
        if (response.data.length > 0) {
          setCurrentShoe(response.data[0]); // Get the first shoe for demo
        }
      } catch (error) {
        console.error('Error fetching shoe:', error);
      }
    };

    fetchCurrentShoe();
  }, []);

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
        <p className="mileage-text">Weekly Progress</p>
        <ProgressBar 
          value={weeklyMiles} 
          maxValue={weeklyGoal} 
        />
      </div>

      <button className="add-button">+</button>
      <BottomNav />
    </div>
  );
}

export default Home;