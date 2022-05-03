import React, { useState, useEffect } from "react";
import "./style.scss";

function TimeCounter({
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

    var cInput_utc_2 = new Date();
    cInput_utc_2.setMinutes(cInput_utc_2.getMinutes() - offset);

    difference = +new Date(input_utc) - +new Date(cInput_utc_2);

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
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
      const { days, hours, minutes } = calculateTimeLeft(time, cTime);
      if (!days && !hours && !minutes) {
        handleEndEvent();
      }
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    // if (!timeLeft[interval]) {
    //   return;
    // }

    let custom_interval = "";
    switch (interval) {
      case "days":
        custom_interval = "DAYS";
        break;
      case "hours":
        custom_interval = "HOURS";
        break;
      case "minutes":
        custom_interval = "MINUTES";
        break;
      case "seconds":
        custom_interval = "SECONDS";
        break;
      default:
        custom_interval = "";
        break;
    }
    const x = Math.floor(Math.random() * 100 + 1);

    // if (timeLeft.days === 0) {
    //   if (
    //     custom_interval === "HOURS" ||
    //     custom_interval === "MINUTES" ||
    //     custom_interval === "SECONDS"
    //   )
    //     timerComponents.push(
    //       <span
    //         className={`time-box ${timeClass}`}
    //         key={`${custom_interval}${x}`}
    //       >
    //         <span
    //           className={`time-inner-box ${intervalClass} ${intervalGapClass}`}
    //         >
    //           <span className="key">
    //             {timeLeft[interval] >= 10
    //               ? timeLeft[interval]
    //               : `0${timeLeft[interval]}`}
    //           </span>
    //           <span className="value">{custom_interval}</span>
    //         </span>
    //       </span>
    //     );
    // } else {
    //   if (
    //     custom_interval === "DAYS" ||
    //     custom_interval === "HOURS" ||
    //     custom_interval === "MINUTES"
    //   )
    //     timerComponents.push(
    //       <span
    //         className={`time-box ${timeClass}`}
    //         key={`${custom_interval}${x}`}
    //       >
    //         <span
    //           className={`time-inner-box ${intervalClass} ${intervalGapClass}`}
    //         >
    //           <span className="key">
    //             {timeLeft[interval] >= 10
    //               ? timeLeft[interval]
    //               : `0${timeLeft[interval]}`}
    //           </span>
    //           <span className="value">{custom_interval}</span>
    //         </span>
    //       </span>
    //     );
    // }

    timerComponents.push(
      <>
        <span
          className={`time-box ${timeClass}`}
          key={`${custom_interval}${x}`}
        >
          <span
            className={`time-inner-box ${intervalClass} ${intervalGapClass}`}
          >
            <span className="key">
              {timeLeft[interval] >= 10
                ? timeLeft[interval]
                : `0${timeLeft[interval]}`}
            </span>
            <span className="value">{custom_interval}</span>
          </span>
        </span>
      </>
    );
  });

  return (
    <>
      <div className={`time-block`}>
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
    </>
  );
}

export default TimeCounter;
