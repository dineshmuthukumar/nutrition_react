import React, { useState } from "react";
import { BiCheckCircle } from "react-icons/bi";
import NFTTimeLeft from "../nft-time-left";
import CurrentBid from "./../current-bid";
import NFTPlaceBid from "./../nft-place-bid";
import "./style.scss";

const NFTBaseDetails = () => {
  const [show, setShow] = useState(false);

  const handleShowBid = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="creator mt-4">
        Amitabh Bachchan
        <BiCheckCircle size={25} className="ms-1 check-icon" />
      </div>
      <div className="nft-title">Signed Poster #001</div>
      <p className="text-secondary mt-3 mb-5 nft-desc">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries
      </p>
      <CurrentBid />
      <hr />
      <NFTTimeLeft />
      <hr />

      <div className="text-center">
        <NFTPlaceBid show={show} handleClose={handleShowBid} />

        <button
          className="btn btn-dark text-center btn-lg w-75 mt-5 rounded-pill"
          onClick={handleShowBid}
        >
          Place Bid
        </button>
        <div className="mt-2 royalty-info">
          A 10% of royalty goes to the creator for future resale
        </div>
      </div>
    </>
  );
};

export default NFTBaseDetails;
