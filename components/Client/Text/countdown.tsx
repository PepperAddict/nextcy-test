import React, { useState, useMemo, useEffect } from "react";


import differenceInSeconds from "date-fns/differenceInSeconds";

const Timer = ({ deadline }) => {
  const ONE_DAY = 60 * 60 * 24;
  const ONE_HOUR = 60 * 60;
  const ONE_MINUTE = 60;
  const [currentTime, setCurrentTime] = useState(new Date().getTime());

  const diffInSeconds = differenceInSeconds(deadline, currentTime);

  const getCoundown = () => {
    if (diffInSeconds <= 1) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
    const days = Math.floor(diffInSeconds / ONE_DAY);
    const hours = Math.floor((diffInSeconds - days * ONE_DAY) / ONE_HOUR);
    const minutes = Math.floor(
      (diffInSeconds - days * ONE_DAY - hours * ONE_HOUR) / ONE_MINUTE
    );
    const seconds =
      diffInSeconds - days * ONE_DAY - hours * ONE_HOUR - minutes * ONE_MINUTE;
    return {
      days,
      hours,
      minutes,
      seconds
    };
  };

  const countdown = useMemo(getCoundown, [currentTime]);

  useEffect(() => {
    setInterval(() => {
      const now = new Date().getTime();
      setCurrentTime(now);
    }, 1000);
  }, []);

  return (
    <div>
      <p>CONTDOWN</p>
      <span>{countdown.days} days</span>
      <span>{countdown.hours} hours</span>
      <span>{countdown.minutes} minutes</span>
      <span>{countdown.seconds} seconds</span>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Timer deadline={new Date(2026, 2, 27)} />
    </div>
  );
}
