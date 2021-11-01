import React, { useState, useEffect } from "react";
import "./style.scss";

function NFTCounter({
  time,
  cTime,
  timeClass = "",
  intervalClass = "",
  intervalGapClass = "",
  handleEndEvent = () => {},
}) {
  const calculateTimeLeft = (input, cInput) => {
    var offset = new Date().getTimezoneOffset();
    var input_utc = new Date(input);
    input_utc.setMinutes(input_utc.getMinutes() - offset);

    let difference;
    if (cInput) {
      var cInput_utc = new Date(cInput);
      cInput_utc.setMinutes(cInput_utc.getMinutes() - offset);

      difference = +new Date(input_utc) - +new Date(cInput_utc);
    } else {
      var cInput_utc_1 = new Date();
      cInput_utc_1.setMinutes(cInput_utc_1.getMinutes() - offset);

      difference = +new Date(input_utc) - +new Date(cInput_utc_1);
    }

    var cInput_utc_temp = new Date();
    cInput_utc_temp.setMinutes(cInput_utc_temp.getMinutes() - offset);

    difference = +new Date(input_utc) - +new Date(cInput_utc_temp);

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0.1,
    };

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

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(time, cTime));

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(time, cTime));
      const { days, hours, minutes, seconds } = calculateTimeLeft(time, cTime);
      if (!days && !hours && !minutes && !seconds) {
        handleEndEvent();
      }
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
      default:
        custom_interval = "";
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
        <span className={`counter-time ${timeClass}`}>
          0
          <span
            className={`counter-interval interval-gap ${intervalClass} ${intervalGapClass}`}
          >
            s
          </span>
        </span>
      )}
    </div>
  );
}

export default NFTCounter;
