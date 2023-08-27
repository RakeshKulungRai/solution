import React, { useState, useEffect } from 'react';

function Time() {
  const [remainingTime, setRemainingTime] = useState(1800); // 1 hour in seconds

  useEffect(() => {
    // Update the remaining time every second
    const intervalId = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(prevRemainingTime => prevRemainingTime - 1);
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [remainingTime]);

  const formatTime = timeInSeconds => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      {remainingTime > 0 ? (
        <p>Time remaining: {formatTime(remainingTime)}</p>
      ) : (
        <p>Time's up!</p>
      )}
    </div>
  );
}

export default Time;
