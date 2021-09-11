import React from "react";

const BalanceComponent = ({ title, amount, currencySymbol, icon }) => {
  return (
    <>
      <div className="bg-white d-inline-flex align-items-center p-3 ps-4 pe-4 rounded shadow">
        <div className="me-2">{icon}</div>
        <div>
          <div>{title}</div>
          <div>
            {currencySymbol}
            {amount}
          </div>
        </div>
      </div>
    </>
  );
};

export default BalanceComponent;
