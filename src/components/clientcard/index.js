import React from "react";

const ClientCard = ({ title, desc, imgUrl }) => {
  return (
    <div className="card mb-3">
      <img src={imgUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <p className="card-text">
          <b>Highest Bid is 22.67 ETH</b>
        </p>
        <a href="#" className="btn btn-primary float-end">
          Place Bid
        </a>
      </div>
    </div>
  );
};

export default ClientCard;
