import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [time, setTime] = useState(new Date());
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  const getFormattedTime = () => {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return time.toLocaleString('en-US', options);
  };

  const getHourRotation = () => {
    const hour = time.getHours() % 12;
    return (hour * 30) + (time.getMinutes() * 0.5);
  };

  const getMinuteRotation = () => {
    return (time.getMinutes() * 6) + (time.getSeconds() * 0.1);
  };

  const getSecondRotation = () => {
    return time.getSeconds() * 6;
  };

  const handleSliderClick = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <div className={isNightMode ? `${styles.container} ${styles.nightMode}` : styles.container}>
      <div className={styles.clock}>
        <div className={styles.digitalClock}>
          <div className={styles.time}>{getFormattedTime()}</div>
        </div>
        <div className={styles.analogClock}>
          <div className={styles.hourHand} style={{ transform: `rotate(${getHourRotation()}deg)` }}></div>
          <div className={styles.minuteHand} style={{ transform: `rotate(${getMinuteRotation()}deg)` }}></div>
          <div className={styles.secondHand} style={{ transform: `rotate(${getSecondRotation()}deg)` }}></div>
        </div>
        <div className={styles.switchContainer} onClick={handleSliderClick}>
          <div className={`${styles.slider} ${isNightMode ? styles.nightMode : styles.dayMode}`}>
            <div className={styles.nightSky}>
              <div className={styles.stars}></div>
              <div className={styles.moon}></div>
            </div>
            <div className={styles.daySky}>
              <div className={styles.clouds}></div>
              <div className={styles.sun}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
