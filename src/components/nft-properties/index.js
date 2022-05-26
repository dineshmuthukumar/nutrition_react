import React from "react";
import NFTPropPills from "../nft-prop-pills";
import images from "../../utils/images.json";
import "./style.scss";

const NFTProperties = ({ properties = [], statistics }) => {
  return (
    <div className="chain-attributes">
      <div className="chain-att-title rank-title">
        Properties
        {statistics?.rank && (
          <div className="rank-block">
            <img className="me-2" src={images.trophy} alt="trophy" />
            <span className="title">Rank</span>
            <span className="rank-value">
              {statistics?.rank?.value}/{statistics?.rank?.maximum}
            </span>
          </div>
        )}
      </div>
      <div className="chain-att-content mt-2">
        {properties.map((property, i) => {
          return (
            <NFTPropPills
              key={`property-${i}`}
              title={Object.keys(property)}
              property={property[Object.keys(property)]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NFTProperties;
