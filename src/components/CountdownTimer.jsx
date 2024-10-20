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
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1 style={{fontSize: "35px"}}>Hurry up! ⌛</h1>
      <div style={{ marginBottom: "20px" }}>
        <p>KOTOBUKIYA-OUT SALE!</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', fontSize: '36px', marginBottom: "50px" }}>
        <div>
          <span style={{ fontWeight: 'bold', fontSize: "40px" }}>{formatTime(timeLeft.days)}</span>
          <div style={{ fontSize: '12px', marginTop: '5px' }}>Days</div>
        </div>
        <div>:</div>
        <div>
          <span style={{ fontWeight: 'bold',  fontSize: "40px" }}>{formatTime(timeLeft.hours)}</span>
          <div style={{ fontSize: '12px', marginTop: '5px' }}>Hrs</div>
        </div>
        <div>:</div>
        <div>
          <span style={{ fontWeight: 'bold',  fontSize: "40px" }}>{formatTime(timeLeft.minutes)}</span>
          <div style={{ fontSize: '12px', marginTop: '5px' }}>Mins</div>
        </div>
        <div>:</div>
        <div>
          <span style={{ fontWeight: 'bold',  fontSize: "40px" }}>{formatTime(timeLeft.seconds)}</span>
          <div style={{ fontSize: '12px', marginTop: '5px' }}>Secs</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
