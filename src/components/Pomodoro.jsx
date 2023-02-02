import React, { useState, useEffect } from 'react';

const Pomodoro = () => {
  const [time, setTime] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);
  
  const handleStart = () => {
    setIsRunning(true);
  };
  
  const handleStop = () => {
    setIsRunning(false);
  };
  
  const handleReset = () => {
    setTime(1500);
    setIsRunning(false);
  };
  
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  
  return (
    <div>
      <h1>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Pomodoro;
