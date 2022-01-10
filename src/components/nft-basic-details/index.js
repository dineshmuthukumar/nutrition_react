import React, { useState } from "react";
import ReadMoreReact from "read-more-react";
import { useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import _ from "lodash";

import BidValue from "../bid-value";
import ToolTip from "../tooltip";
import NFTPutOnSale from "../nft-put-on-sale";
import { ReactComponent as DiscordSvg } from "./../../icons/discord_logo.svg";
import postImages from "../../images/post1.png";
import userImg from "../../images/user_1.png";

import "./style.scss";
const NFTBaseDetails = ({
  nft,
  putOnSalePop,
  setPutOnSalePop,
  isQuantityAvailable,
  owners,
}) => {
  const { user } = useSelector((state) => state.user.data);

  const erc721 = nft.nft_type === "erc721";
  const isOwner = _.has(nft, "owner_details");
  const isOnSale = _.size(_.get(nft, "owner_details.orders", [])) > 0;
  const availableQuantity = _.get(nft, "owner_details.available_quantity", 0);

  return (
    <>
      <div className="creator mt-3">
        {nft.category_name} |
        {nft.celebrity_id === 1 ? " Amitabh Bachchan" : " Stan Lee's"} Exclusive
        NFTs
        <ToolTip
          icon={<FaCheckCircle size={16} className="ms-2 check-icon" />}
          content="Verified Artist"
          placement="right"
        />
      </div>
      <div className="nft-title-container">
        <div className="nft-title">{nft.name}</div>

        <ToolTip
          icon={
            <div
              className="discord"
              onClick={() =>
                window.open("https://discord.com/invite/87s8ReJ5FA", "_blank")
              }
            >
              {/* <div className="count">22</div> */}
              <DiscordSvg />
            </div>
          }
          content="View this NFT bid's discord server"
          placement="left"
        />
      </div>
      <p className="text-secondary mt-1 mb-5 nft-desc">
        {nft.description && (
          <ReadMoreReact
            min={200}
            ideal={200}
            max={560}
            text={nft.description}
          />
        )}
      </p>

      <div className="bottom-content">
        {erc721 && owners.length > 0 && (
          <>
            <div className="d-flex">
              <BidValue
                title="Owned By"
                avatar={owners[0].avatar_url}
                name={owners[0].user_name}
                isEnd
              />
            </div>
            <hr className="custom-divider" />
          </>
        )}

        <div className="d-flex">
          <BidValue title="Category" value={nft.category_name} />
        </div>
        <hr className="custom-divider" />
        <div className="d-flex">
          {(() => {
            if (erc721 && isOwner) {
              return (
                <BidValue
                  title="You Own"
                  value="1 of 1"
                  isLeft
                  isOwner={isOwner}
                />
              );
            } else if (erc721 && !isOwner) {
              return <BidValue title="Limited Edition" value="1 of 1" isLeft />;
            } else if (!erc721 && isOwner) {
              return (
                <BidValue
                  title="You Own"
                  value={`${_.get(nft, "owner_details.total_quantity")} / ${
                    nft.total_quantity
                  }`}
                  isOwner
                />
              );
            } else {
              return <BidValue title="Edition(s)" value={nft.total_quantity} />;
            }
          })()}
        </div>
        <hr className="custom-divider" />

        <div className="text-center">
          <NFTPutOnSale
            nft={nft}
            putOnSalePop={putOnSalePop}
            setPutOnSalePop={setPutOnSalePop}
          />

          {(() => {
            if (!user) {
              return (
                <button
                  disabled={false}
                  className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                  onClick={() =>
                    window.open(
                      `${process.env.REACT_APP_ACCOUNTS_URL}/signin?redirect=${window.location.href}`,
                      "_self"
                    )
                  }
                >
                  Sign In
                </button>
              );
            } else if (isOwner && !isOnSale) {
              return (
                <button
                  disabled={false}
                  className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                  onClick={() => setPutOnSalePop(!putOnSalePop)}
                >
                  List for sale
                </button>
              );
            } else if (isOwner && isOnSale) {
              if (isQuantityAvailable > 0) {
                return (
                  <button
                    disabled={false}
                    className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                    onClick={() => setPutOnSalePop(!putOnSalePop)}
                  >
                    {erc721
                      ? "List for sale"
                      : `List for sale (${
                          isQuantityAvailable
                            ? isQuantityAvailable
                            : availableQuantity
                        })`}
                  </button>
                );
              } else {
                return (
                  <button
                    disabled={true}
                    className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                  >
                    Listed on sale
                  </button>
                );
              }
            } else {
              return (
                <button
                  disabled={true}
                  className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                >
                  Yet To Be Listed!
                </button>
              );
            }
          })()}
        </div>
      </div>
    </>
  );
};

export default NFTBaseDetails;
