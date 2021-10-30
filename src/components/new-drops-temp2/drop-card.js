import React from "react";
import Image from "react-bootstrap/Image";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import NFTCounter from "../nft-counter";

import "../new-drops-temp/style.scss";

const DropCard = ({
  Id,
  ref,
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
  scroll,
}) => {
  const { user } = useSelector((state) => state.user.data);
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
              <NFTCounter time={"Nov 01, 2021 12:00:00"} />
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
              <Image src={img} />
              <div className="learnMore">
                <Link
                  to="#"
                  onClick={() => {
                    if (user?.slug) {
                      window.open(
                        `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/wallet#web`,
                        "_self"
                      );
                    } else {
                      window.open(
                        `${process.env.REACT_APP_ACCOUNTS_URL}/signup`,
                        "_self"
                      );
                    }
                  }}
                >
                  {user?.slug ? <>Get Ready For This NFT </> : "Register Now"}
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
