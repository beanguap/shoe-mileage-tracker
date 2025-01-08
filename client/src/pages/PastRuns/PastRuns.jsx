import React, { useState } from 'react';
import './PastRuns.css';
import PastRunCard from '../../components/PastRunCard/PastRunCard';
import BottomNav from '../../components/BottomNav/BottomNav';

const mockRuns = [
  {
    id: 1,
    location: 'Miami, FL',
    distance: '5k',
    date: '2024-03-15',
    pace: '8:30',
    medal: 'gold',
    logo: '/logos/Miami.png'
  },
  {
    id: 2,
    location: 'Miami, FL',
    distance: '10k',
    date: '2024-04-10',
    pace: '9:00',
    medal: 'silver',
    logo: '/logos/Coconut.jpg'
  },
  {
    id: 3,
    location: 'Miami, FL',
    distance: 'Marathon',
    date: '2024-05-20',
    pace: '10:00',
    medal: 'bronze',
    logo: '/logos/Miami.png'
  }
];

function PastRuns() {
  const [selectedDistance, setSelectedDistance] = useState('All');
  const [selectedRun, setSelectedRun] = useState(null);
  const [notes, setNotes] = useState('');

  const handleFilterChange = (event) => {
    setSelectedDistance(event.target.value);
  };

  const handleRunClick = (run) => {
    setSelectedRun(run);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const filteredRuns = selectedDistance === 'All'
    ? mockRuns
    : mockRuns.filter(run => run.distance === selectedDistance);

  return (
    <div className="past-runs-container">
      <h2 className="past-runs-title">Past Runs</h2>
      <div className="filter-container">
        <label htmlFor="distance-filter">Filter by distance:</label>
        <select id="distance-filter" value={selectedDistance} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="5k">5k</option>
          <option value="10k">10k</option>
          <option value="Marathon">Marathon</option>
        </select>
      </div>
      <div className="run-list">
        {filteredRuns.map(run => (
          <PastRunCard key={run.id} {...run} onClick={() => handleRunClick(run)} />
        ))}
      </div>
      {selectedRun && (
        <div className="notes-section">
          <h3>Add Notes for {selectedRun.location} Run</h3>
          <textarea
            value={notes}
            onChange={handleNotesChange}
            placeholder="Add your notes here..."
          />
        </div>
      )}
      <BottomNav />
    </div>
  );
}

export default PastRuns;