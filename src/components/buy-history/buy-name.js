import React from "react";

const BuyName = ({ text, isTable = false }) => {
  return isTable ? (
    <div className="expand-history-owner">
      <img src="https://picsum.photos/100/100" />
      <div>
        <div className="text-secondary">{text}</div>
      </div>
    </div>
  ) : (
    <span className="text-secondary">{text}</span>
  );
};

export default BuyName;
