import React from "react";

const Badge = ({ title, value, currency }) => {
  return (
    <>
      <div className="title text-secondary">{title}</div>
      <div className="value">
        {value}
        {currency && <span className="currency-symbol">{currency} </span>}
      </div>
    </>
  );
};

export default Badge;
