import React from "react";
import Image from "react-bootstrap/Image";
import NFTCounter from "../nft-counter";
import "./style.scss";

const DropCard = ({ img ,cardTitle, smallTitle, cardDesc, dropTitle, dropDescOne, dropDescTwo, auctionTitle, auctionTime, editionTitle, editionType, additional, additionalDesc }) => {
  return (
    <>
      <section className="dropCard-Section" id="drop_1">
        <div className="container">
          <div className="row">
            <div className="card_title">
              <h2>{cardTitle}</h2>
              <p className="small-title mb-3">
                {smallTitle}
              </p>
              <p>
                {cardDesc}
              </p>
            </div>
          </div>
          <div className="row drop_card">
            <div className="col-lg-6 border-right">
              <div className="drop-title">
                <h4 className="mb-4">{dropTitle}</h4>
                <p>
                  {dropDescOne}
                </p>
                <p className="mb-4">
                  {dropDescTwo}
                </p>
              </div>
              <div className="auction-time">
                <h5>{auctionTitle}</h5>
                <NFTCounter time={auctionTime} />
              </div>
              <div class="auction-main">
                <div class="auction-one">
                  <p class="heading-S">Minimum Price</p>
                  <h1>TBA</h1>
                </div>
                <div class="auction-two">
                  <p class="heading-S">{editionTitle}</p>
                  <h1>{editionType} </h1>
                </div>
              </div>
              <div className="additional-perks">
                <h5>{additional}</h5>
                <p>
                  {additionalDesc}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="drop-card-post">
                <Image src={img} />
                <div class="learnMore">
                  {" "}
                  <a href="#">Join The Waitlist</a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DropCard;
