// src/components/RaceCard/RaceCard.jsx
import './RaceCard.css';

function RaceCard({ location, distance, organizer, date, logo }) {
  return (
    <div className="race-card">
      <img src={logo} alt={`${organizer} logo`} className="race-logo" />
      <div className="race-details">
        <h3 className="race-organizer">{organizer}</h3>
        <p className="race-location">{location}</p>
        <p className="race-distance">{distance}</p>
        <p className="race-date">{new Date(date).toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default RaceCard;