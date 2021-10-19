import React from "react";
import NFTPropPills from "../nft-prop-pills";
import "./style.scss";

const NFTProperties = ({ properties }) => {
  return (
    <div className="nft-props">
      <div className="nft-props-title">
        Properties
        {properties && (
          <span className="title-count">
            ({Object.keys(properties).length})
          </span>
        )}
      </div>

      <div className="mt-2 nft-props-content">
        {properties &&
          Object.keys(properties).map((property) => {
            return (
              <NFTPropPills
                property={properties[property]}
                propertyType={property}
              />
            );
          })}
      </div>
    </div>
  );
};

export default NFTProperties;
