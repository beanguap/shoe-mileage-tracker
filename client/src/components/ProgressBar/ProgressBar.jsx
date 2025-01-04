// Example: dynamic color based on fill
function ProgressBar({ value, maxValue }) {
    const percentage = maxValue ? (value / maxValue) * 100 : 0;
  
    // Choose color thresholds (e.g. < 50%, <80%, >80%)
    let barColor = 'linear-gradient(145deg, #6fd380, #76e18c)'; // default green
    if (percentage >= 80) {
      barColor = 'linear-gradient(145deg, #e19c9c, #e6abab)'; // red-ish
    } else if (percentage >= 50) {
      barColor = 'linear-gradient(145deg, #d1c46e, #e9df82)'; // yellow-ish
    }
  
    return (
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{
            width: `${percentage}%`,
            background: barColor
          }}
        />
      </div>
    );
  }
  

export default ProgressBar;