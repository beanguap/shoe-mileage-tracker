// src/pages/Upcoming/Upcoming.jsx
import React, { useState } from 'react';
import './Upcoming.css';
import RaceCard from '../../components/RaceCard/RaceCard';
import BottomNav from '../../components/BottomNav/BottomNav';

const mockRaces = [
  {
    id: 1,
    location: 'Miami, FL',
    distance: '5k',
    organizer: 'Miami Marathon',
    date: '2024-03-15',
    logo: '/logos/Miami.png' // Updated path for 5k logo
  },
  {
    id: 2,
    location: 'Miami, FL',
    distance: '10k',
    organizer: 'Miami Run Club',
    date: '2024-04-10',
    logo: '/logos/Coconut.jpg' // Updated path for Run Club logo
  },
  {
    id: 3,
    location: 'Miami, FL',
    distance: 'Marathon',
    organizer: 'Miami Marathon',
    date: '2024-05-20',
    logo: '/logos/Miami.png' // Updated path for Marathon logo
  }
];

function Upcoming() {
  const [selectedDistance, setSelectedDistance] = useState('All');

  const handleFilterChange = (event) => {
    setSelectedDistance(event.target.value);
  };

  const filteredRaces = selectedDistance === 'All'
    ? mockRaces
    : mockRaces.filter(race => race.distance === selectedDistance);

  return (
    <div className="upcoming-container">
      <h2 className="upcoming-title">Upcoming Races</h2>
      <div className="filter-container">
        <label htmlFor="distance-filter">Filter by distance:</label>
        <select id="distance-filter" value={selectedDistance} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="5k">5k</option>
          <option value="10k">10k</option>
          <option value="Marathon">Marathon</option>
        </select>
      </div>
      <div className="race-list">
        {filteredRaces.map(race => (
          <RaceCard key={race.id} {...race} />
        ))}
      </div>
      <button 
        className="add-race-button" 
        aria-label="Add new race"
        onClick={() => console.log('Add new race clicked')}
      >
        +
      </button>
      <BottomNav />
    </div>
  );
}

export default Upcoming;