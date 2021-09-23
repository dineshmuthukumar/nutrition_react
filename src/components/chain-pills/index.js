import React from "react";
import "./style.scss";

const ChainPills = ({ first, second }) => {
  return (
    <div
      className={`chain-pills rounded-pill border border-dark ${
        !second && "one-pill"
      }`}
    >
      <div className="first">
        {second && (
          <div className="second rounded-pill border border-dark">{second}</div>
        )}
        {first}
      </div>
    </div>
  );
};

export default ChainPills;
