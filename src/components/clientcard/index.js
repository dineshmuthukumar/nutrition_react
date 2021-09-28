import React from "react";
import { Link } from "react-router-dom";
import NFTCounter from "../nft-counter";

const ClientCard = ({ title, desc, imgUrl, nftId, nftType }) => {
  const type = nftType == 'erc1155'
  return (
    <div className="card mb-3">
      <img src={imgUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        {/* <p className="card-text">
          <b>Highest Bid is 22.67 ETH</b>
        </p> */}
        <Link to={`/details/${nftId}`} className="btn btn-primary float-end">
          {type ? 'Buy' : 'Place Bid'}
        </Link>
      </div>
    </div>
  );
};

export default ClientCard;
