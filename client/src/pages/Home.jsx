function Home() {
    return (
      <div className="home-container">
        <div className="shoe-circle">
          {/* Shoe icon or image */}
        </div>
  
        <div className="mileage-info">
          <p className="mileage-text">150 / 250</p>
          <div className="mileage-progress">
            {/* Progress bar goes here */}
          </div>
        </div>
  
        <button className="add-button">+</button>
  
        <nav className="bottom-nav">
          {/* Icons for Past Runs, Home, Collection, Upcoming */}
        </nav>
      </div>
    );
  }
  