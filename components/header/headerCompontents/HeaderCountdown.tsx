"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const tomorrow = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );

    const difference: number = tomorrow.getTime() - now.getTime();

    let timeLeft = {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-yellow-300 text-gray-900 py-2 px-4 text-center font-bold">
      Promotion ends in: {formatTime(timeLeft.hours)}:
      {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}! Hurry up!
    </div>
  );
};

export default CountdownTimer;
