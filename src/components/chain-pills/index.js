import React from "react";

import "./style.scss";

const ChainPills = ({ first, second, type, pdf = false }) => {
  return (
    <div
      className={`chain-pills rounded-pill border border-dark ${
        !second && "one-pill"
      }`}
    >
      {type === "array" ? (
        <div className="first">
          {second && (
            <div className="second rounded-pill border border-dark">
              {second}
            </div>
          )}
          <a href={first[1]} target={"_blank"}>
            {first[0]}
          </a>
        </div>
      ) : (
        <div className="first">
          {second && (
            <div className="second rounded-pill border border-dark">
              {second}
            </div>
          )}
          {(() => {
            if (pdf) {
              return (
                <a href={first} role={"button"} target="_blank" download>
                  PDF
                </a>
              );
            } else {
              return first;
            }
          })()}
        </div>
      )}
    </div>
  );
};

export default ChainPills;
