import React from "react";

import ChainPills from "../chain-pills";

import "./style.scss";

const AdditionalPerks = ({ comics = [] }) => {
  return (
    <div className="chain-attributes">
      <div className="chain-att-title">
        Perks
        <span className="title-count">({comics.length})</span>
      </div>
      <div className="chain-att-content mt-2">
        {comics.map((comic, i) => (
          <ChainPills
            key={`chain-${i}`}
            first={comic.details}
            second={comic.name}
            pdf={true}
          />
        ))}
      </div>
    </div>
  );
};

export default AdditionalPerks;
