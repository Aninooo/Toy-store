import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countDownDate = new Date("Oct 31, 2024 23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => String(time).padStart(2, '0');

  return (
    <div className="countdown-timer">
      <p>ATC-OUT SALE!</p>
      <div className="time-display">
        <div>
          <span className="time-value">{formatTime(timeLeft.days)}</span>
          <div className="time-label">Days</div>
        </div>
        <div>:</div>
        <div>
          <span className="time-value">{formatTime(timeLeft.hours)}</span>
          <div className="time-label">Hrs</div>
        </div>
        <div>:</div>
        <div>
          <span className="time-value">{formatTime(timeLeft.minutes)}</span>
          <div className="time-label">Mins</div>
        </div>
        <div>:</div>
        <div>
          <span className="time-value">{formatTime(timeLeft.seconds)}</span>
          <div className="time-label">Secs</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
