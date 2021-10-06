import React, { useState, useEffect } from "react";
import "./style.scss";

function NFTCounter({
  time,
  timeClass = "",
  intervalClass = "",
  intervalGapClass = "",
}) {
  const calculateTimeLeft = (input) => {
    const difference = +new Date(input) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(time));

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(time));
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    let custom_interval = "";
    switch (interval) {
      case "days":
        custom_interval = "d";
        break;
      case "hours":
        custom_interval = "h";
        break;
      case "minutes":
        custom_interval = "m";
        break;
      case "seconds":
        custom_interval = "s";
        break;
    }

    timerComponents.push(
      <span className={`counter-time ${timeClass}`}>
        {timeLeft[interval]}
        <span
          className={`counter-interval interval-gap ${intervalClass} ${intervalGapClass}`}
        >
          {custom_interval}
        </span>
      </span>
    );
  });

  return (
    <div className={`nft-counter`}>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className={`${timeClass}`}>0</span>
      )}
    </div>
  );
}

export default NFTCounter;
