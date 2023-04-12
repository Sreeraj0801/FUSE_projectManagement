import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [loading, setLoading] = useState(true);
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    const start = window.performance.timing.navigationStart;
    const end = window.performance.timing.loadEventEnd;
    const duration = end - start;
    const speedMbps = (2 / (duration / 1000)).toFixed(2);
    setSpeed(speedMbps);
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>Internet speed: {speed} Mbps</div>
      )}
    </div>
  );
}

export default MyComponent;
