import React, { useState } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import NFTCounter from "../nft-counter";
import "./style.scss";

const DropCard = ({
  img,
  cardTitle,
  smallTitle,
  cardDesc,
  dropTitle,
  dropDescOne,
  dropDescTwo,
  dropDescThree,
  auctionTitle,
  auctionTime,
  editionTitle,
  editionType,
  additional,
  additionalDesc,
  slug,
  catName,
  type,
}) => {
  const { user } = useSelector((state) => state.user.data);
  const history = useHistory();
  const handleClick = () => {
    if (type === "loot") {
      history.push(`/explore/loot/${slug}`);
    } else {
      history.push(`/explore/category/${catName}/${slug}`);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card_title">
            <h2>{cardTitle}</h2>
            <p className="small-title mb-3">{smallTitle}</p>
            <p>{cardDesc}</p>
          </div>
        </div>
        <div className="row drop_card">
          <div className="col-lg-6 border-right">
            <div className="drop-title">
              <h4 className="mb-4">{dropTitle}</h4>
              <p>{dropDescOne}</p>
              <p className={!dropDescThree ? "mb-4" : ""}>{dropDescTwo}</p>
              <p className="mb-4">{dropDescThree}</p>
            </div>
            <div className="auction-time">
              <p className="heading-S">{auctionTitle}</p>
              <NFTCounter time={"Nov 01, 2021 00:00:00"} />
            </div>
            <div className="auction-main">
              <div className="auction-one">
                <p className="heading-S">Minimum Price</p>
                <h1>TBA</h1>
              </div>
              <div className="auction-two">
                <p className="heading-S">{editionTitle}</p>
                <h1>{editionType} </h1>
              </div>
            </div>
            <div className="additional-perks">
              <p className="heading-S">{additional}</p>
              <p>{additionalDesc}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="drop-card-post">
              <Image src={img} role="button" onClick={handleClick} />
              <div className="learnMore">
                <Link to="#" onClick={handleClick}>
                  Get Ready For This NFT
                </Link>

                {/* <button type="button" onClick={()=> setModal(true)}>Place Your Bid Right Now!</button>  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropCard;
