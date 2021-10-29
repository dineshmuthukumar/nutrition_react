import React from "react";
import icon1 from "../../images/icons/icon_1.png";
import icon2 from "../../images/icons/icon_2.png";
import icon3 from "../../images/icons/icon_3.png";
import icon4 from "../../images/icons/icon_4.png";
import icon5 from "../../images/icons/icon_5.png";
import "./style.scss";

const NFTPropPills = ({ property, propertyType }) => {
  const icons = [icon1, icon2, icon3, icon4, icon5];
  const random = Math.floor(Math.random() * icons.length);
  return (
    <div className="nft-prop-pills">
      <img src={icons[random]} alt="property logo" />
      <div>
        <div className="title">{propertyType}</div>
        <div className="desc text-secondary">{property}</div>
      </div>
    </div>
  );
};

export default NFTPropPills;
