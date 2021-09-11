import React from "react";
import { useTranslation } from "react-multi-lang";
import "./style.scss";

const BankCard = ({
  isActive = false,
  onClick = () => {},
  name,
  type,
  expiryMonth,
  expiryYear,
  number,
}) => {
  const t = useTranslation();
  return (
    <div
      onClick={onClick}
      className={`bg-white shadow p-3 rounded mb-3 ${
        isActive && `border border-3 border-primary`
      }`}
    >
      <div>
        <label>
          <input
            type="radio"
            name="bank-card"
            className="me-2"
            checked={isActive}
            onChange={() => {}}
          />
          {type} {number}
        </label>
      </div>
      <div>
        <small className="text-secondary font-10">Name</small>
      </div>

      <div>
        <small className="text-secondary">
          <b>{name} </b>
        </small>
      </div>
      <div>
        <small className="text-secondary font-10">Expiry</small>
      </div>

      <div>
        <small className="text-secondary">
          <b>
            {expiryMonth}/{expiryYear}
          </b>
        </small>
      </div>
      <div className="mt-3 text-end">
        <button className="btn btn-primary btn-sm">{t("removecard")}</button>
      </div>
    </div>
  );
};

export default BankCard;
